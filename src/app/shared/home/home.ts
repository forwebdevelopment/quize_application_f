import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Shared } from '../shared';
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 appTitle = 'Quiz Master';
  tagline = 'Test your knowledge, challenge yourself!';

  constructor(private router: Router , private _shared:Shared) {}



  selectCategory(category: string) {

    console.log(category)
    this._shared.Category.set(category)
    // Save category selection (could also use signals or a service)
    sessionStorage.setItem('quizCategory', category);

    // Redirect to quiz filter page with category context
    this.router.navigate(['/quiz_filter']);
  }


}
