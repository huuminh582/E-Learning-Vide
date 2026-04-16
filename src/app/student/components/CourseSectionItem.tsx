import { CourseSection, Lesson, LessonProgress } from '@/types/course';
import { ChevronRight } from 'lucide-react';
import LessonItem from './LessonItem';

interface CourseSectionItemProps {
  section: CourseSection;
  sectionLessons: Lesson[];
  sectionProgress: number;
  isExpanded: boolean;
  onToggle: (sectionId: string) => void;
  lessonProgress: LessonProgress[];
  allLessons: Lesson[];
  courseId: string;
}

const CourseSectionItem = ({
  section,
  sectionLessons,
  sectionProgress,
  isExpanded,
  onToggle,
  lessonProgress,
  allLessons,
  courseId,
}: CourseSectionItemProps) => {
  const getLessonProgress = (lessonId: string) => {
    return lessonProgress.find(p => p.lesson_id === lessonId);
  };

  const isLessonCompleted = (lessonId: string) => {
    const progress = getLessonProgress(lessonId);
    return progress?.completed;
  };

  const isLessonLocked = (lesson: Lesson, index: number) => {
    if (index === 0) return false;
    if (lesson.is_free) return false;
    const previousLesson = allLessons[index - 1];
    if (previousLesson) {
      return !isLessonCompleted(previousLesson.id);
    }
    return false;
  };

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => onToggle(section.id)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#f3e6c4]/20 flex items-center justify-center text-[#6b4d00] font-semibold">
            {section.sort_order}
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-gray-900">{section.title}</h3>
            <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
              <span>{sectionLessons.length} bài học</span>
              {sectionProgress > 0 && (
                <>
                  <span>•</span>
                  <span className="text-green-600">{sectionProgress}% hoàn thành</span>
                </>
              )}
            </div>
          </div>
        </div>
        <ChevronRight
          size={20}
          className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
        />
      </button>

      {isExpanded && sectionLessons.length > 0 && (
        <div className="bg-gray-50 px-6 pb-6">
          <div className="space-y-2">
            {sectionLessons.map((lesson, index) => {
              const locked = isLessonLocked(lesson, allLessons.indexOf(lesson));
              const progress = getLessonProgress(lesson.id);

              return (
                <LessonItem
                  key={lesson.id}
                  lesson={lesson}
                  progress={progress}
                  locked={locked}
                  courseId={courseId}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseSectionItem;
