import React from 'react';
import FeaturedCourses from '@/components/ui/FeaturedCourses';
import GlowBackground from '@/components/ui/GlowBackground';
import SectionBadge from '@/components/ui/SectionBadge';

export default function FeaturedCoursesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 border-t border-gray-100">
      <GlowBackground
        blobs={[
          { position: '-top-32 -left-32', size: 'w-[420px] h-[420px]', color: 'bg-accent/[0.06]' },
          { position: 'top-1/3 -right-16', size: 'w-[360px] h-[360px]', color: 'bg-cta/[0.05]' },
        ]}
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px] relative z-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div className="space-y-3">
            <SectionBadge>Chương trình</SectionBadge>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
              Khóa Học <span className="accent-text">Nổi Bật</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg">
              Các khóa học được hàng nghìn học viên đánh giá cao và lựa chọn để nâng cao kỹ năng.
            </p>
          </div>
          <button className="btn-outline text-sm px-4 py-2 rounded-md flex items-center gap-1.5 group">
            Xem tất cả
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Course grid – real data from Supabase */}
        <FeaturedCourses />
      </div>
    </section>
  );
}
