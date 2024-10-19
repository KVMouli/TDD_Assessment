import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'StringCalculator-TDD' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('StringCalculator-TDD');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, StringCalculator-TDD');
  });
  it('should return 0 for an empty string', () => {
    expect(component.Add('')).toBe(0);
  });

  it('should return the number itself when one number is provided', () => {
    expect(component.Add('1')).toBe(1);
    expect(component.Add('5')).toBe(5);
  });

  it('should return the sum of two numbers', () => {
    expect(component.Add('1,2')).toBe(3);
    expect(component.Add('10,20')).toBe(30);
  });

  it('should handle multiple numbers (refactor when you reach this)', () => {
    expect(component.Add('1,2,3')).toBe(6);
  });

});
