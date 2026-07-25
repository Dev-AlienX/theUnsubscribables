import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingOperators } from './error-handling-operators';

describe('ErrorHandlingOperators', () => {
  let component: ErrorHandlingOperators;
  let fixture: ComponentFixture<ErrorHandlingOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlingOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandlingOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
