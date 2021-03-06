import { Component, OnInit, Input } from '@angular/core';

import { Payslip } from '../shared/payslip';
import { Employee } from '../shared/employee';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html'
})
export class PayslipComponent implements OnInit {
  @Input() payslip: Payslip;
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
