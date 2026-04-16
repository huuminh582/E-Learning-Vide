import React from 'react';
import GlowBackground from '@/components/ui/GlowBackground';
import SectionBadge from '@/components/ui/SectionBadge';

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <GlowBackground
        blobs={[
          { position: '-top-28 right-0', size: 'h-[360px] w-[360px]', color: 'bg-accent/[0.05]' },
          { position: 'bottom-0 -left-16', size: 'h-[260px] w-[260px]', color: 'bg-cta/[0.04]' },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Image Placeholder */}
          <div className="relative">
            <div className="aspect-square w-full max-w-lg mx-auto lg:mx-0 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-400 text-sm">Hình ảnh liên hệ</span>
              </div>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <SectionBadge>Liên hệ</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Liên hệ với <span className="text-orange-500">chúng tôi</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-md">
                Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc về khóa học. Phản hồi trong vòng <span className="text-orange-500 font-semibold">24 giờ làm việc</span>.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hotline</p>
                  <p className="text-lg font-semibold text-gray-900">1900 1234</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-gray-900">support@elearning.vn</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Địa chỉ</p>
                  <p className="text-lg font-semibold text-gray-900">123 Nguyễn Văn A, Quận 1, TP.HCM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
