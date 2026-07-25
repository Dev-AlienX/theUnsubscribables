import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalandBooleanOperators } from './conditionaland-boolean-operators';

describe('ConditionalandBooleanOperators', () => {
  let component: ConditionalandBooleanOperators;
  let fixture: ComponentFixture<ConditionalandBooleanOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalandBooleanOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalandBooleanOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
