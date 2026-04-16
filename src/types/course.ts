export interface CourseCategory {
  id: number;
  parent_id: number | null;
  name: string;
  slug: string;
  description: string;
  sort_order: number;
  status: 'ACTIVE' | 'INACTIVE';
  created_at: string;
  updated_at: string;
}

export interface CourseSection {
  id: string;
  course_id: string;
  title: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Instructor {
  id: string;
  user_id: string;
  bio: string | null;
  title: string | null;
  experience_years: number | null;
  rating_avg: number | null;
  created_at: string;
  updated_at: string;
  // Joined relation with profile
  profiles?: {
    id: string;
    full_name: string;
    email: string;
    phone: string | null;
    avatar_url: string | null;
    status: string;
    last_login_at: string | null;
    created_at: string;
    updated_at: string;
  };
}

export interface Course {
  id: string;
  category_id: number;
  instructor_id: string | null;
  code: string;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  thumbnail_url: string | null;
  trailer_url: string | null;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | null;
  language: string | null;
  price: number;
  sale_price: number | null;
  access_duration_days: number | null;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  published_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  // Joined relations
  course_categories?: CourseCategory;
  course_sections?: CourseSection[];
  instructors?: Instructor;
}

export interface Lesson {
  id: string;
  section_id: string;
  title: string;
  description: string | null;
  video_url: string | null;
  document_url: string | null;
  duration_seconds: number | null;
  sort_order: number;
  is_free: boolean;
  status: 'DRAFT' | 'PUBLISHED';
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  expires_at: string | null;
  progress_percentage: number;
  last_accessed_at: string | null;
  // Joined relations
  course?: Course;
}

export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at: string | null;
  watch_time_seconds: number;
  last_position_seconds: number;
  updated_at: string;
}
