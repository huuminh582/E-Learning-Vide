import React from 'react';
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Glow effect matching hero section */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 pointer-events-none z-0"></div>

      {/* Subtle decorative background lines fitting the theme */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
        <path d="M-100 150 Q400 -50 800 200 T1400 100" stroke="var(--accent)" strokeWidth="1" fill="none" />
        <path d="M-50 250 Q300 100 600 300 T1300 250" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
        <path d="M-100 650 Q500 850 900 600 T1400 750" stroke="var(--cta)" strokeWidth="1" fill="none" />
      </svg>

      <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Bookshelf Stack ── */}
          <div className="space-y-16 lg:space-y-20">

            {/* Item 1: TƯ VẤN ĐÀO TẠO */}
            <div className="flex items-center justify-start gap-6 sm:gap-8 group">
              <div className="w-[140px] sm:w-[180px] flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <Image src="/assets/about1.jpg" alt="Tư vấn đào tạo" width={220} height={150} className="w-full h-auto drop-shadow-md group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
              <div className="flex-1 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative whitespace-nowrap inline-block text-left pb-3">
                  <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[34px] font-display font-extrabold uppercase text-transparent tracking-wider" style={{ WebkitTextStroke: '1px rgba(229, 100, 46, 0.3)' }}>
                    Tư Vấn Đào Tạo
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[34px] font-display font-extrabold uppercase text-cta tracking-wider absolute top-[2px] left-[2px]">
                    Tư Vấn Đào Tạo
                  </span>
                </div>
              </div>
            </div>

            {/* Item 2: HỢP TÁC QUỐC TẾ */}
            <div className="flex items-center justify-end gap-6 sm:gap-8 flex-row-reverse group">
              <div className="w-[140px] sm:w-[180px] flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Image src="/assets/about4.jpg" alt="Hợp tác quốc tế" width={220} height={150} className="w-full h-auto drop-shadow-md -scale-x-100 group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
              <div className="flex-1 relative text-right animate-fade-in-up overflow-visible" style={{ animationDelay: '0.4s' }}>
                <div className="relative whitespace-nowrap inline-block text-right pb-3">
                  <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[34px] font-display font-extrabold uppercase text-transparent tracking-wider" style={{ WebkitTextStroke: '1px rgba(229, 100, 46, 0.3)' }}>
                    Hợp Tác Quốc Tế
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[34px] font-display font-extrabold uppercase text-cta tracking-wider absolute top-[2px] right-[2px]">
                    Hợp Tác Quốc Tế
                  </span>
                </div>
              </div>
            </div>

            {/* Item 3: TÀI SẢN SỐ */}
            <div className="flex items-center justify-start gap-6 sm:gap-8 group">
              <div className="w-[140px] sm:w-[180px] flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <Image src="/assets/about3.jpg" alt="Tài sản số" width={220} height={150} className="w-full h-auto drop-shadow-md group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
              <div className="flex-1 relative animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="relative whitespace-nowrap inline-block text-left pb-3">
                  <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[34px] font-display font-extrabold uppercase text-transparent tracking-wider" style={{ WebkitTextStroke: '1px rgba(229, 100, 46, 0.3)' }}>
                    Tài Sản Số
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[34px] font-display font-extrabold uppercase text-cta tracking-wider absolute top-[2px] left-[2px]">
                    Tài Sản Số
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ── Right: About text content ── */}
          <div className="space-y-6 lg:pl-20">
            <div className="space-y-4 flex flex-col items-center  text-center ">
              <SectionBadge>Giới thiệu</SectionBadge>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Về <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">chúng tôi</span>
              </h2>
            </div>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed font-medium pt-2 text-justify">
              <p>
                Viện Phát triển Kinh tế số Việt Nam (VIDE) được thành lập vào tháng 12/2020 bởi Hội Truyền thông Số Việt Nam và hoạt động theo Luật Khoa học và Công nghệ theo Giấy Chứng nhận tổ chức Khoa học và Công nghệ do Bộ Khoa học và Công nghệ cấp ngày 24/02/2021.
              </p>
              <p>
                VIDE có chức năng tập hợp các nhà khoa học trong các lĩnh vực liên quan để nghiên cứu, sản xuất, thử nghiệm, chuyển giao công nghệ, thực hiện các dịch vụ Khoa học và Công nghệ. Tư vấn, đào tạo, liên kết, hợp tác trong lĩnh vực điện tử, thông tin và truyền thông. Đặc biệt là xu thế phát triển kinh tế số góp phần phát triển kinh tế - xã hội của đất nước trong kỷ nguyên cách mạng công nghiệp 4.0.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
