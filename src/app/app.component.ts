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

    // Check for custom delimiters
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");

      // Handle multiple custom delimiters in the format //[delim1][delim2]...
      if (numbers[2] === '[') {
        const delimiterSection = numbers.substring(2, delimiterEnd);
        const delimiters = delimiterSection.match(/\[(.*?)\]/g)!.map(d => d.slice(1, -1));  // Extract each delimiter

        // Create a regular expression that matches any of the delimiters
        delimiter = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'));
      } else {
        // Handle a single character delimiter
        delimiter = new RegExp(numbers[2]);
      }

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
