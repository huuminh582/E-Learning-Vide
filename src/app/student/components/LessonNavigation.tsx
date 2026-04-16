import Link from 'next/link';
import { Lesson } from '@/types/course';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LessonNavigationProps {
  courseId: string;
  previousLesson: Lesson | null;
  nextLesson: Lesson | null;
}

const LessonNavigation = ({ courseId, previousLesson, nextLesson }: LessonNavigationProps) => {
  return (
    <div className="flex items-center justify-between">
      {previousLesson ? (
        <Link
          href={`/student/courses/${courseId}/lessons/${previousLesson.id}`}
          className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-gray-200 hover:border-[#d4af37] hover:shadow-md transition-all text-gray-700 hover:text-[#6b4d00]"
        >
          <ChevronLeft size={20} />
          <span>Bài học trước</span>
        </Link>
      ) : (
        <div />
      )}

      {nextLesson ? (
        <Link
          href={`/student/courses/${courseId}/lessons/${nextLesson.id}`}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f3e6c4] text-[#3a2a00] rounded-xl hover:brightness-105 transition-all font-semibold"
        >
          <span>Bài học tiếp theo</span>
          <ChevronRight size={20} />
        </Link>
      ) : (
        <Link
          href={`/student/courses/${courseId}`}
          className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-gray-200 hover:border-[#d4af37] hover:shadow-md transition-all text-gray-700 hover:text-[#6b4d00]"
        >
          <span>Quay lại nội dung khóa học</span>
          <ChevronRight size={20} />
        </Link>
      )}
    </div>
  );
};

export default LessonNavigation;
