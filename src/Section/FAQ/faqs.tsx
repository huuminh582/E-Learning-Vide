export default function Faqs() {

    const faqItems = [
        {
            question: 'Tôi có thể học trên điện thoại hoặc máy tính bảng không?',
            answer:
                'Có. Nền tảng được tối ưu cho cả desktop lẫn thiết bị di động, nên bạn có thể xem bài giảng, làm bài tập và theo dõi tiến độ ở bất cứ đâu.',
            icon: (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            ),
        },
        {
            question: 'Sau khi đăng ký, tôi có được học lại nhiều lần không?',
            answer:
                'Có. Phần lớn khóa học cho phép bạn truy cập lại nội dung nhiều lần trong thời gian sở hữu khóa học, rất phù hợp khi cần ôn tập hoặc xem lại bài giảng.',
            icon: (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            ),
        },
        {
            question: 'Tôi có nhận được chứng chỉ sau khi hoàn thành khóa học không?',
            answer:
                'Có. Khi hoàn thành đầy đủ các bài học và yêu cầu của khóa học, bạn sẽ được cấp chứng nhận hoàn thành để bổ sung vào hồ sơ học tập hoặc năng lực cá nhân.',
            icon: (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
            ),
        },
        {
            question: 'Nếu tôi chưa có nền tảng trước đó thì có học được không?',
            answer:
                'Được. Nhiều khóa học được thiết kế từ mức cơ bản, có lộ trình rõ ràng và tài liệu hỗ trợ để người mới bắt đầu vẫn có thể theo kịp.',
            icon: (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            ),
        },
        {
            question: 'Tôi cần hỗ trợ thì liên hệ với ai?',
            answer:
                'Bạn có thể gửi yêu cầu qua đội ngũ hỗ trợ của nền tảng hoặc liên hệ trực tiếp trong phần tư vấn khóa học để được hướng dẫn chọn lộ trình phù hợp.',
            icon: (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            ),
        },
    ];
    return (
        <section className="relative overflow-hidden border-t border-gray-100 bg-white py-20 sm:py-28">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-36 -right-24 h-[420px] w-[420px] rounded-full bg-accent/[0.06] blur-3xl"></div>
                <div className="absolute bottom-0 -left-12 h-[260px] w-[260px] rounded-full bg-cta/[0.05] blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header – centered */}
                <div className="text-center mb-12 space-y-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                        FAQ
                    </span>
                    <h2 className="font-display text-3xl md:text-[40px] font-bold tracking-tight text-gray-900 leading-[1.15]">
                        Mọi thứ bạn cần biết<br className="hidden sm:block" /> trước khi đăng ký.
                    </h2>
                    <p className="mx-auto max-w-lg text-[15px] leading-relaxed text-gray-500">
                        Thiết bị, chứng chỉ, trình độ đầu vào và hỗ trợ — giải đáp nhanh để bạn yên tâm chọn khóa học phù hợp.
                    </p>
                </div>

                {/* Accordion */}
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm divide-y divide-gray-200">
                    {faqItems.map((item, index) => (
                        <details
                            key={item.question}
                            className="group"
                            open={index === 0}
                        >
                            <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50/70 focus-visible:bg-gray-50/70 [&::-webkit-details-marker]:hidden">
                                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-500 transition-colors duration-200 group-open:border-accent/30 group-open:bg-accent/5 group-open:text-accent">
                                    {item.icon}
                                </span>
                                <span className="flex-1 text-[15px] font-semibold leading-6 text-gray-900">
                                    {item.question}
                                </span>
                                <svg
                                    className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180 group-open:text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </summary>

                            <div className="px-6 pb-6 pl-[76px]">
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {item.answer}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}