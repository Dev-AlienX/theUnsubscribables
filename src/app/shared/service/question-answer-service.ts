import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class QuestionAnswerService {
  private http = inject(HttpClient);
  private qnaJsonFilePath = 'assets/100_Toughest_Angular_Interview_Questions.json';
  private QAndAData$ = this.http.get<any[]>(this.qnaJsonFilePath);

  public getQAndAData() {
    return this.QAndAData$;
  }
}
