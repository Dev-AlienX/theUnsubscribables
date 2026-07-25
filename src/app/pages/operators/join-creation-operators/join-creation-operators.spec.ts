import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCreationOperators } from './join-creation-operators';

describe('JoinCreationOperators', () => {
  let component: JoinCreationOperators;
  let fixture: ComponentFixture<JoinCreationOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinCreationOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinCreationOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
