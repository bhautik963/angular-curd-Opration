export class stud{
  id:number;
  Enrollmentno: string;
  Name : string;
  age : number;
  Bod : any;
  dept:string;
  branch:string;
  result:number;
  fees:number;

  constructor(Enrollmentno: string,Name : string,age : number,Bod : any,dept:string,branch:string,result:number,fees:number){
            this.Enrollmentno = Enrollmentno;
            this.Name = Name;
            this.age = age;
            this.Bod = Bod;
            this.branch = branch;
            this.dept = dept;
            this.fees = fees;
            this.result = result;
  }

}