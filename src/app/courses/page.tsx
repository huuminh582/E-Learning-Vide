import React from 'react';
import MainLayout from '@layouts/MainLayout';

export default function CoursesPage() {
  return (
    <MainLayout>
      <div className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px]">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Danh Sách <span className="gradient-text">Khóa Học</span></h1>
          <p className="text-gray-500 max-w-2xl text-lg">Hàng ngàn khóa học chất lượng cao đang chờ đón bạn.</p>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px] py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter Placeholder */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Lọc khóa học</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-3 uppercase tracking-wider">Danh mục</h4>
                  <div className="space-y-2">
                    {['Lập trình', 'Thiết kế', 'Marketing', 'Kinh doanh', 'Ngoại ngữ'].map(cat => (
                      <label key={cat} className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-primary">
                        <input type="checkbox" className="rounded text-primary focus:ring-primary w-4 h-4 cursor-pointer" />
                        {cat}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-3 uppercase tracking-wider">Mức độ</h4>
                  <div className="space-y-2">
                    {['Cơ bản', 'Trung cấp', 'Nâng cao'].map(level => (
                      <label key={level} className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-primary">
                        <input type="checkbox" className="rounded text-primary focus:ring-primary w-4 h-4 cursor-pointer" />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500">Hiển thị <span className="font-bold text-gray-900">1-12</span> trong số hơn 500 khóa học</p>
              <select className="border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                <option>Mới nhất</option>
                <option>Đánh giá cao nhất</option>
                <option>Giá thấp đến cao</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((course) => (
                <div key={course} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                  <div className="relative h-48 bg-gray-100 overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20"></div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-1 text-yellow-400 mb-2 text-xs">
                      {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                      <span className="text-gray-400 ml-1">(45)</span>
                    </div>
                    <h3 className="font-bold text-base text-gray-900 leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      Khóa học Fullstack Development thực chiến
                    </h3>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-4 pt-4 border-t border-gray-50">
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm text-gray-500 line-clamp-1">Giảng viên Demo</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">599.000đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors">«</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md shadow-orange-100">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors">3</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-colors">»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
