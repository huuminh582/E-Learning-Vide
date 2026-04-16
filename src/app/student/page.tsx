"use client";

import React, { useEffect, useState } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser';
import { Enrollment } from '@/types/course';
import { useRouter } from 'next/navigation';
import DashboardStats from './sections/DashboardStats';
import MyCoursesSection from './sections/MyCoursesSection';
import ContinueLearningSection from './sections/ContinueLearningSection';

export default function StudentDashboard() {
  const router = useRouter();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const supabase = createSupabaseBrowserClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      const { data: enrollmentsData, error } = await supabase
        .from('enrollments')
        .select(`
          *,
          course:courses(*)
        `)
        .eq('user_id', user.id)
        .order('last_accessed_at', { ascending: false, nullsFirst: false });

      if (error) throw error;
      setEnrollments(enrollmentsData || []);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setLoading(false);
    }
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

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Student Portal</h1>
        <p className="text-gray-600 mt-2">Chào mừng bạn trở lại! Tiếp tục hành trình học tập của bạn.</p>
      </div>

      {/* Stats Section */}
      <DashboardStats enrollments={enrollments} />

      {/* My Courses Section */}
      <MyCoursesSection enrollments={enrollments} />

      {/* Continue Learning Section */}
      <ContinueLearningSection enrollments={enrollments} />
    </div>
  );
}
