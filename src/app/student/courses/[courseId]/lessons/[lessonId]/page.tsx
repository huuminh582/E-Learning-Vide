"use client";

import React, { useEffect, useState } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser';
import { Course, Lesson, LessonProgress } from '@/types/course';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { Lock } from 'lucide-react';
import VideoPlayer from '../../../../components/VideoPlayer';
import DocumentViewer from '../../../../components/DocumentViewer';
import LessonNavigation from '../../../../components/LessonNavigation';
import LessonContent from '../../../../sections/LessonContent';

export default function LessonViewer() {
  const router = useRouter();
  const params = useParams();
  const courseId = params.courseId as string;
  const lessonId = params.lessonId as string;

  const [course, setCourse] = useState<Course | null>(null);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [progress, setProgress] = useState<LessonProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (courseId && lessonId) {
      fetchLessonData();
    }
  }, [courseId, lessonId]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateProgress();
    }, 30000);

    return () => clearInterval(interval);
  }, [currentTime, isCompleted]);

  const fetchLessonData = async () => {
    try {
      const supabase = createSupabaseBrowserClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      const { data: lessonData, error: lessonError } = await supabase
        .from('lessons')
        .select(`
          *,
          section:course_sections!inner(*),
          section:course_sections!inner(course:courses!inner(*))
        `)
        .eq('id', lessonId)
        .single();

      if (lessonError) throw lessonError;
      setLesson(lessonData);
      setCourse((lessonData as any).section?.course || null);

      const { data: allLessons } = await supabase
        .from('lessons')
        .select('*')
        .eq('section_id', lessonData.section_id)
        .order('sort_order', { ascending: true });

      setLessons(allLessons || []);

      const { data: progressData } = await supabase
        .from('lesson_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('lesson_id', lessonId)
        .single();

      if (progressData) {
        setProgress(progressData);
        setIsCompleted(progressData.completed);
        setCurrentTime(progressData.last_position_seconds);
      } else {
        const { data: newProgress } = await supabase
          .from('lesson_progress')
          .insert({
            user_id: user.id,
            lesson_id: lessonId,
            completed: false,
            watch_time_seconds: 0,
            last_position_seconds: 0,
          })
          .select()
          .single();

        setProgress(newProgress);
      }

      await supabase
        .from('enrollments')
        .update({ last_accessed_at: new Date().toISOString() })
        .eq('user_id', user.id)
        .eq('course_id', courseId);
    } catch (error) {
      console.error('Error fetching lesson data:', error);
      router.push(`/student/courses/${courseId}`);
    } finally {
      setLoading(false);
    }
  };

  const updateProgress = async () => {
    if (!progress) return;

    try {
      const supabase = createSupabaseBrowserClient();
      await supabase
        .from('lesson_progress')
        .update({
          watch_time_seconds: progress.watch_time_seconds + 30,
          last_position_seconds: currentTime,
        })
        .eq('id', progress.id);

      setProgress(prev => prev ? {
        ...prev,
        watch_time_seconds: prev.watch_time_seconds + 30,
        last_position_seconds: currentTime,
      } : null);
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
  };

  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
  };

  const handleLoadedMetadata = (dur: number) => {
    setDuration(dur);
  };

  const handleComplete = async () => {
    if (isCompleted) return;

    try {
      const supabase = createSupabaseBrowserClient();
      await supabase
        .from('lesson_progress')
        .update({
          completed: true,
          completed_at: new Date().toISOString(),
        })
        .eq('id', progress?.id);

      setIsCompleted(true);
      setProgress(prev => prev ? { ...prev, completed: true, completed_at: new Date().toISOString() } : null);

      await updateCourseProgress();
    } catch (error) {
      console.error('Error marking lesson as complete:', error);
    }
  };

  const updateCourseProgress = async () => {
    try {
      const supabase = createSupabaseBrowserClient();
      const { data: { user } } = await supabase.auth.getUser();

      const { data: allCourseLessons } = await supabase
        .from('lessons')
        .select('id')
        .in('section_id', await getCourseSectionIds(courseId));

      if (!allCourseLessons) return;

      const { data: completedLessons } = await supabase
        .from('lesson_progress')
        .select('lesson_id')
        .eq('user_id', user!.id)
        .eq('completed', true)
        .in('lesson_id', allCourseLessons.map(l => l.id));

      const progressPercentage = Math.round(
        ((completedLessons?.length || 0) / allCourseLessons.length) * 100
      );

      await supabase
        .from('enrollments')
        .update({ progress_percentage: progressPercentage })
        .eq('user_id', user!.id)
        .eq('course_id', courseId);
    } catch (error) {
      console.error('Error updating course progress:', error);
    }
  };

  const getCourseSectionIds = async (courseId: string) => {
    const supabase = createSupabaseBrowserClient();
    const { data } = await supabase
      .from('course_sections')
      .select('id')
      .eq('course_id', courseId);
    return data?.map(s => s.id) || [];
  };

  const getNextLesson = () => {
    const currentIndex = lessons.findIndex(l => l.id === lessonId);
    if (currentIndex < lessons.length - 1) {
      return lessons[currentIndex + 1];
    }
    return null;
  };

  const getPreviousLesson = () => {
    const currentIndex = lessons.findIndex(l => l.id === lessonId);
    if (currentIndex > 0) {
      return lessons[currentIndex - 1];
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#d4af37] border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!lesson || !course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Không tìm thấy bài học</h2>
          <Link
            href={`/student/courses/${courseId}`}
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f3e6c4] text-[#3a2a00] font-semibold rounded-xl hover:brightness-105 transition-all"
          >
            Quay lại
          </Link>
        </div>
      </div>
    );
  }

  const nextLesson = getNextLesson();
  const previousLesson = getPreviousLesson();

  return (
    <div className="flex flex-col h-screen">
      {/* Video Player Section */}
      <div className="flex-shrink-0 bg-black">
        {lesson.video_url ? (
          <VideoPlayer
            videoUrl={lesson.video_url}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            currentTime={currentTime}
            duration={duration}
            onSeek={handleSeek}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleComplete}
          />
        ) : lesson.document_url ? (
          <DocumentViewer documentUrl={lesson.document_url} />
        ) : (
          <div className="max-h-[60vh] bg-gray-900 flex items-center justify-center">
            <div className="text-center text-white">
              <Lock size={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bài học này đang được cập nhật</h3>
            </div>
          </div>
        )}
      </div>

      {/* Lesson Content Section */}
      <div className="flex-1 overflow-auto bg-gray-50">
        <div className="max-w-5xl mx-auto p-8">
          <LessonContent
            course={course}
            lesson={lesson}
            isCompleted={isCompleted}
            onComplete={handleComplete}
          />

          {/* Navigation */}
          <LessonNavigation
            courseId={courseId}
            previousLesson={previousLesson}
            nextLesson={nextLesson}
          />
        </div>
      </div>
    </div>
  );
}
