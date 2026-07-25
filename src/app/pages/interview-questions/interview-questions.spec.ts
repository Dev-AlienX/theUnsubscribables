import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { QuestionAnswerService } from '../../shared/service/question-answer-service';
import { InterviewQuestions } from './interview-questions';

describe('InterviewQuestions', () => {
  let component: InterviewQuestions;
  let fixture: ComponentFixture<InterviewQuestions>;
  let mockQuestionAnswerService: Partial<QuestionAnswerService>;

  beforeEach(async () => {
    mockQuestionAnswerService = {
      getQAndAData: () => of([]),
    };

    await TestBed.configureTestingModule({
      imports: [InterviewQuestions],
      providers: [
        {
          provide: QuestionAnswerService,
          useValue: mockQuestionAnswerService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
