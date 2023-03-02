//זהו קלאס מסוג משימה  
export class NewTask {
    // יש לו בנאי שמקבל משימה והתאריך 
    constructor(public title: string = "", public date: Date = new Date()) {
    }
}
