import { Course, Enrollment } from '@/types/course';
import Link from 'next/link';

interface CourseHeaderProps {
  course: Course;
  enrollment: Enrollment | null;
}

const CourseHeader = ({ course, enrollment }: CourseHeaderProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <p className="text-gray-600 mb-6">{course.description || course.short_description}</p>
          
          <div className="flex flex-wrap gap-4">
            {course.level && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="px-3 py-1 bg-gray-100 rounded-full font-medium">
                  {course.level === 'BEGINNER' ? 'Cơ bản' : course.level === 'INTERMEDIATE' ? 'Trung cấp' : 'Nâng cao'}
                </span>
              </div>
            )}
            {course.language && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>🌐</span>
                <span>{course.language}</span>
              </div>
            )}
            {enrollment && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>📅</span>
                <span>Đăng ký ngày {new Date(enrollment.enrolled_at).toLocaleDateString('vi-VN')}</span>
              </div>
            )}
          </div>
        </div>

        {enrollment && (
          <div className="lg:w-80">
            <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#f3e6c4]/10 rounded-xl p-6 border border-[#d4af37]/20">
              <h3 className="font-semibold text-gray-900 mb-4">Tiến độ khóa học</h3>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Hoàn thành</span>
                  <span className="font-semibold text-[#6b4d00]">{enrollment.progress_percentage}%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#d4af37] to-[#f3e6c4] transition-all duration-500"
                    style={{ width: `${enrollment.progress_percentage}%` }}
                  />
                </div>
              </div>
              {enrollment.expires_at && (
                <p className="text-xs text-gray-500 mt-4">
                  Hết hạn: {new Date(enrollment.expires_at).toLocaleDateString('vi-VN')}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseHeader;
