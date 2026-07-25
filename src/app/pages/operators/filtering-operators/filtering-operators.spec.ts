import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringOperators } from './filtering-operators';

describe('FilteringOperators', () => {
  let component: FilteringOperators;
  let fixture: ComponentFixture<FilteringOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteringOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteringOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
