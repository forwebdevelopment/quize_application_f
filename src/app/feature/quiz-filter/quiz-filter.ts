import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ɵEmptyOutletComponent, RouterLink } from "@angular/router";

@Component({
  selector: 'app-quiz-filter',
  imports: [FormsModule,
    CommonModule, RouterLink],
  templateUrl: './quiz-filter.html',
  styleUrl: './quiz-filter.css',
})
export class QuizFilter {

  isTech:boolean = false
 filters = {
    category: 'Select Category',
    level: 'non',
    syllabus: '',
    useTimer: false,
    timePerQuestion: ''
  };
syllabus: { cat: string, value: string }[] = [
  // Non-Tech
  { cat: 'Non Tech', value: 'History' },
  { cat: 'Non Tech', value: 'Geography' },
  { cat: 'Non Tech', value: 'General Knowledge' },
  { cat: 'Non Tech', value: 'Sports' },
  { cat: 'Non Tech', value: 'Bollywood' },
  { cat: 'Non Tech', value: 'Current Affairs' },

  // Tech
  { cat: 'Tech', value: 'C#' },
  { cat: 'Tech', value: 'JavaScript' },
  { cat: 'Tech', value: 'Python' },
  { cat: 'Tech', value: 'Databases (SQL/PostgreSQL)' },
  { cat: 'Tech', value: 'Cybersecurity' },
  { cat: 'Tech', value: 'Artificial Intelligence' }
];

  quizzes = [
    { title: 'C# Basics', category: 'Tech', level: 'Beginar', syllabus: ['C#'] },
    { title: 'Advanced SQL', category: 'Tech', level: 'Intermediat', syllabus: ['SQL'] },
    { title: 'Python for Data Science', category: 'Tech', level: 'Intermediat', syllabus: ['Python'] },
    { title: 'History', category: 'Non Tech', level: 'non', syllabus: ["History"] },
      { title: 'General Knowledge', category: 'Non Tech', level: 'non', syllabus: ["General Knowledge"] }
  ];

Category:any[]=["Tech" , "Non Tech"]


  onChangeCateory(){
    debugger
    this.isTech = this.filters.category=="Tech"?true:false
  }




  filteredQuizzes = [...this.quizzes];

  applyFilters() {
    this.filteredQuizzes = this.quizzes.filter(q => {
      const matchCategory = this.filters.category ? q.category === this.filters.category : true;
      const matchLevel = this.filters.level ? q.level === this.filters.level : q.level=='non'?true:false;
      const matchSyllabus = this.filters.syllabus ? q.syllabus.includes(this.filters.syllabus) : true;
      return matchCategory && matchLevel && matchSyllabus;
    });
  }

}
