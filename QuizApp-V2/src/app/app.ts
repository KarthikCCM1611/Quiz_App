import { Component, signal, WritableSignal } from '@angular/core';
import { SelectQuiz } from './components/select-quiz/select-quiz';
import { IQuizResult, QuizView} from './models/model';
import { QuizQuestion } from './components/quiz-question/quiz-question';
import { QuizResults } from './components/quiz-results/quiz-results';
import { QuizReview } from './components/quiz-review/quiz-review';

@Component({
  selector: 'app-root',
  imports: [SelectQuiz, QuizQuestion, QuizResults, QuizReview],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QuizApp');
  view = signal<QuizView>('select');
  questionCount: WritableSignal<number | null> = signal<number | null>(null);
  currentIndex: WritableSignal<number> = signal<number>(0);
  quizResult: WritableSignal<IQuizResult | null> = signal<IQuizResult | null>(null);

  startQuiz(count: number | null) {
    this.questionCount.set(count);
    this.currentIndex.set(0);
    this.setView('quiz');
  }

  submitQuiz(event: IQuizResult) {
    this.quizResult.set(event)
    this.setView('results');
  }

  resetQuiz() {
    this.setView('select');
    this.questionCount.set(null);
    this.currentIndex.set(0);
    this.quizResult.set(null);
  }

  setView(view: QuizView) {
    this.view.set(view);
  }
}
