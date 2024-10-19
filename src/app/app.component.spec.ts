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


  it('should return 0 for an empty string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Add('')).toBe(0);
  });

  it('should return the number itself when one number is provided', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Add('1')).toBe(1);
    expect(app.Add('5')).toBe(5);
  });

  it('should return the sum of two numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Add('1,2')).toBe(3);
    expect(app.Add('10,20')).toBe(30);
  });

  it('should handle multiple numbers (refactor when you reach this)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Add('1,2,3')).toBe(6);
  });
  it('should handle newlines between numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Add('1\n2,3')).toBe(6);
    expect(app.Add('10\n5\n15')).toBe(30);
  });

  it('should handle mixed delimiters (comma and newline)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Add('1\n2,3')).toBe(6);
    expect(app.Add('10\n20,30')).toBe(60);
  });

  it('should handle custom delimiter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Add('//;\n1;2')).toBe(3);
    expect(app.Add('//-\n4-5-6')).toBe(15);
    expect(app.Add('//#\n10#20#30')).toBe(60);
  });

  it('should support custom delimiter with multiple numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Add('//;\n1;2;3;4')).toBe(10);
  });

  it('should still support default delimiters when no custom delimiter is given', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Add('1,2')).toBe(3);
    expect(app.Add('1\n2,3')).toBe(6);
  });

  it('should throw an exception when a negative number is provided', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(() => app.Add('1,-2,3')).toThrow(new Error('Negatives not allowed: -2'));
  });

  it('should throw an exception listing all negative numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(() => app.Add('1,-2,3,-4')).toThrow(new Error('Negatives not allowed: -2, -4'));
  });

  it('should still support default delimiters when no custom delimiter is given', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.Add('1,2')).toBe(3);
    expect(app.Add('1\n2,3')).toBe(6);
  });
});
