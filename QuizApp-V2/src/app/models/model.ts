export interface UserAnswer {
  questionId: number;
  selectedAnswer: 'a' | 'b' | 'c' | 'd' | null;
}

export interface IQuizResult {
  questions: IQuizQuestion[],
  userAnswers: UserAnswer[]
}

export interface IQuizQuestion {
  id: number;
  title: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: Options;
  explanation: string;
  category: string;
  difficulty: Difficulty;
}

export type View = 'select' | 'quiz' | 'results' | 'review';

export type Options = 'a' | 'b' | 'c' | 'd';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuizView = 'select' | 'quiz' | 'results' | 'review';