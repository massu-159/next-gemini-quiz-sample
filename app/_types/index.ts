// Define types for the quiz application
export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
}

export type QuizState = 'start' | 'quiz' | 'result';