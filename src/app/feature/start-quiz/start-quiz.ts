import { Component, inject , ChangeDetectorRef  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Shared } from '../../shared/shared';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start-quiz',
  imports: [CommonModule],
  templateUrl: './start-quiz.html',
  styleUrl: './start-quiz.css',
})
export class StartQuiz {

  sharedService:Shared = inject(Shared)
  constructor(private cd:ChangeDetectorRef , private routs:Router ){

  }
 currentQuestion = 1;
  totalQuestions = 4;
  totalTime = 0; // in minutes
   second:number = 0;
   minut:number = 0;
   hour:number = 0;
  timer = '00:00:00';
  questions:any[] = []
  question:any
  selectedOption: string | null = null;


  isTimerEnable:boolean = this.sharedService.isTimerEnable()


  ngOnInit(){

this.questions=[]
    this.sharedService.QuizResponse()?.data.forEach((element:any) => {
     
      this.questions.push({
        text: element.question,
        queNo: element.questionId,
        options: [element.option1 , element.option2 , element.option3 , element.option4]
      })
    }
    );
    this.totalQuestions = this.questions.length

    this.question=this.questions[0]
    if(this.isTimerEnable){
      this.totalTime = this.sharedService.Time();
      this.startTime()
    }

  }
totalMinut=0
  startTime(){

   var intervalID = setTimeout(() => {
    
      this.second =this.second+1
      if(this.second==60){
        this.second = 0
        this.minut++
        this.totalMinut++;

        if(this.minut==60){
          this.minut = 0;
          this.hour++
        }
      }


    let second
    let minut
    let hour
       second =  this.second<10?`0${this.second}`:this.second
       minut = this.minut<10?`0${this.minut}`:this.minut
       hour = this.hour<10?`0${this.hour}`:this.hour
     

      this.timer = `${hour}: ${minut}: ${second}`
      this.cd.detectChanges()
      console.log(this.timer)
          if(Number(this.totalTime) ==this.totalMinut){
            clearTimeout(intervalID)   
             this.routs.navigate(['result'])
          }else{
             this.startTime()
          }
   
    }, 1000);
  }


  selectOption(option: string , quesNo:number) {
    console.log(quesNo)
    this.selectedOption = option;
  }

  nextQuestion() {
    debugger
    if (this.currentQuestion < this.totalQuestions) {
      this.currentQuestion++;
      this.question = this.questions[this.currentQuestion-1]
      // Load next question logic here
    }
  }

  previousQuestion() {
    if (this.currentQuestion > 1) {
      this.currentQuestion--;
        this.question = this.questions[this.currentQuestion-1]
      // Load previous question logic here
    }
  }

  submitQuiz(){
    this.routs.navigate(['result'])
  }

}
