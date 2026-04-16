import { Enrollment } from '@/types/course';
import ContinueLearningCard from '../components/ContinueLearningCard';

interface ContinueLearningSectionProps {
  enrollments: Enrollment[];
}

const ContinueLearningSection = ({ enrollments }: ContinueLearningSectionProps) => {
  const inProgressCourses = enrollments.filter(e => e.progress_percentage > 0 && e.progress_percentage < 100);

  if (inProgressCourses.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Tiếp tục học</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inProgressCourses.slice(0, 2).map((enrollment) => (
          <ContinueLearningCard key={enrollment.id} enrollment={enrollment} />
        ))}
      </div>
    </div>
  );
};

export default ContinueLearningSection;
