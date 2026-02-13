import { Routes } from '@angular/router';
import { QuizFilter } from './feature/quiz-filter/quiz-filter';
import { StartQuiz } from './feature/start-quiz/start-quiz';
import { authGuard, IsLogin } from './core/auth-guard';
import { Results } from './feature/results/results';
import { Home } from './shared/home/home';
import { AddQuiz } from './feature/add-quiz/add-quiz';
import { Login } from './feature/AuthFolder/login/login';
import { About } from './feature/about/about';

export const routes: Routes = [

    {path:'' , component:Home},
    {path:'home' , component:Home},
    {path:'quiz_filter' ,component:QuizFilter},
    {path:'quiz_start' ,component:StartQuiz , canActivate:[authGuard]},
    {path:'result',component:Results},
    {path:'add_quiz',component:AddQuiz , canActivate:[IsLogin]},
    {path:'login' , component:Login},
    {path:'about',component:About}
];
