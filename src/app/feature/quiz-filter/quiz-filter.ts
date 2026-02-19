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
  numberOfQuestions:number = 25
 filters = {
    category: 'Select Category',
    level: 'Select Level',
    syllabus: 'Select Syllabus',
    useTimer: false,
    timePerQuestion: '',
  
  };

 

  constructor(private cd:ChangeDetectorRef , private routs:Router ){

  }
  ngOnInit(){
    debugger

    

     this.sharedService.QuizFilter()
     this.filters.category = this.sharedService.Category()
     this.onChangeCateory()

  }



  quizzes = [
    { title: 'C# Basics', category: 'Tech', level: 'Beginner', syllabus: ['C#'] },
    { title: 'Advanced SQL', category: 'Tech', level: 'Intermediat', syllabus: ['SQL'] },
    { title: 'Python for Data Science', category: 'Tech', level: 'Intermediat', syllabus: ['Python'] },
    { title: 'History', category: 'Non Tech', level: 'non', syllabus: ["History"] },
    { title: 'General Knowledge', category: 'Non Tech', level: 'non', syllabus: ["General Knowledge"] }
  ];




  onChangeCateory(){
    if(this.filters.category!='Select Category'){
      this.sharedService.Category.set(this.filters.category)
    }

    this.filters.level = 'Select Level'
    this.filters.syllabus = 'Select Syllabus'
    var tenantdata:any= this.sharedService.TenantData();
    tenantdata.card= this.sharedService.CardData()
    this.sharedService.TenantData.set(tenantdata)
    
     if(this.filters.category!='non'){

     tenantdata.card =    this.sharedService.TenantData()?.card.filter(c=>c.catName==this.sharedService.Category())
     this.sharedService.TenantData.set(tenantdata) 

         this.isTech = this.filters.category=="Tech"?true:false
         this.cd.detectChanges()
      }else{
         var tenantdata:any= this.sharedService.TenantData();
     tenantdata.card =    this.sharedService.TenantData()?.card.filter(c=>c.catName!=this.sharedService.Category())
     this.sharedService.TenantData.set(tenantdata) 
        this.isTech = this.sharedService.Category()=="Tech"
         this.cd.detectChanges()
      }
  }

  enableTimer(){
    this.sharedService.enableTimer();

  }
enterTime(){
  debugger
  this.filters.timePerQuestion = this.time.toString()
  this.sharedService.Time.set(this.time)
}


  onChangeLevel(){
    if(this.filters.category!='Select Level'){
     // this.sharedService.Category.set(this.filters.category)
    }
    var tenantdata:any= this.sharedService.TenantData();
    tenantdata.card= this.sharedService.CardData()
     this.sharedService.TenantData.set(tenantdata)
     tenantdata.card =    this.sharedService.TenantData()?.card.filter(c=>c.levelName==this.filters.level && (c.subject.toLocaleLowerCase()==this.filters.syllabus.toLocaleLowerCase() || this.filters.syllabus=='Select Syllabus'))  
     this.sharedService.TenantData.set(tenantdata) 
   
  }




  onChangeSyllabus(){

    debugger
     var tenantdata:any= this.sharedService.TenantData();
     tenantdata.card= this.sharedService.CardData()
     this.sharedService.TenantData.set(tenantdata)
     debugger
     tenantdata.card =    this.sharedService.TenantData()?.card.filter(c=>c.subject.toLocaleLowerCase()==this.filters.syllabus.toLocaleLowerCase()&&
      (c.levelName.toLocaleLowerCase()==this.filters.level.toLocaleLowerCase() || this.filters.level=='Select Category'))
     this.sharedService.TenantData.set(tenantdata) 

  }




  filteredQuizzes = [...this.quizzes];

  applyFilters() {
    debugger

    // this.filteredQuizzes = this.quizzes.filter(q => {
    //   const matchCategory = this.filters.category ? q.category === this.filters.category : true;
    //   const matchLevel = this.filters.level ? q.level === this.filters.level : q.level=='non'?true:false;
    //   const matchSyllabus = this.filters.syllabus ? q.syllabus.includes(this.filters.syllabus) : true;
    //   return matchCategory && matchLevel && matchSyllabus;
    // });
  }

}
