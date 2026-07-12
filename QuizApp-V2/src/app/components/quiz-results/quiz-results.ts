import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { IQuizResult, QuizView } from '../../models/model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-quiz-results',
  imports: [NgClass],
  templateUrl: './quiz-results.html',
  styleUrl: './quiz-results.css',
})
export class QuizResults {
  @Input() quizResult: WritableSignal<IQuizResult | null> = signal<IQuizResult | null>(null);

  @Output() resetQuiz = new EventEmitter<void>();
  @Output() setView = new EventEmitter<QuizView>();

  getScorePercentage() {
    const total = this.quizResult()?.questions?.length;
    if (!total) return 0;
    return Math.round((this.calculateScore() / total) * 100);
  }
  getMessage() {
    const score = this.getScorePercentage();

    if (score >= 90) return { text: 'Outstanding!', color: 'text-emerald-600' };
    if (score >= 70) return { text: 'Great job!', color: 'text-teal-600' };
    if (score >= 50) return { text: 'Good effort!', color: 'text-blue-600' };

    return { text: 'Keep practicing!', color: 'text-orange-600' };
  }
  calculateScore() {
    let correct = 0;

    this.quizResult()?.questions.forEach((q, i) => {
      if (this.quizResult()?.userAnswers[i]?.selectedAnswer === q.correctAnswer) {
        correct++;
      }
    });

    return correct;
  }

  onSetView(view: QuizView) {
    this.setView.emit(view);
  }

  onResetQuiz() {
    this.resetQuiz.emit();
  }

}
