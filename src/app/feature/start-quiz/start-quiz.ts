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

  isTimerEnable:boolean = this.sharedService.isTimerEnable()


  ngOnInit(){
    debugger
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




  question = {
    text: 'Which is correct select query',
    options: [
      'Select *from Table',
      'Select from Table',
      'Select **from Table',
      'Select  *form Table'
    ]
  };


  questions = [
     {
    text: 'Which is correct select query',
    options: [
      'Select *from Table',
      'Select from Table',
      'Select **from Table',
      'Select  *form Table'
    ]
  },
    {
    text: 'Which is correct select query',
    options: [
      'Delete *from Table',
      'delete from Table',
      'Delet **from Table',
      'delete  *form Table'
    ]
  },

  {
    text: 'Which is correct select query',
    options: [
      'update *from Table',
      'update from Table',
      'update  Table set name ="krishna"',
      'update  *form Table'
    ]
  },

  {
    text: 'Which is correct select query',
    options: [
      'Insert into table value ()',
      'Insert into table  value',
      'insert into table ',
      'insert into (column name) value'
    ]
  }
];









  selectedOption: string | null = null;



  selectOption(option: string) {
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

}
