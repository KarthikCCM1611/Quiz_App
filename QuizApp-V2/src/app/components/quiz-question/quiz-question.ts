import { Component, computed, EventEmitter, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { quizQuestions } from '../../constant/constant';
import { NgClass, TitleCasePipe } from '@angular/common';
import { IQuizResult, UserAnswer, IQuizQuestion, Options } from '../../models/model';

@Component({
  selector: 'app-quiz-question',
  imports: [NgClass, TitleCasePipe],
  templateUrl: './quiz-question.html',
  styleUrl: './quiz-question.css',
})
export class QuizQuestion implements OnInit {
  @Input() questionCount: WritableSignal<number | null> = signal<number | null>(0);
  @Input() currentIndex: WritableSignal<number> = signal<number>(0);

  @Output() submitQuiz = new EventEmitter<IQuizResult>();

  questions: WritableSignal<IQuizQuestion[]> = signal<IQuizQuestion[]>([]);
  userAnswers: WritableSignal<UserAnswer[]> = signal<UserAnswer[]>([]);
  showWarning: WritableSignal<boolean> = signal<boolean>(false);
  readonly options = ['a', 'b', 'c', 'd'] as const;

  currentQuestion = computed(() =>
    this.questions()[this.currentIndex()]
  );

  currentAnswer = computed(() =>
    this.userAnswers()[this.currentIndex()]?.selectedAnswer
  );

  ngOnInit(): void {
    const questionCount = this.questionCount()
    if (questionCount !== null) {
      const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
      this.questions.set(shuffled.slice(0, questionCount));

      this.userAnswers.set(
        Array(questionCount).fill(null).map((_, i) => ({
          questionId: i,
          selectedAnswer: null,
        }))
      );

    }
  }

  selectAnswer(answer: Options) {
    const answers = [...this.userAnswers()];
    answers[this.currentIndex()] = {
      questionId: this.currentIndex(),
      selectedAnswer: answer,
    };

    this.userAnswers.set(answers);
    this.showWarning.set(false);
  }

  nextQuestion() {
    if (this.currentIndex() < this.questions().length - 1) {
      this.currentIndex.update(v => v + 1);
    }
  }

  prevQuestion() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(v => v - 1);
    }
  }

  setCurrentIndex(i: number) {
    this.currentIndex.set(i);
  }

  submitQuizz() {
    const hasUnanswered = this.userAnswers().some(a => !a.selectedAnswer);

    if (hasUnanswered) {
      this.showWarning.set(true);
      return;
    }
    const quizResult: IQuizResult = {
      questions: this.questions(),
      userAnswers: this.userAnswers()
    };
    this.submitQuiz.emit(quizResult)
  }

}
