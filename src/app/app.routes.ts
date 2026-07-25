import { Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable';
import { ObserverComponent } from './observer/observer';
import { SubjectComponent } from './subject/subject';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject';
import { ReplaySubjectComponent } from './replay-subject/replay-subject';
import { InterviewQuestions } from './pages/interview-questions/interview-questions';
import { Operators } from './pages/operators/operators';
import { UnderConstruction } from './pages/under-construction/under-construction';
import { CreationOperators } from './pages/operators/creation-operators/creation-operators';
import { JoinCreationOperators } from './pages/operators/join-creation-operators/join-creation-operators';
import { JoinOperators } from './pages/operators/join-operators/join-operators';
import { FilteringOperators } from './pages/operators/filtering-operators/filtering-operators';
import { TransformationOperators } from './pages/operators/transformation-operators/transformation-operators';
import { ConditionalandBooleanOperators } from './pages/operators/conditionaland-boolean-operators/conditionaland-boolean-operators';
import { UtilityOperators } from './pages/operators/utility-operators/utility-operators';
import { ErrorHandlingOperators } from './pages/operators/error-handling-operators/error-handling-operators';
import { MulticastingOperators } from './pages/operators/multicasting-operators/multicasting-operators';
import { MathematicalandAggregateOperators } from './pages/operators/mathematicaland-aggregate-operators/mathematicaland-aggregate-operators';

export const routes: Routes = [
  { path: 'observable', component: ObservableComponent },
  { path: 'observer', component: ObserverComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behavior-subject', component: BehaviorSubjectComponent },
  { path: 'replay-subject', component: ReplaySubjectComponent },
  { path: 'interview-questions', component: InterviewQuestions },
  {
    path: 'operators',
    component: Operators,
    children: [
      { path: '', redirectTo: 'creationOperators', pathMatch: 'full' }, // Default child route
      { path: 'creationOperators', component: CreationOperators },
      { path: 'joinCreationOperators', component: JoinCreationOperators },
      { path: 'joinOperators', component: JoinOperators },
      { path: 'filteringOperators', component: FilteringOperators },
      { path: 'transformationOperators', component: TransformationOperators },
      { path: 'conditionalandBooleanOperators', component: ConditionalandBooleanOperators },
      { path: 'utilityOperators', component: UtilityOperators },
      { path: 'errorHandlingOperators', component: ErrorHandlingOperators },
      { path: 'multicastingOperators', component: MulticastingOperators },
      { path: 'mathematicalandAggregateOperators', component: MathematicalandAggregateOperators },
    ],
  },
  { path: '', redirectTo: '/observable', pathMatch: 'full' },
  { path: '**', component: UnderConstruction, pathMatch: 'full' },
];
