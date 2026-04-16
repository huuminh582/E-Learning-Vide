import { Course, Lesson } from '@/types/course';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface LessonContentProps {
  course: Course;
  lesson: Lesson;
  isCompleted: boolean;
  onComplete: () => void;
}

const LessonContent = ({ course, lesson, isCompleted, onComplete }: LessonContentProps) => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/student" className="hover:text-[#d4af37]">Dashboard</Link>
        <span>›</span>
        <Link href={`/student/courses/${course.id}`} className="hover:text-[#d4af37]">{course.title}</Link>
        <span>›</span>
        <span className="text-gray-900">{lesson.title}</span>
      </div>

      {/* Lesson Header */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
            {lesson.description && (
              <p className="text-gray-600">{lesson.description}</p>
            )}
          </div>
          
          <button
            onClick={onComplete}
            disabled={isCompleted}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              isCompleted
                ? 'bg-green-100 text-green-700 cursor-default'
                : 'bg-gradient-to-r from-[#d4af37] to-[#f3e6c4] text-[#3a2a00] hover:brightness-105'
            }`}
          >
            <CheckCircle size={20} />
            {isCompleted ? 'Đã hoàn thành' : 'Đánh dấu hoàn thành'}
          </button>
        </div>
      </div>
    </>
  );
};

export default LessonContent;
