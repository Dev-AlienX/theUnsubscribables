import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinOperators } from './join-operators';

describe('JoinOperators', () => {
  let component: JoinOperators;
  let fixture: ComponentFixture<JoinOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
