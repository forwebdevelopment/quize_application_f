import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Shared } from '../../shared/shared';


@Component({
  selector: 'app-add-quiz',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './add-quiz.html',
  styleUrl: './add-quiz.css',
})
export class AddQuiz {
 quizForm: FormGroup;

  categories = ['Math', 'Science', 'History'];
  syllabi = ['CBSE', 'ICSE', 'State Board'];
  subSubjects = ['Algebra', 'Geometry', 'Physics'];
  levels = ['Easy', 'Medium', 'Hard'];

  constructor(private fb: FormBuilder , public _shared:Shared) {
    this.quizForm = this.fb.group({
      category: ['', Validators.required],
      syllabus: ['', Validators.required],
      subSubject: ['', Validators.required],
      level: ['', Validators.required],
      questions: this.fb.array([this.createQuestion()])
    });
  }

  // Create a question group
  createQuestion(): FormGroup {
    return this.fb.group({
      questionText: ['', Validators.required],
      options: this.fb.array([this.createOption()])
    });
  }

  // Create an option group
  createOption(): FormGroup {
    return this.fb.group({
      value: ['', Validators.required],
      correct: [false]
    });
  }

  // Getters
  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  options(i: number): FormArray {
  
    return this.questions.at(i).get('options') as FormArray;
  }

  // Add question
  addQuestion() {
    this.questions.push(this.createQuestion());
  }

  // Delete question
  deleteQuestion(index: number) {
    this.questions.removeAt(index);
  }

  // Add option
  addOption(questionIndex: number ) {

    console.log(questionIndex)
    this.options(questionIndex).push(this.createOption());
  }

  // Delete option
  deleteOption(questionIndex: number, optionIndex: number) {
    this.options(questionIndex).removeAt(optionIndex);
  }

  // Submit
  submitQuiz() {
    console.log('Quiz Data:', this.quizForm.value);
    // TODO: send to backend service
  }


}
