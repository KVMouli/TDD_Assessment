import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StringCalculator-TDD';
  constructor() { }

  Add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    const numArray = numbers.split(',').map(Number);
    return numArray.reduce((a, b) => a + b, 0);
  }
}
