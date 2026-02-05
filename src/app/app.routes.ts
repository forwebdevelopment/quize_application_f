import { Routes } from '@angular/router';
import { QuizFilter } from './feature/quiz-filter/quiz-filter';
import { StartQuiz } from './feature/start-quiz/start-quiz';
import { authGuard } from './core/auth-guard';
import { Results } from './feature/results/results';
import { Home } from './shared/home/home';
import { AddQuiz } from './feature/add-quiz/add-quiz';

export const routes: Routes = [

    {path:'' , component:Home},
    {path:'home' , component:Home},
    {path:'quiz_filter' ,component:QuizFilter},
    {path:'quiz_start' ,component:StartQuiz , canActivate:[authGuard]},
    {path:'result',component:Results},
    {path:'add_quiz',component:AddQuiz}
];
