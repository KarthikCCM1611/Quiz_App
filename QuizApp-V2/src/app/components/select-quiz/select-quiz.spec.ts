import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuiz } from './select-quiz';

describe('SelectQuiz', () => {
  let component: SelectQuiz;
  let fixture: ComponentFixture<SelectQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectQuiz],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectQuiz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
