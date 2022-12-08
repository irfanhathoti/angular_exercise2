export class StudentDetails {
    RegNo: string;
    firstName: string;
    lastName: string;
    age: number;
    batch: number;
    fee: number;
    email:string
    attendence:string;
    name:string;
    date:string
    constructor(RegNo: string = "", firstName: string = "", lastName: string = "", age: number = 0, batch: number = 0, fee: number = 0,attendence:string ="",email:string ="",name:string = "",date:string ="") {
        this.RegNo = RegNo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.batch = batch;
        this.fee = fee,
        this.attendence = attendence,
        this.email = email,
        this.name=name,
        this.date = date
    }
    fullName(): string {
        return this.firstName + "" + this.lastName
    }

}