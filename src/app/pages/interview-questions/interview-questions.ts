import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionAnswerService } from '../../shared/service/question-answer-service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-interview-questions',
  imports: [CommonModule],
  templateUrl: './interview-questions.html',
  styleUrl: './interview-questions.scss',
})
export class InterviewQuestions implements OnInit {
  private questionAnswerService = inject(QuestionAnswerService);
  questionAnswerMetaData$ = this.questionAnswerService.getQAndAData().pipe(
    map((data: any) => {
      data.active = false;
      return data;
    }),
  );
  qAndAData = this.questionAnswerMetaData$;
  isCollapsed: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  getExample(question: any): void {
    console.log(question);
  }
}
