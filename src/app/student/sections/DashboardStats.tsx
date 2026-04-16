import { Enrollment } from '@/types/course';
import StatsCard from '../components/StatsCard';

interface DashboardStatsProps {
  enrollments: Enrollment[];
}

const DashboardStats = ({ enrollments }: DashboardStatsProps) => {
  const completedCourses = enrollments.filter(e => e.progress_percentage === 100).length;
  const averageProgress = enrollments.length > 0 
    ? Math.round(enrollments.reduce((acc, e) => acc + e.progress_percentage, 0) / enrollments.length)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatsCard
        icon="📚"
        value={enrollments.length}
        label="Khóa học đã đăng ký"
        bgColor="bg-blue-100"
      />
      <StatsCard
        icon="✅"
        value={completedCourses}
        label="Khóa học đã hoàn thành"
        bgColor="bg-green-100"
      />
      <StatsCard
        icon="📊"
        value={`${averageProgress}%`}
        label="Tiến độ trung bình"
        bgColor="bg-yellow-100"
      />
    </div>
  );
};

export default DashboardStats;
