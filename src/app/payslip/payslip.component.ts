import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  @Input() payslip: any;
  public employee: any;

  constructor() { }

  ngOnInit() {
      this.employee = this.payslip.employee;
  }

}
