import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Shared } from '../../shared/shared';
import { Api } from '../../core/api';
import { LoaderService } from '../../core/loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-quiz',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './add-quiz.html',
  styleUrl: './add-quiz.css',
})
export class AddQuiz {

  toast:any = inject(ToastrService);
 quizForm: FormGroup;
  private loaderService = inject(LoaderService);
  categories = ['Math', 'Science', 'History'];
  syllabi = ['CBSE', 'ICSE', 'State Board'];
  subSubjects = ['Algebra', 'Geometry', 'Physics'];
  levels = ['Easy', 'Medium', 'Hard'];

  constructor(private fb: FormBuilder , public _shared:Shared , private api:Api) {
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
    this.loaderService.show();
    this.api.AddQuiz(this.quizForm.value).subscribe({next:(val:any)=>{
      this.loaderService.hide()
      if(val.statusCode==200){
      this.toast.success('Quiz Added Succussfully');
      }else{
        this.toast.error("Sumthing Error : Retry");
        
      }
      console.log(val)
    },error:(err:any)=>{
      console.log(err)
       this.loaderService.hide()
    }})
    

  }




  onCorrectChange(qIndex:number, changedIdx:number){

    const optsFA = this.options(qIndex); // formArray
    const changed = optsFA.at(changedIdx).get('correct')?.value;

    if(changed){
      //if one becomes true , set all othors to false
      optsFA.controls.forEach((ctrl:any,idx:any)=>{
        if(idx != changedIdx){
          ctrl.get('correct')?.setValue(false ,{emitEvent:false})
        }
      })
    }
  }
}
