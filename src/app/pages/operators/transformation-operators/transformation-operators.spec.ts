import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationOperators } from './transformation-operators';

describe('TransformationOperators', () => {
  let component: TransformationOperators;
  let fixture: ComponentFixture<TransformationOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformationOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformationOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
