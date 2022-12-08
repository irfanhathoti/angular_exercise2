export class EmployeeData {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    date: Date;
    salary: number;


    constructor(id: string = "", firstName: string = "", lastName: string = "", designation: string = "", date: Date = new Date(), salary: number) {

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.date = date
        this.salary = salary



    }

    fullName(): string {
        return this.firstName + ' ' + this.lastName;

    }


}