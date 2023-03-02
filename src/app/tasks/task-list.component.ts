import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'; // מאפשר לי להשתמש ב ngform

import { ActivatedRoute,Route } from '@angular/router'; //  נייבא את האפשרות לקרוא ראוטים נתיבים בזכות זה אנחנו יכולים לקרואה נתיבים

// אלו הם קלאסים שייצרנו קלאס משימה וקלאס משימה חדשה
import { NewTask } from './new-task.dto'; // קלאס של  משימה חדשה שמקבל את הכותרת ותאריך 
import { TaskItem } from './task-item.dto'; // קלאס מסוג משימה יש לו שם משימה ושדה אם בוצע ופונקציה שיודעת להפוך מבוצע ללא וההפך

//  זהו ה service 
import { TaskService } from './task.service'; // בזכות זה יש לנו את האפשרויות ליצור למחוק ולעדכן את המשימות שלנו

@Component({
  selector: 'task-list', // שם התגית על מנת לגשת לפה 
  templateUrl: './task-list.component.html', // מיקום תוכן ה HTML
  styleUrls: ['./task-list.component.css'] // מיקום תוכן ה CSS
})
export class TaskListComponent implements OnInit {
  
  // ניצור שדה חדש בקלאס שיכיל את הנתיב שקיבלנו כשהגענו לדף זה
  // הוא קורא את ה URL
  // שזה ActivatedRoute
  //ןמכניס לשדה route
  constructor(private route:ActivatedRoute,private taskService:TaskService) { } 
  // route:ActivatedRoute - כל הנתיבים שלנו
  // taskService:TaskService - הופך את השירות להוספה מחיקה ועידכון של משימות לזמין בקומפוננטה זו

  
  // נשתמש בפונקציה שקיימת ב Service
  // שמביא את כל המשימות getAllTasks()
  // ואת מה שהפונקציה מחזירה נכניס לתוך tasks
  tasks = this.taskService.getAllTasks(); 

  // משתנה מסוג קלאס משימה חדשה שיכיל בתוכו את המשימה החדשה
  newTask: NewTask = new NewTask();



  // בטעינת הדף תעשה   
  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date']; // נפענח את התאריך שקיבלנו נקח את הפארמטרים של ה URL
    this.newTask = new NewTask(this.newTask.title, new Date(strDate)); // נוצר מופע חדש של משימה שמקבל משימה והתאריך שלו
  }

  // פונקציה להוספה שמשתמשת ב Service
  add(taskNgForm :NgForm){

    // במידה ולא הייתה אינטרקציה עם הטופס הוא לא שולח את הטופס
    // הכוונה שלא רק שלא הכנסתי משימה אלא גם לא לחצתי עם העכבר על שורת הקלט
    if(taskNgForm.touched==false)
    {
      return;
    }

    // פה משתמשים ב Service
    this.taskService.addTask(this.newTask); // הפונקציה הוספת משימה קיימת בשירות שייצרנו והיא מקבל משימה חדשה
    // נביא מחדש את כל המשימות שלנו יש לנו משימה חדשה
    this.tasks = this.taskService.getAllTasks();

    taskNgForm.reset({date: this.newTask.date});
  }



  // פונקציה להסרה שמשתמשת ב Service
  remove(exisitingTask: TaskItem){
    // נקפיץ הודעה דרך הדפדפן לוודא שהמשתמש אכן מעוניין למחוק את המשימה
    var userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${exisitingTask.title}"`)

    // במידה והמשתמש אכן אישר מחיקה
    if(userConfirmed){ 
        // נשתמש בפונקציית מחיקה שקיימת ב Service
        this.taskService.removeTask(exisitingTask);
        // נביא מחדש את כל המשימות שלנו כי מחקנו
        this.tasks = this.taskService.getAllTasks();
    }
  }
  
}


