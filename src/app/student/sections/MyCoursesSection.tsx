import Link from 'next/link';
import { Enrollment } from '@/types/course';
import CourseCard from '../components/CourseCard';

interface MyCoursesSectionProps {
  enrollments: Enrollment[];
}

const MyCoursesSection = ({ enrollments }: MyCoursesSectionProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Khóa học của tôi</h2>
        <Link
          href="/student/courses"
          className="text-[#d4af37] hover:text-[#b8960f] font-semibold text-sm"
        >
          Xem tất cả →
        </Link>
      </div>

      {enrollments.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm text-center">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Chưa có khóa học nào</h3>
          <p className="text-gray-500 mb-6">Bạn chưa đăng ký khóa học nào. Hãy khám phá và bắt đầu học tập ngay!</p>
          <Link
            href="/courses"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f3e6c4] text-[#3a2a00] font-semibold rounded-xl hover:brightness-105 transition-all"
          >
            Khám phá khóa học
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrollments.slice(0, 6).map((enrollment) => (
            <CourseCard key={enrollment.id} enrollment={enrollment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCoursesSection;
