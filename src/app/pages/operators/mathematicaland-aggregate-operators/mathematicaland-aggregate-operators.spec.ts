import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicalandAggregateOperators } from './mathematicaland-aggregate-operators';

describe('MathematicalandAggregateOperators', () => {
  let component: MathematicalandAggregateOperators;
  let fixture: ComponentFixture<MathematicalandAggregateOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathematicalandAggregateOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathematicalandAggregateOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
