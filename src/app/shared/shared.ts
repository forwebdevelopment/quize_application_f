import { Injectable , signal} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class Shared {
   isQuizFiltered = signal(false)
  isTimerEnable = signal(false)
  Category = signal("non")
  Time = signal(0)

  isLogin = signal(false)
   QuizFilter(){
         this.isQuizFiltered.set(true)
   }

   enableTimer(){
    this.isTimerEnable.set(true)
   }

  



}
