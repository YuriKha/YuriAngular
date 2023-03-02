import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TaskListComponent } from './task-list.component'; // נייבא את את מה שייצרנו 
// נייבא  מודל מהספריה של אנגולר
import { MatDatepickerModule } from '@angular/material/datepicker';  // ספריה שמאפשרת להשתמש באפשרות לבחירת תאריך אייקון מיוחד 
import { FormsModule } from '@angular/forms'; // נייבא את האפשרות לעבוד עם FORM // זה יתן לי את האפשרות להשתמש [(ngModel)]

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule, // נייבא מהספריה של אנגולר את החומר לחלונית בחירת תאריך
    FormsModule // נותן לי את האפשרות להשתמש ב [()]
  ],
  exports:[ // נייצא את המודול על מנת שנוכל להשתמש בו במקומות אחרים
    TaskListComponent
  ]
})
export class TasksModule { }
