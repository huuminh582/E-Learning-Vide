import React from 'react';
import GlowBackground from '@/components/ui/GlowBackground';
import SectionBadge from '@/components/ui/SectionBadge';

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

const policyIcons = [
  <svg key="clock" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
  <svg key="refresh" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>,
  <svg key="support" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>,
  <svg key="shield" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
];

export default function PolicySection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center opacity-[0.02]"></div>
      <GlowBackground
        blobs={[
          { position: '-top-32 -left-16', size: 'h-[320px] w-[320px]', color: 'bg-accent/[0.08]' },
          { position: 'bottom-0 right-0', size: 'h-[280px] w-[280px]', color: 'bg-cta/[0.05]' },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SectionBadge>Cam kết</SectionBadge>
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
                  {policyIcons[idx]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{policy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
