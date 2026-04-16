import Link from 'next/link';
import { Enrollment } from '@/types/course';

interface ContinueLearningCardProps {
  enrollment: Enrollment;
}

const ContinueLearningCard = ({ enrollment }: ContinueLearningCardProps) => {
  const getProgressColor = (percentage: number) => {
    if (percentage >= 75) return 'bg-green-500';
    if (percentage >= 50) return 'bg-blue-500';
    if (percentage >= 25) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  return (
    <Link
      href={`/student/courses/${enrollment.course_id}`}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#f3e6c4]/20 flex items-center justify-center text-2xl flex-shrink-0">
          📖
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#d4af37] transition-colors">
            {enrollment.course?.title || 'Khóa học không tên'}
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getProgressColor(enrollment.progress_percentage)}`}
                style={{ width: `${enrollment.progress_percentage}%` }}
              />
            </div>
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              {enrollment.progress_percentage}%
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContinueLearningCard;
