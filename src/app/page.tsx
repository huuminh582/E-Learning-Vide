import React from 'react';
import Image from 'next/image';
import MainLayout from '@layouts/MainLayout';

const faqItems = [
  {
    question: 'Tôi có thể học trên điện thoại hoặc máy tính bảng không?',
    answer:
      'Có. Nền tảng được tối ưu cho cả desktop lẫn thiết bị di động, nên bạn có thể xem bài giảng, làm bài tập và theo dõi tiến độ ở bất cứ đâu.',
  },
  {
    question: 'Sau khi đăng ký, tôi có được học lại nhiều lần không?',
    answer:
      'Có. Phần lớn khóa học cho phép bạn truy cập lại nội dung nhiều lần trong thời gian sở hữu khóa học, rất phù hợp khi cần ôn tập hoặc xem lại bài giảng.',
  },
  {
    question: 'Tôi có nhận được chứng chỉ sau khi hoàn thành khóa học không?',
    answer:
      'Có. Khi hoàn thành đầy đủ các bài học và yêu cầu của khóa học, bạn sẽ được cấp chứng nhận hoàn thành để bổ sung vào hồ sơ học tập hoặc năng lực cá nhân.',
  },
  {
    question: 'Nếu tôi chưa có nền tảng trước đó thì có học được không?',
    answer:
      'Được. Nhiều khóa học được thiết kế từ mức cơ bản, có lộ trình rõ ràng và tài liệu hỗ trợ để người mới bắt đầu vẫn có thể theo kịp.',
  },
  {
    question: 'Tôi cần hỗ trợ thì liên hệ với ai?',
    answer:
      'Bạn có thể gửi yêu cầu qua đội ngũ hỗ trợ của nền tảng hoặc liên hệ trực tiếp trong phần tư vấn khóa học để được hướng dẫn chọn lộ trình phù hợp.',
  },
];

const policyItems = [
  {
    title: 'Học linh hoạt',
    description:
      'Bạn có thể học theo tốc độ cá nhân, xem lại bài giảng nhiều lần và chủ động sắp xếp thời gian phù hợp với lịch làm việc.',
  },
  {
    title: 'Nội dung cập nhật',
    description:
      'Các khóa học được rà soát và cập nhật định kỳ để bám sát kỹ năng thực tế, xu hướng công việc và nhu cầu doanh nghiệp.',
  },
  {
    title: 'Hỗ trợ rõ ràng',
    description:
      'Đội ngũ tư vấn và hỗ trợ học tập luôn sẵn sàng giải đáp trong quá trình đăng ký, học tập và định hướng lộ trình.',
  },
  {
    title: 'Cam kết minh bạch',
    description:
      'Thông tin khóa học, quyền truy cập, ưu đãi và chính sách hỗ trợ đều được trình bày rõ ràng để bạn dễ dàng theo dõi trước khi đăng ký.',
  },
];

const contactItems = [
  {
    label: 'Email',
    value: 'support@vide.edu.vn',
    note: 'Phản hồi trong giờ hành chính',
  },
  {
    label: 'Hotline',
    value: '1900 1234',
    note: 'Hỗ trợ tư vấn khóa học nhanh',
  },
  {
    label: 'Địa chỉ',
    value: 'Hà Nội, Việt Nam',
    note: 'Làm việc từ thứ 2 đến thứ 6',
  },
];

export default function Home() {
  return (
    <MainLayout>
      {/* ═══════════════════ Hero Section ═══════════════════ */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16">
        {/* Background glow blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cta/[0.05] rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── Left Content ── */}
            <div className="w-full lg:w-1/2 space-y-6 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                Nền tảng #1 Việt Nam
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

          {/* ── Bottom Banner ── */}
          {/* <div className="mt-16 sm:mt-20 card p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
            <button className="btn-primary rounded-full px-5 py-2 text-sm flex items-center gap-2 whitespace-nowrap shadow-sm relative">
              ✨ Đăng Ký Thành Viên
              <span className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">MỚI</span>
            </button>
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Hãy cho chúng tôi biết mục tiêu của bạn và kết nối ngay với nguồn tài nguyên chuẩn quốc tế.
            </p>
          </div> */}
        </div>
      </section>

      {/* ═══════════════════ About Section ═══════════════════ */}
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
                  <div className="relative whitespace-nowrap">
                    <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[34px] font-display font-extrabold uppercase text-transparent tracking-wider pb-3" style={{ WebkitTextStroke: '1px rgba(229, 100, 46, 0.3)' }}>
                      Tư Vấn Đào Tạo
                    </span>
                    <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[30px] font-display font-extrabold uppercase text-cta tracking-wider absolute bottom-0 right-0">
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
                  <div className="relative whitespace-nowrap">
                    <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[34px] font-display font-extrabold uppercase text-transparent tracking-wider pb-3" style={{ WebkitTextStroke: '1px rgba(229, 100, 46, 0.3)' }}>
                      Hợp Tác Quốc Tế
                    </span>
                    <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[30px] font-display font-extrabold uppercase text-cta tracking-wider absolute bottom-0 right-0">
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
                  <div className="relative whitespace-nowrap">
                    <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[34px] font-display font-extrabold uppercase text-transparent tracking-wider pb-3" style={{ WebkitTextStroke: '1px rgba(229, 100, 46, 0.3)' }}>
                      Tài Sản Số
                    </span>
                    <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-[30px] font-display font-extrabold uppercase text-cta tracking-wider absolute bottom-0 left-10">
                      Tài Sản Số
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* ── Right: About text content ── */}
            <div className="space-y-6 lg:pl-20">
              <div className="space-y-4 flex flex-col items-center  text-center ">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent w-fit">
                  Giới thiệu
                </span>
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

      {/* ═══════════════════ Featured Courses ═══════════════════ */}
      <section className="relative overflow-hidden bg-white py-20 border-t border-gray-100">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-accent/[0.06] rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-16 w-[360px] h-[360px] bg-cta/[0.05] rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px] relative z-10">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent w-fit">
                Chương trình
              </span>
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

          {/* Course grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((course) => (
              <div key={course} className="card overflow-hidden group cursor-pointer">
                {/* Thumbnail */}
                <div className="relative h-44 bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] to-cta/[0.08] group-hover:from-accent/[0.12] group-hover:to-cta/[0.15] transition-all duration-300"></div>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-sm text-gray-400 font-medium z-10">Thumbnail {course}</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="badge-accent text-[10px] px-2 py-1 rounded-md shadow-sm">Bán chạy</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                    <span className="text-gray-400 ml-1">(120)</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-sm text-gray-900 leading-snug group-hover:text-accent-dark transition-colors line-clamp-2">
                    {course === 1 ? 'Khóa học Lập trình Web Fullstack với React và Node.js' :
                      course === 2 ? 'Khám phá Tư duy Thiết kế UI/UX hiện đại' :
                        course === 3 ? 'Digital Marketing Thực chiến từ A-Z' :
                          'Khoa học dữ liệu và Machine Learning cơ bản'}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                    <span className="text-xs text-gray-500">Giảng viên {course}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-accent-dark">599.000đ</span>
                      <span className="text-xs text-gray-400 line-through">1.200.000đ</span>
                    </div>
                    <span className="badge-outline text-[10px] px-1.5 py-0.5 rounded text-green-600 border-green-200 bg-green-50">-50%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ Section ═══════════════════ */}
      <section className="relative overflow-hidden border-t border-gray-100 bg-gray-50/60 py-20">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-36 -right-24 h-[420px] w-[420px] rounded-full bg-accent/[0.08] blur-3xl"></div>
          <div className="absolute top-8 right-20 h-[220px] w-[220px] rounded-full bg-cta/[0.08] blur-3xl"></div>
          <div className="absolute bottom-0 -left-12 h-[260px] w-[260px] rounded-full bg-cta/[0.06] blur-3xl"></div>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 relative z-10">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent w-fit">
              Hỏi đáp
            </span>

            <div className="space-y-3">
              <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Giải đáp <span className="accent-text">nhanh</span> trước khi bạn bắt đầu
              </h2>
              <p className="max-w-md text-sm leading-6 text-gray-500 md:text-base">
                Những câu hỏi phổ biến nhất về cách học, quyền truy cập và hỗ trợ để bạn yên tâm chọn khóa học phù hợp.
              </p>
            </div>

            <div className="card max-w-md rounded-2xl p-5 shadow-sm hover:!border-accent/40">
              <p className="text-sm font-semibold text-gray-900">Cần hỗ trợ thêm?</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Nếu bạn chưa chắc khóa học nào phù hợp, đội ngũ tư vấn có thể giúp bạn chọn lộ trình theo mục tiêu học tập và công việc.
              </p>
              <button className="btn-outline mt-4 rounded-lg px-4 py-2 text-sm">
                Liên hệ tư vấn
              </button>
            </div>
          </div>

          <div className="card rounded-2xl border border-gray-200 bg-white p-3 shadow-sm hover:!border-accent/40 sm:p-4">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-xl border-b border-gray-100 last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-5 text-left transition-colors hover:bg-gray-50 focus-visible:bg-gray-50">
                  <span className="pr-4 text-sm font-semibold leading-6 text-gray-900 md:text-base">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-200 group-open:border-accent/30 group-open:text-accent">
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>

                <div className="px-4 pb-5 pt-0">
                  <p className="max-w-2xl text-sm leading-6 text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ Policy Section ═══════════════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="absolute top-0 left-0 h-full w-full pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-16 h-[320px] w-[320px] rounded-full bg-accent/[0.08] blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-cta/[0.05] blur-3xl"></div>
        </div>


        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Cam kết
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Chính sách <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">đồng hành</span> cùng người học
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Những nguyên tắc cốt lõi giúp trải nghiệm học tập rõ ràng hơn, minh bạch hơn và phù hợp với nhu cầu phát triển kỹ năng lâu dài.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {policyItems.map((policy, idx) => (
              <div
                key={policy.title}
                className="group relative rounded-3xl p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/[0.08] text-accent border border-accent/10 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {idx === 0 && <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                    {idx === 1 && <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>}
                    {idx === 2 && <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>}
                    {idx === 3 && <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{policy.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{policy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ Contact Section ═══════════════════ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="absolute top-0 left-0 h-full w-full pointer-events-none overflow-hidden">
          <div className="absolute -top-28 right-0 h-[360px] w-[360px] rounded-full bg-accent/[0.07] blur-3xl"></div>
          <div className="absolute bottom-0 -left-16 h-[260px] w-[260px] rounded-full bg-cta/[0.06] blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Liên hệ
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
              Hãy kết nối cùng <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">Chúng tôi</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn trên con đường phát triển kỹ năng và sự nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">

            {/* Left Info */}
            <div className="space-y-6">
              {contactItems.map((item, idx) => (
                <div key={item.label} className="group relative bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 overflow-hidden flex gap-5 items-center">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/[0.02] rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>

                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-gray-500 border border-gray-100 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors duration-300">
                    {idx === 0 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                    {idx === 1 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>}
                    {idx === 2 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-gray-900 leading-tight">{item.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Form */}
            <div className="relative bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gửi tin nhắn cho chúng tôi</h3>
                <p className="text-sm text-gray-500">Chúng tôi sẽ phản hồi bạn trong vòng 24 giờ làm việc.</p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">Họ và tên <span className="text-accent">*</span></label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">Số điện thoại <span className="text-accent">*</span></label>
                    <input
                      type="tel"
                      placeholder="0912 345 678"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Email (Không bắt buộc)</label>
                  <input
                    type="email"
                    placeholder="example@videmail.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Nội dung <span className="text-accent">*</span></label>
                  <textarea
                    placeholder="Bạn cần hỗ trợ về khóa học hay dịch vụ nào?"
                    rows={4}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary rounded-xl px-6 py-3.5 text-base font-semibold shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300 mt-2">
                  Gửi yêu cầu ngay
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </MainLayout>
  );
}
