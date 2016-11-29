import { Component } from '@angular/core';
import { Employee } from './shared/employee';
import { Payslip } from './shared/payslip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  employee: Employee;
  payslip: Payslip;

  constructor() {
      this.employee = new Employee(1, "John","Smith",60050,9);
      this.payslip = new Payslip(this.employee, '01 March – 31 March');

      console.log(this.payslip);
  }
}
