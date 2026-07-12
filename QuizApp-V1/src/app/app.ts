import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { UserAnswer } from './models/model';
import { FormsModule } from '@angular/forms';
import { options, QuizQuestion, quizQuestions } from './constant/constant';
import { NgClass, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('QuizApp');
  view: WritableSignal<string> = signal<string>("select");
  questionCount: WritableSignal<number | null> = signal<number | null>(null);
  currentIndex: WritableSignal<number> = signal<number>(0);
  userAnswers: WritableSignal<UserAnswer[]> = signal<UserAnswer[]>([]);
  showWarning: WritableSignal<boolean> = signal<boolean>(false);
  readonly options = ['a', 'b', 'c', 'd'] as const;
  questions = computed(() => {
    const count = this.questionCount();
    if (!count) return [];

    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  });

  currentQuestion = computed(() =>
    this.questions()[this.currentIndex()]
  );

  currentAnswer = computed(() =>
    this.userAnswers()[this.currentIndex()]?.selectedAnswer
  );

  ngOnInit(): void {

  }
  setQuestionCount(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.questionCount.set(Number(value));
  }

  startQuiz(count: number | null) {
    this.questionCount.set(count);

    this.userAnswers.set(
      Array(count).fill(null).map((_, i) => ({
        questionId: i,
        selectedAnswer: null,
      }))
    );

    this.currentIndex.set(0);
    this.setView('quiz');
  }

  selectAnswer(answer: 'a' | 'b' | 'c' | 'd') {
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

  submitQuiz() {
    const hasUnanswered = this.userAnswers().some(a => !a.selectedAnswer);

    if (hasUnanswered) {
      this.showWarning.set(true);
      return;
    }

    this.setView('results');
  }

  calculateScore() {
    let correct = 0;

    this.questions().forEach((q, i) => {
      if (this.userAnswers()[i]?.selectedAnswer === q.correctAnswer) {
        correct++;
      }
    });

    return correct;
  }

  getScorePercentage() {
    const total = this.questions().length;
    if (!total) return 0;
    return Math.round((this.calculateScore() / total) * 100);
  }

  resetQuiz() {
    this.setView('select');
    this.questionCount.set(null);
    this.currentIndex.set(0);
    this.userAnswers.set([]);
    this.showWarning.set(false);
  }

  setCurrentIndex(i: number) {
    this.currentIndex.set(i);
  }

  setView(view: string) {
    this.view.set(view);
  }

  getMessage() {
    const score = this.getScorePercentage();

    if (score >= 90) return { text: 'Outstanding!', color: 'text-emerald-600' };
    if (score >= 70) return { text: 'Great job!', color: 'text-teal-600' };
    if (score >= 50) return { text: 'Good effort!', color: 'text-blue-600' };

    return { text: 'Keep practicing!', color: 'text-orange-600' };
  }
}
