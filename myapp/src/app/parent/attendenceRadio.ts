export class attendenceRadio {
    RegNo: string
    name: string;
    email: string;
    attendence: string;
    date: string
    constructor(Regno: string = "", name: string = "", email: string = "", attendence: string = "", date: string = "") {
        this.RegNo = Regno
        this.name = name
        this.email = email
        this.attendence = attendence
        this.date = date
    }
    
}