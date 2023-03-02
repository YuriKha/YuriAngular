import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';

// נייבא מספר מודלים מהספריה של אנגולר
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ייבוא של המודול אנימציה לחומר 
import { MatDatepickerModule } from '@angular/material/datepicker'; // ייבוא לוח השנה מהחומרים המובנים
import { MatNativeDateModule } from '@angular/material/core'; // ייבוא של המודול
import { RouterModule } from '@angular/router'; // בזכות זה אנחנו יכולים לנתב בין הדפים  

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [ // כל המודלים שאני מייבא על מנת שאוכל להשתמש בהם בקומפוננטה הזו
    CommonModule,
    BrowserAnimationsModule, // ייבוא של המודול אנימציה לחומר 
    MatDatepickerModule, // ייבוא לוח השנה מהחומרים המובנים
    MatNativeDateModule, // ייבוא של המודול
    RouterModule // ייבוא של המודול
  ],
  exports:[  // נייצא את המודול על מנת שנוכל להשתמש בו במקומות אחרים
    CalendarComponent
  ]
})
export class CalendarModule { }
