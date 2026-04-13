import React from 'react';
import Link from 'next/link';

const MainFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="text-xl font-bold gradient-text">Learning</span>
            </Link>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Nền tảng e-learning hàng đầu Việt Nam giúp bạn tiếp cận nguồn kiến thức vô tận với chi phí tối ưu nhất.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Khám phá</h3>
            <ul className="space-y-3">
              <li><Link href="/courses" className="text-gray-500 hover:text-primary transition-colors">Về chúng tôi</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Khóa học nổi bật</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Giảng viên</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Đánh giá học viên</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Pháp lý</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Điều khoản sử dụng</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Chính sách bảo mật</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Chính sách hoàn tiền</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Liên hệ</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-center gap-2">
                <span>📍</span> Hà Nội, Việt Nam
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> 1900 1234
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> support@elearning.vn
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} E-Learning Platform. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social icons placeholders */}
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">FB</div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">IG</div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">YT</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
