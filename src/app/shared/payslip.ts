import { Employee } from './employee';

import { Utils } from './utils/utils';

export class Payslip {
  utils: Utils = new Utils();

  constructor(
    public employee: Employee,
    public payPeriod: string,
    public payFrequency?: string,
    public grossIncome?: number,
    public incomeTax?: number,
    public netIncome?: number,
    public superannuation?: number,
    public pay?: number
  ) {
      this.init();
  }

  init() {
    this.payFrequency = this.generateFrequency();
    this.grossIncome = this.calculateGrossIncome();
    this.incomeTax = this.calculateIncomeTax();
    this.netIncome = this.calculateNetIncome();
    this.superannuation = this.calculateSuper();

    this.pay = this.calculatePay();
  }

  // todo: Generate pay frequency from pay period.
  generateFrequency() {
      // todo [.1]: check length of payPeriod
      //if (payPeriod === 1 month) {}
      return "Monthly"
  }

  calculateGrossIncome() {
      return this.utils.round((this.employee.annualSalary / 12));
  }

  getYearlyTax(salary, taxBracket, taxRate, flatTax) {
    var taxableIncome = (salary - taxBracket);
    var taxForBracket = taxableIncome * taxRate;
    return flatTax + taxForBracket;
  }
  
  calculateIncomeTax() {
      let annualSalary = this.employee.annualSalary;

      var taxInfo = this.utils.getTaxInfo(annualSalary);
      return this.utils.round(this.getYearlyTax(annualSalary, taxInfo.bracket, taxInfo.rate, taxInfo.flatTax) / 12);
  }

  calculateNetIncome() {
      return this.utils.round(this.grossIncome - this.incomeTax);
  }
  calculateSuper() {
      return this.utils.round(this.grossIncome * (this.employee.superRate / 100));
  }
  calculatePay() {
      return this.utils.round(this.netIncome - this.superannuation);
  }
}
