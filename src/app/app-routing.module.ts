import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component'; // נייבא את הקומפוננטה לוח שנה
import { TaskListComponent } from './tasks/task-list.component'; // נייבא את הקומפוננטה משימות


// נכניס לפה את כל הנתיבים שלנו הרוטר יפנה לקומפוננטה בהתאם לנתיב שהוא מקבל
const routes: Routes = [
  {component:CalendarComponent,path:''}, // הראוט יהיה דיפולטיבי לא הכנסנו נתיב קומפוננטה זו תוצג ראשונה
  {component:TaskListComponent,path:'tasks'} // יפנה לקומפוננטה של המשימות כי הוספנו מה הנתיב שהוא מקבל
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
