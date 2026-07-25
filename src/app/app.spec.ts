import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { SharedCommonService } from './shared/service/shared-common-service';

describe('App', () => {
  let mockSharedCommonService: Partial<SharedCommonService>;

  beforeEach(async () => {
    mockSharedCommonService = {
      getJsonData: <T>(url?: string): Promise<T> => Promise.resolve([] as T),
    };

    await TestBed.configureTestingModule({
      imports: [App, RouterModule.forRoot([])],
      providers: [
        { provide: SharedCommonService, useValue: mockSharedCommonService },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // Trigger initial change detection
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain(
      'The Unsubscribables'
    );
  });
});
