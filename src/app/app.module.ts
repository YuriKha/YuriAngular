import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module'; // נייבא את המודול המשימות
import { CalendarModule } from './calendar/calendar.module'; // נייבא את המודול התאריך

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // נייבא פה את כל המודלים שאנחנו רוצים להציג
    BrowserModule,
    AppRoutingModule, // ראוטים 
    TasksModule, // משימות
    CalendarModule,  //  התאריך
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
