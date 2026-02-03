import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from "@angular/router";
import { QuizFilter } from "../../feature/quiz-filter/quiz-filter";
import { StartQuiz } from "../../feature/start-quiz/start-quiz";
import { Home } from "../home/home";

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, RouterOutlet, Home],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
