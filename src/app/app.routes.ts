import { Routes } from '@angular/router';
import { QuizFilter } from './feature/quiz-filter/quiz-filter';
import { StartQuiz } from './feature/start-quiz/start-quiz';

export const routes: Routes = [

    {path:'quiz_filter' ,component:QuizFilter},
    {path:'quiz_start' ,component:StartQuiz}
];
