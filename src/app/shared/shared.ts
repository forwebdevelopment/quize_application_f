import { Injectable , signal} from '@angular/core';
import { single } from 'rxjs';
import { TenantData } from '../models/models';


@Injectable({
  providedIn: 'root',
})
export class Shared {
   isQuizFiltered = signal(false)
  isTimerEnable = signal(false)
  Category = signal("non")
  Time = signal(0)
  TenantData = signal<TenantData|null>({
    categories:[],
    levels:[],
    subjects:[]
  })
  
  isLogin = signal(false)
   QuizFilter(){
         this.isQuizFiltered.set(true)
   }

   enableTimer(){
    this.isTimerEnable.set(true)
   }

  



}
