import React from 'react';
import Link from 'next/link';

const MainFooter = () => {
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-12 pb-12 pt-16 text-[14px]">
      <div className="max-w-[1200px] mx-auto border-t border-gray-200 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 mb-16">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Giới thiệu</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Trang chủ</Link></li>
              <li><Link href="/courses" className="text-gray-600 hover:text-gray-900">Danh sách khóa học</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Giảng viên nổi bật</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Đánh giá học viên</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Công cụ học tập</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Bảng giá</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Tính năng mới</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Sản phẩm</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Khóa học Pro</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Chế độ offline</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Lớp học trực tiếp</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Bài giảng video</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Công cụ tương tác</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Tạo bài tập</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Trợ giảng AI</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Chủ đề hàng đầu</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Lập trình Front-end</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Thiết kế UI/UX</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Phân tích dữ liệu</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Quản trị kinh doanh</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Ngoại ngữ giao tiếp</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Kỹ năng mềm</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Marketing số</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Gợi ý cho bạn</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Giáo dục mầm non</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Mẫu lịch học</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Hoạt động lớp học</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Hướng dẫn làm bài</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Giáo án điện tử</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Kho hình ảnh miễn phí</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Lộ trình học tập</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Khám phá</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Khóa học chứng chỉ</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Thiết kế ứng dụng</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Lập trình AI Chatbot</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Khởi nghiệp kinh doanh</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Mẫu trang cá nhân</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Phát triển giao diện</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Tối ưu hồ sơ LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-[600px] mx-auto border-t border-gray-200 pt-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-4 mt-4">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <Link href="/" className="inline-block mt-4 md:mt-0">
              <span className="text-[22px] md:text-[26px] font-medium tracking-tight text-gray-900">E-Learning</span>
            </Link>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-1 text-[13px] text-gray-600">
              <span>&copy; {new Date().getFullYear()} E-Learning, Inc.</span>
              <span className="hidden sm:inline">&bull;</span>
              <Link href="#" className="hover:underline underline-offset-2">Sơ đồ trang</Link>
              <span className="hidden sm:inline">&bull;</span>
              <Link href="#" className="hover:underline underline-offset-2">Tiêu chuẩn cộng đồng</Link>
              <span className="hidden sm:inline">&bull;</span>
              <Link href="#" className="hover:underline underline-offset-2">Điều khoản dịch vụ</Link>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center gap-6 mb-1 md:mb-0">
            <Link href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.869a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;

