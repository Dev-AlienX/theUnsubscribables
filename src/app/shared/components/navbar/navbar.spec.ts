import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar, navbarConfig } from './navbar';
import { RouterModule } from '@angular/router';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    
    // Set the required input
    const mockConfig: navbarConfig = {
      customClass: '',
      items: [],
    };
    fixture.componentRef.setInput('config', mockConfig);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
