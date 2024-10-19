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

    let delimiter = /,|\n/;  // Default delimiters: comma or newline

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEnd));  // Extract custom delimiter
      numbers = numbers.substring(delimiterEnd + 1);  // Remove delimiter declaration
    }

    const numArray = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }

    // Filter out numbers greater than 1000 and sum the rest
    return numArray
      .filter(num => num <= 1000)  // Ignore numbers greater than 1000
      .reduce((a, b) => a + b, 0);
  }

  }
