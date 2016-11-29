export class Employee {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public annualSalary: number,
    public superRate?: number
  ) {  }
}
