export interface User {
  id: number;
  name: string;
  email: string;
  role: 'STUDENT' | 'TEACHER';
}

export interface Exam {
  id: number;
  title: string;
  createdAt: string;
}

export interface Question {
  id: number;
  text: string;
  type: 'MULTIPLE_CHOICE' | 'ESSAY';
}