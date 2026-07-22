import { Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable';
import { ObserverComponent } from './observer/observer';
import { SubjectComponent } from './subject/subject';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject';
import { ReplaySubjectComponent } from './replay-subject/replay-subject';
import { InterviewQuestions } from './pages/interview-questions/interview-questions';

export const routes: Routes = [
  { path: 'observable', component: ObservableComponent },
  { path: 'observer', component: ObserverComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behavior-subject', component: BehaviorSubjectComponent },
  { path: 'replay-subject', component: ReplaySubjectComponent },
  { path: 'interview-questions', component: InterviewQuestions },
  { path: '', redirectTo: '/observable', pathMatch: 'full' },
];
