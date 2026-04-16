import Link from 'next/link';
import { Enrollment } from '@/types/course';

interface CourseCardProps {
  enrollment: Enrollment;
}

const CourseCard = ({ enrollment }: CourseCardProps) => {
  const getProgressColor = (percentage: number) => {
    if (percentage >= 75) return 'bg-green-500';
    if (percentage >= 50) return 'bg-blue-500';
    if (percentage >= 25) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  return (
    <Link
      href={`/student/courses/${enrollment.course_id}`}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      {/* Thumbnail */}
      <div className="relative h-40 bg-gradient-to-br from-[#d4af37]/20 to-[#f3e6c4]/20">
        {enrollment.course?.thumbnail_url ? (
          <img
            src={enrollment.course.thumbnail_url}
            alt={enrollment.course.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            📖
          </div>
        )}
        {/* Progress Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
          {enrollment.progress_percentage}%
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#d4af37] transition-colors">
          {enrollment.course?.title || 'Khóa học không tên'}
        </h3>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColor(enrollment.progress_percentage)} transition-all duration-300`}
              style={{ width: `${enrollment.progress_percentage}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            {enrollment.progress_percentage === 100 ? 'Đã hoàn thành' : 'Đang học'}
          </span>
          {enrollment.last_accessed_at && (
            <span className="text-gray-400">
              {new Date(enrollment.last_accessed_at).toLocaleDateString('vi-VN')}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
