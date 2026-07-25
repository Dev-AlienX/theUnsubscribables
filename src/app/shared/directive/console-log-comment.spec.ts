import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ConsoleLogComment } from './console-log-comment';

// Create a test component to host the directive
@Component({
  template: `<div appConsoleLogComment></div>`,
  standalone: true,
  imports: [ConsoleLogComment],
})
class TestHostComponent {}

describe('ConsoleLogComment', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    // Find the element with the directive
    const directiveEl = fixture.debugElement.query(
      By.directive(ConsoleLogComment)
    );
    expect(directiveEl).not.toBeNull();

    // Get the directive instance
    const directive = directiveEl.injector.get(ConsoleLogComment);
    expect(directive).toBeTruthy();
  });
});