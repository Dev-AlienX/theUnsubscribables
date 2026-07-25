import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastingOperators } from './multicasting-operators';

describe('MulticastingOperators', () => {
  let component: MulticastingOperators;
  let fixture: ComponentFixture<MulticastingOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulticastingOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulticastingOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
