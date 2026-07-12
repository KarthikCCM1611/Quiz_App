export type View = 'select' | 'quiz' | 'results' | 'review';

export interface UserAnswer {
  questionId: number;
  selectedAnswer: 'a' | 'b' | 'c' | 'd' | null;
}