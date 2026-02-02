import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from "@angular/router";
import { QuizFilter } from "../../feature/quiz-filter/quiz-filter";

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, RouterOutlet, QuizFilter],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
