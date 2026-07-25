import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationOperators } from './creation-operators';

describe('CreationOperators', () => {
  let component: CreationOperators;
  let fixture: ComponentFixture<CreationOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
