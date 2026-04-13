export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export type Language = 'en' | 'vi';
