// קלאס חדש משימה
export class TaskItem {

  // לקלאס יש בנאי והוא מקבל סטרינג שזה בעצם המשימה
  constructor(public title: string) {
  }

  // לקלאס זה יש שדה שמכיל ערך בוליאני ותפקידו לציין האם המשימה בוצע או לו
  // בזמן יצירה מופע חדש מסוג לקאס זה השדה הזה מקבל ערך בוליאני מסוג שקר
  public isDone = false; // המשימה רק נוצרה הגיוני שהמשימה עוד לא בוצע

    // פונקציה שהופכת את הערך הבוליאני להפוך ממה שהיה מקודם
    // שקר הופך לאמת ואמת הופך לשקר
    // ככה נוכל לסמן משימות שבוצעו או להפוך משימות שבוצעו ללא בוצעו
    toggleIsDone() {
      this.isDone = !this.isDone;
    }
}
