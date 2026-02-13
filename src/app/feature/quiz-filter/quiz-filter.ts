import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ɵEmptyOutletComponent, RouterLink, Router } from "@angular/router";
import { Shared } from '../../shared/shared';
import { Level, Subject } from '../../models/models';

@Component({
  selector: 'app-quiz-filter',
  imports: [FormsModule,
    CommonModule, RouterLink],
  templateUrl: './quiz-filter.html',
  styleUrl: './quiz-filter.css',
})
export class QuizFilter {
   sharedService = inject(Shared)
   time:number=0
   isTech:boolean = false
   syllabus: Subject[]=[]
   level:Level[]=[]
 filters = {
    category: 'Select Category',
    level: 'Select Level',
    syllabus: 'Select Syllabus',
    useTimer: false,
    timePerQuestion: ''
  };

 

  constructor(private cd:ChangeDetectorRef , private routs:Router ){

  }
  ngOnInit(){
    debugger
     this.sharedService.QuizFilter()
     this.filters.category = this.sharedService.Category()
      if(this.filters.category!='non'){
         this.filteredQuizzes = this.quizzes.filter(q => {
      const matchCategory = this.filters.category ? q.category === this.filters.category : true;
      return matchCategory;
    })

           this.isTech = this.filters.category=="Tech"?true:false
         this.cd.detectChanges()
      }

  }



  quizzes = [
    { title: 'C# Basics', category: 'Tech', level: 'Beginner', syllabus: ['C#'] },
    { title: 'Advanced SQL', category: 'Tech', level: 'Intermediat', syllabus: ['SQL'] },
    { title: 'Python for Data Science', category: 'Tech', level: 'Intermediat', syllabus: ['Python'] },
    { title: 'History', category: 'Non Tech', level: 'non', syllabus: ["History"] },
    { title: 'General Knowledge', category: 'Non Tech', level: 'non', syllabus: ["General Knowledge"] }
  ];




  onChangeCateory(){
    debugger
     this.filteredQuizzes = this.quizzes.filter(q => {
      const matchCategory = this.filters.category ? q.category === this.filters.category : true;
      return matchCategory;
    })
    this.isTech = this.filters.category=="Tech"?true:false
  }

  enableTimer(){
    this.sharedService.enableTimer();

  }
enterTime(){
  debugger
  this.filters.timePerQuestion = this.time.toString()
  this.sharedService.Time.set(this.time)
}


  filteredQuizzes = [...this.quizzes];

  applyFilters() {
    debugger
    this.filteredQuizzes = this.quizzes.filter(q => {
      const matchCategory = this.filters.category ? q.category === this.filters.category : true;
      const matchLevel = this.filters.level ? q.level === this.filters.level : q.level=='non'?true:false;
      const matchSyllabus = this.filters.syllabus ? q.syllabus.includes(this.filters.syllabus) : true;
      return matchCategory && matchLevel && matchSyllabus;
    });
  }

}
