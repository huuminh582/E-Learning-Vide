'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Course } from '@/types/course';

/** Map level enum → Vietnamese label */
const levelLabel: Record<string, string> = {
  BEGINNER: 'Cơ bản',
  INTERMEDIATE: 'Trung cấp',
  ADVANCED: 'Nâng cao',
};

/** Format number to Vietnamese currency */
function formatPrice(value: number): string {
  return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
}

/** Calculate discount percentage */
function discountPercent(price: number, salePrice: number): number {
  return Math.round(((price - salePrice) / price) * 100);
}

export default function FeaturedCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const { data, error } = await supabase
          .from('courses')
          .select(`
            *,
            course_categories(*),
            course_sections(*)
          `)
          .order('created_at', { ascending: false })
          .limit(4);

        console.log('Supabase response:', { data, error, dataLength: data?.length });

        if (error) {
          console.error('Supabase error:', error);
          return;
        }
        
        setCourses(data || []);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  /* ── Skeleton Loader ── */
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card overflow-hidden animate-pulse">
            <div className="h-44 bg-gray-100" />
            <div className="p-4 space-y-3">
              <div className="h-3 w-20 bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-3/4 bg-gray-100 rounded" />
              <div className="h-3 w-24 bg-gray-100 rounded" />
              <div className="border-t border-gray-100 pt-3 flex justify-between">
                <div className="h-4 w-24 bg-gray-100 rounded" />
                <div className="h-4 w-10 bg-gray-100 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* ── Empty State ── */
  if (courses.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 text-sm">Hiện chưa có khóa học nào.</p>
      </div>
    );
  }

  /* ── Course Grid ── */
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courses.map((course) => {
        const hasSale = course.sale_price !== null && course.sale_price < course.price;
        const displayPrice = hasSale ? course.sale_price! : course.price;
        const sectionCount = course.course_sections?.length ?? 0;

        return (
          <Link
            href={`/courses/${course.slug}`}
            key={course.id}
            className="card overflow-hidden group cursor-pointer block hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
          >
            {/* ── Thumbnail ── */}
            <div className="relative h-44 bg-gray-100 overflow-hidden">
              {course.thumbnail_url ? (
                <img
                  src={course.thumbnail_url}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] to-cta/[0.12] group-hover:from-accent/[0.15] group-hover:to-cta/[0.20] transition-all duration-300">
                  <div className="flex items-center justify-center h-full">
                    <svg className="w-10 h-10 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                {hasSale && (
                  <span className="badge-accent text-[10px] px-2 py-1 rounded-md shadow-sm">
                    -{discountPercent(course.price, course.sale_price!)}%
                  </span>
                )}
              </div>

              {/* Level badge */}
              {course.level && (
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm text-gray-700 font-medium shadow-sm border border-gray-100">
                    {levelLabel[course.level] || course.level}
                  </span>
                </div>
              )}
            </div>

            {/* ── Content ── */}
            <div className="p-4 space-y-3">
              {/* Category */}
              {course.course_categories && (
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent/80">
                  {course.course_categories.name}
                </span>
              )}

              {/* Title */}
              <h3 className="font-semibold text-sm text-gray-900 leading-snug group-hover:text-accent-dark transition-colors line-clamp-2">
                {course.title}
              </h3>

              {/* Short description */}
              {course.short_description && (
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                  {course.short_description}
                </p>
              )}

              {/* Meta: sections count + language + instructor */}
              <div className="flex items-center gap-3 text-xs text-gray-400">
                {sectionCount > 0 && (
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    {sectionCount} chương
                  </span>
                )}
                {course.language && (
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    {course.language}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-accent-dark">
                    {formatPrice(displayPrice)}
                  </span>
                  {hasSale && (
                    <span className="text-xs text-gray-400 line-through">
                      {formatPrice(course.price)}
                    </span>
                  )}
                </div>
                {course.code && (
                  <span className="badge-outline text-[10px] px-1.5 py-0.5 rounded font-mono text-gray-400">
                    {course.code}
                  </span>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
