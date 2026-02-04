import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
 totalQuestions = 100;
  correctAnswers = 85;
  score = Math.round((this.correctAnswers / this.totalQuestions) * 100);

  constructor(private router: Router) {}

  reviewAnswers() {
    // Navigate to review page (you can define a route like /review)
    this.router.navigate(['/review']);
  }

}
