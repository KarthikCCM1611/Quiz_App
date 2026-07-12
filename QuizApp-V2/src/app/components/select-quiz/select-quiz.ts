import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-select-quiz',
  imports: [],
  templateUrl: './select-quiz.html',
  styleUrl: './select-quiz.css',
})
export class SelectQuiz {
  questionCount: WritableSignal<number | null> = signal<number | null>(null);

  @Output() startQuiz  = new EventEmitter<number>();

  setQuestionCount(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.questionCount.set(Number(value));
  }

  startQuizz() {
    const count = this.questionCount();
    if (count !== null) {
      this.startQuiz.emit(count);
    }
  }
}
