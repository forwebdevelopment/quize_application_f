import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-quiz',
  imports: [CommonModule],
  templateUrl: './start-quiz.html',
  styleUrl: './start-quiz.css',
})
export class StartQuiz {
 currentQuestion = 1;
  totalQuestions = 4;
  totalTime = 30; // in minutes
  timer = '00:01:53';

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

  constructor(private fb: FormBuilder) {}

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
