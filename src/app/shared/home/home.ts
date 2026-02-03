import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 appTitle = 'Quiz Master';
  tagline = 'Test your knowledge, challenge yourself!';

  constructor(private router: Router) {}

  selectCategory(category: string) {
    // Save category selection (could also use signals or a service)
    sessionStorage.setItem('quizCategory', category);

    // Redirect to quiz filter page with category context
    this.router.navigate(['/quiz_filter']);
  }


}
