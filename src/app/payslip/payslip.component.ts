import { Component, OnInit, Input } from '@angular/core';

import { Payslip } from '../shared/payslip';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html'
})
export class PayslipComponent implements OnInit {
  @Input() payslip: Payslip;

  constructor() { }

  ngOnInit() {
  }

}
