import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFilter } from './quiz-filter';

describe('QuizFilter', () => {
  let component: QuizFilter;
  let fixture: ComponentFixture<QuizFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
