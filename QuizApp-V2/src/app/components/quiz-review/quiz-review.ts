import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { QuizView, IQuizResult } from '../../models/model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-quiz-review',
  imports: [NgClass],
  templateUrl: './quiz-review.html',
  styleUrl: './quiz-review.css',
})
export class QuizReview {
  @Input() quizResult: WritableSignal<IQuizResult | null> = signal<IQuizResult | null>(null);

  @Output() resetQuiz = new EventEmitter<void>();
  @Output() setView = new EventEmitter<QuizView>();

  readonly options = ['a', 'b', 'c', 'd'] as const;
  onSetView(view: QuizView) {
    this.setView.emit(view);
  }

  onResetQuiz() {
    this.resetQuiz.emit();
  }
}
