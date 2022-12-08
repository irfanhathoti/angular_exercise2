export class Employee {
    regno : string;
    studentName : string;
    studentMarks : number;

    constructor(regno : string="", studentName : string="", studentMarks : number=0) {
        this.regno = regno;
        this.studentName = studentName;
        this.studentMarks = studentMarks;
    }
}
