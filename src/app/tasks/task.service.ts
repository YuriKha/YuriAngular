import { Injectable } from '@angular/core';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    constructor() { }

    // ייצרנו משתנה מסוג קלאס משימה והוא מסוג מערך
    private tasks: TaskItem[] = [   
      // ניצור כמה משימות פיקטיביות שיעלו בכל טעינה חדשה של העמוד       
      new TaskItem ("דוגמא 1"),
      new TaskItem ("דוגמא 2"),
      new TaskItem ("דוגמא 3"),
    ]
    
    //---------------------------------
    // הפונקציות שיש ל Service

    // מביא את כל המשימות
    getAllTasks(): TaskItem[]{
      return this.tasks;
    }
    // מוסיף משימה חדשה
    addTask(newTask:NewTask){ // הפונקציה מקבלת משימה חדשה מסוג קלאס משימה חדשה
      this.tasks.push(new TaskItem(newTask.title)); // מופע חדש של משימות ומקבל את הכותרת של קלאס משימה חדשה וכל זה נדחף לסוף המערך
    }
    // הסרה של משימה
    removeTask(exisitingTask:TaskItem){
      // הפונקציה פילטר מסננת כל מה שלא עבר את התנאי 
      this.tasks = this.tasks.filter(task => task != exisitingTask); 
    }

}
