import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityOperators } from './utility-operators';

describe('UtilityOperators', () => {
  let component: UtilityOperators;
  let fixture: ComponentFixture<UtilityOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
