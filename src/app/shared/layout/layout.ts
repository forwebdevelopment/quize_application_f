import { ChangeDetectorRef, Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from "@angular/router";
import { QuizFilter } from "../../feature/quiz-filter/quiz-filter";
import { StartQuiz } from "../../feature/start-quiz/start-quiz";
import { Home } from "../home/home";
import { Loader } from "../loader/loader";
import { LoaderService } from '../../core/loader';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, RouterOutlet, Home, Loader],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
 isLoading = false;

  constructor(private loaderService: LoaderService , private cd:ChangeDetectorRef) {}

  ngOnInit() {
    this.loaderService.loading$.subscribe(state => {
    
      this.isLoading = state;
       this.cd.detectChanges();
    });
  }

}
