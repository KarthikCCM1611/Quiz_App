import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizReview } from './quiz-review';

describe('QuizReview', () => {
  let component: QuizReview;
  let fixture: ComponentFixture<QuizReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizReview],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizReview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
