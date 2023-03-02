import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar', // שם התגית על מנת להשתמש בקומפוננטה זו
  templateUrl: './calendar.component.html', // מיקום תוכן ה HTML
  styleUrls: ['./calendar.component.css'] // מיקום תוכן ה CSS
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // יצרנו משתנה והכנסנו לתוכו תאריך כברירת מחדל
  selectedDate=new Date();  // פונקציה לקבלת תאריך של הרגע הנוכחי הרגע בו אתה נמצאה בעמוד 
  //   יכול להכיל כל תאריך שהמשתש יבחר  selectedDate
  //   התוכן של המשתנה הזה ישלח לקומפוננטה דרך ה URL
  //  נקבל נתונים בקומפוננטה של המשימות דרך ה URL
}
