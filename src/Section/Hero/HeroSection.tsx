import React from 'react';
import GlowBackground from '@/components/ui/GlowBackground';
import SectionBadge from '@/components/ui/SectionBadge';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16">
      {/* Background glow blobs */}
      <GlowBackground
        blobs={[
          { position: '-top-40 -left-40', size: 'w-[500px] h-[500px]', color: 'bg-accent/[0.06]' },
          { position: 'top-1/3 right-0', size: 'w-[400px] h-[400px]', color: 'bg-cta/[0.05]' },
        ]}
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left Content ── */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in-up">
            {/* Badge */}
            <div className="w-fit">
              <SectionBadge>
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                Nền tảng #1 Việt Nam
              </SectionBadge>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Khám Phá <br />
              Các <span className="accent-text">Khóa Học</span> <br />
              Hàng Đầu
            </h1>
            <p className="text-base text-gray-500 max-w-md leading-relaxed">
              Học hỏi từ các chuyên gia và giảng viên tài năng nhất, sẵn sàng đồng hành cùng bạn trên chặng đường chinh phục mục tiêu.
            </p>

            {/* Search */}
            <div className="relative max-w-lg">
              <input
                type="text"
                placeholder="Bạn muốn học gì hôm nay?"
                className="w-full bg-white border border-gray-200 focus:border-accent/50 rounded-lg py-3 pl-4 pr-12 text-sm focus:outline-none transition-all text-gray-700 shadow-sm hover:border-gray-300 focus:ring-2 focus:ring-accent/10"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent-dark text-white w-8 h-8 rounded-md flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </div>

            {/* Popular tags */}
            <div className="flex items-center flex-wrap gap-2 pt-1">
              <span className="text-xs font-semibold text-gray-900">Phổ biến:</span>
              {['Lập trình Web', 'Thiết kế', 'Marketing', 'Tiếng Anh', 'Data'].map((tag) => (
                <span key={tag} className="badge-outline text-xs px-2.5 py-0.5 rounded-md cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 pt-2">
              <div>
                <span className="font-display text-2xl font-bold text-gray-900">10K+</span>
                <p className="text-xs text-gray-500">Học viên</p>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div>
                <span className="font-display text-2xl font-bold text-gray-900">500+</span>
                <p className="text-xs text-gray-500">Khóa học</p>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div>
                <span className="font-display text-2xl font-bold text-gray-900">98%</span>
                <p className="text-xs text-gray-500">Hài lòng</p>
              </div>
            </div>
          </div>

          {/* ── Right: 3 Videos Zigzag ── */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] lg:pl-12 xl:pl-20">

            {/* V1: Top Right */}
            <div className="absolute -top-10 -right-6 lg:-right-16 w-[60%] aspect-video rounded-xl overflow-hidden shadow-xl border border-accent/20 rotate-6 z-10 hover:scale-105 transition-transform duration-500 bg-gray-900 group">
              <div className="absolute inset-0  pointer-events-none z-10 group-hover:opacity-50 transition-opacity"></div>
              <video className="w-full h-full object-cover opacity-90" autoPlay muted loop playsInline>
                <source src="https://www.pexels.com/download/video/31994349/" type="video/mp4" />
              </video>
            </div>

            {/* V2: Middle Left (Foreground) */}
            <div className="absolute top-1/2 left-0 lg:left-6 -translate-y-1/2 w-[95%] aspect-video rounded-xl overflow-hidden shadow-2xl shadow-accent/20 border border-white z-20 hover:scale-105 transition-transform duration-500 bg-gray-900 group">
              <div className="absolute inset-0 bg-accent/15 mix-blend-color pointer-events-none z-10 group-hover:opacity-0 transition-opacity"></div>
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src="/assets/4496002-hd_1920_1080_25fps.mp4" type="video/mp4" />
              </video>
            </div>

            {/* V3: Bottom Right */}
            <div className="absolute -bottom-10 right-0 lg:-right-14 w-[55%] aspect-video rounded-xl overflow-hidden shadow-xl border border-cta/20 -rotate-3 z-10 hover:scale-105 transition-transform duration-500 bg-gray-900 group">
              <div className="absolute inset-0  pointer-events-none z-10 group-hover:opacity-50 transition-opacity"></div>
              <video className="w-full h-full object-cover opacity-90" autoPlay muted loop playsInline>
                <source src="https://www.pexels.com/download/video/7647790/" type="video/mp4" />
              </video>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
