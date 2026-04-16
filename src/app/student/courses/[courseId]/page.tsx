"use client";

import React, { useEffect, useState } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser';
import { Course, CourseSection, Lesson, Enrollment, LessonProgress } from '@/types/course';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import CourseHeader from '../../sections/CourseHeader';
import CourseCurriculum from '../../sections/CourseCurriculum';

export default function CourseCurriculumPage() {
  const router = useRouter();
  const params = useParams();
  const courseId = params.courseId as string;

  const [course, setCourse] = useState<Course | null>(null);
  const [sections, setSections] = useState<CourseSection[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [lessonProgress, setLessonProgress] = useState<LessonProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (courseId) {
      fetchCourseData();
    }
  }, [courseId]);

  const fetchCourseData = async () => {
    try {
      const supabase = createSupabaseBrowserClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      const { data: courseData, error: courseError } = await supabase
        .from('courses')
        .select(`
          *,
          enrollments!inner(*)
        `)
        .eq('id', courseId)
        .eq('enrollments.user_id', user.id)
        .single();

      if (courseError) throw courseError;
      setCourse(courseData);
      setEnrollment(courseData.enrollments?.[0] || null);

      const { data: sectionsData } = await supabase
        .from('course_sections')
        .select('*')
        .eq('course_id', courseId)
        .order('sort_order', { ascending: true });

      setSections(sectionsData || []);

      if (sectionsData && sectionsData.length > 0) {
        setExpandedSections(new Set([sectionsData[0].id]));
      }

      const { data: lessonsData } = await supabase
        .from('lessons')
        .select('*')
        .in('section_id', sectionsData?.map(s => s.id) || [])
        .eq('status', 'PUBLISHED')
        .order('sort_order', { ascending: true });

      setLessons(lessonsData || []);

      const { data: progressData } = await supabase
        .from('lesson_progress')
        .select('*')
        .eq('user_id', user.id)
        .in('lesson_id', lessonsData?.map(l => l.id) || []);

      setLessonProgress(progressData || []);
    } catch (error) {
      console.error('Error fetching course data:', error);
      router.push('/student');
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
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

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Không tìm thấy khóa học</h2>
          <p className="text-gray-500 mb-6">Khóa học này không tồn tại hoặc bạn chưa đăng ký.</p>
          <Link
            href="/student"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f3e6c4] text-[#3a2a00] font-semibold rounded-xl hover:brightness-105 transition-all"
          >
            Quay lại Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/student" className="hover:text-[#d4af37]">Dashboard</Link>
        <ChevronRight size={16} />
        <span className="text-gray-900">{course.title}</span>
      </div>

      {/* Course Header */}
      <CourseHeader course={course} enrollment={enrollment} />

      {/* Curriculum */}
      <CourseCurriculum
        sections={sections}
        lessons={lessons}
        lessonProgress={lessonProgress}
        expandedSections={expandedSections}
        onToggleSection={toggleSection}
        courseId={courseId}
      />
    </div>
  );
}
