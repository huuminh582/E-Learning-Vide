import Link from 'next/link';
import { Lesson, LessonProgress } from '@/types/course';
import { CheckCircle, PlayCircle, Lock, FileText, Video, ChevronRight } from 'lucide-react';

interface LessonItemProps {
  lesson: Lesson;
  progress: LessonProgress | undefined;
  locked: boolean;
  courseId: string;
}

const LessonItem = ({ lesson, progress, locked, courseId }: LessonItemProps) => {
  const isCompleted = progress?.completed;
  const formatDuration = (seconds: number | null) => {
    if (!seconds) return '--:--';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Link
      href={`/student/courses/${courseId}/lessons/${lesson.id}`}
      className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
        locked
          ? 'bg-white/50 cursor-not-allowed opacity-60'
          : 'bg-white hover:shadow-md hover:border-[#d4af37]/30 cursor-pointer'
      } ${isCompleted ? 'border-green-200' : 'border-gray-200'}`}
      style={{ border: '1px solid' }}
      onClick={(e) => {
        if (locked) e.preventDefault();
      }}
    >
      <div className="flex-shrink-0">
        {locked ? (
          <Lock size={20} className="text-gray-400" />
        ) : isCompleted ? (
          <CheckCircle size={20} className="text-green-500" />
        ) : lesson.video_url ? (
          <PlayCircle size={20} className="text-[#d4af37]" />
        ) : (
          <FileText size={20} className="text-[#d4af37]" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className={`font-medium ${locked ? 'text-gray-400' : 'text-gray-900'} truncate`}>
          {lesson.title}
        </h4>
        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
          {lesson.video_url && (
            <div className="flex items-center gap-1">
              <Video size={12} />
              <span>Video</span>
            </div>
          )}
          {lesson.document_url && (
            <div className="flex items-center gap-1">
              <FileText size={12} />
              <span>Tài liệu</span>
            </div>
          )}
          {lesson.duration_seconds && (
            <span>{formatDuration(lesson.duration_seconds)}</span>
          )}
        </div>
      </div>

      {progress && progress.watch_time_seconds > 0 && !isCompleted && (
        <div className="text-xs text-gray-500">
          {Math.round((progress.watch_time_seconds / (lesson.duration_seconds || 1)) * 100)}%
        </div>
      )}

      <ChevronRight size={16} className={`flex-shrink-0 ${locked ? 'text-gray-300' : 'text-gray-400'}`} />
    </Link>
  );
};

export default LessonItem;
