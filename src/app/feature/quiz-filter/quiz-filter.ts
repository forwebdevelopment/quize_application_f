import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-filter',
  imports: [FormsModule , 
    CommonModule
  ],
  templateUrl: './quiz-filter.html',
  styleUrl: './quiz-filter.css',
})
export class QuizFilter {
 filters = {
    category: '',
    level: '',
    syllabus: '',
    useTimer: false,
    timePerQuestion: ''
  };

  quizzes = [
    { title: 'C# Basics', category: 'tech', level: 'low', syllabus: ['C#'] },
    { title: 'Advanced SQL', category: 'tech', level: 'high', syllabus: ['SQL'] },
    { title: 'Python for Data Science', category: 'tech', level: 'high', syllabus: ['Python'] },
    { title: 'Soft Skills', category: 'non-tech', level: 'low', syllabus: [] }
  ];

  filteredQuizzes = [...this.quizzes];

  applyFilters() {
    this.filteredQuizzes = this.quizzes.filter(q => {
      const matchCategory = this.filters.category ? q.category === this.filters.category : true;
      const matchLevel = this.filters.level ? q.level === this.filters.level : true;
      const matchSyllabus = this.filters.syllabus ? q.syllabus.includes(this.filters.syllabus) : true;
      return matchCategory && matchLevel && matchSyllabus;
    });
  }

}
