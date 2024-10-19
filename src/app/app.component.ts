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

    let delimiter = /,|\n/;  // Default delimiter (comma or newline)

    // Check if there's a custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEnd));  // Extract the custom delimiter
      numbers = numbers.substring(delimiterEnd + 1);  // Remove the delimiter declaration line
    }

    const numArray = numbers.split(delimiter).map(Number);

    return numArray.reduce((a, b) => a + b, 0);
  }



  }
