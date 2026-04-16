import { CourseSection, Lesson, LessonProgress } from '@/types/course';
import CourseSectionItem from '../components/CourseSectionItem';

interface CourseCurriculumProps {
  sections: CourseSection[];
  lessons: Lesson[];
  lessonProgress: LessonProgress[];
  expandedSections: Set<string>;
  onToggleSection: (sectionId: string) => void;
  courseId: string;
}

const CourseCurriculum = ({
  sections,
  lessons,
  lessonProgress,
  expandedSections,
  onToggleSection,
  courseId,
}: CourseCurriculumProps) => {
  const getSectionProgress = (sectionId: string) => {
    const sectionLessons = lessons.filter(l => l.section_id === sectionId);
    if (sectionLessons.length === 0) return 0;
    
    const completedLessons = sectionLessons.filter(l => {
      const progress = lessonProgress.find(p => p.lesson_id === l.id);
      return progress?.completed;
    });
    
    return Math.round((completedLessons.length / sectionLessons.length) * 100);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Nội dung khóa học</h2>
        <p className="text-sm text-gray-500 mt-1">
          {sections.length} phần • {lessons.length} bài học
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {sections.map((section) => {
          const sectionLessons = lessons.filter(l => l.section_id === section.id);
          const sectionProgress = getSectionProgress(section.id);
          const isExpanded = expandedSections.has(section.id);

          return (
            <CourseSectionItem
              key={section.id}
              section={section}
              sectionLessons={sectionLessons}
              sectionProgress={sectionProgress}
              isExpanded={isExpanded}
              onToggle={onToggleSection}
              lessonProgress={lessonProgress}
              allLessons={lessons}
              courseId={courseId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CourseCurriculum;
