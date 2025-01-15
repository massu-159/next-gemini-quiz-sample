// Define types for the quiz application
export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export type QuizState = 'start' | 'quiz' | 'result';