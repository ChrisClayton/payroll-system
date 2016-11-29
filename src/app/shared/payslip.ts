import { Employee } from './employee';

export class Payslip {
  constructor(
    public employee: Employee,
    public payPeriod: string,
    public payFrequency?: string,
    public grossIncome?: number,
    public incomeTax?: number,
    public netIncome?: number,
    public superAmt?: number,
    public pay?: number
  ) {
      this.init();
  }

  init() {
      this.payFrequency = this.generateFrequency();
      this.grossIncome = this.calculateGrossIncome();
      this.incomeTax = this.calculateIncomeTax();
      this.netIncome = this.calculateNetIncome();
      this.superAmt = this.calculateSuper();

      this.pay = this.calculatePay();
  }

  // todo: Generate pay frequency from pay period.
  generateFrequency() {
      // todo [.1]: check length of payPeriod
      //if (payPeriod === 1 month) {}
      return "Monthly"
      // }
      // todo [.2]: Weekly frequency?
      // todo [.3]: else return "CASUAL" ??
  }

  calculateGrossIncome() {
      return Math.round((this.employee.annualSalary / 12));
  }

  calculateIncomeTax() {
      let annualSalary = this.employee.annualSalary;
      let tax = null;

      switch(true) {
          case (annualSalary > 0 && annualSalary < 18200):
              tax = 0;
              break;
          case (annualSalary > 18201 && annualSalary < 3700):
              tax = ((annualSalary - 18200) * 0.19)/12;
              break;
           case(annualSalary > 37001 && annualSalary < 80000):
               tax = (3572 + (annualSalary - 37000) * 0.325) / 12;
               break;
           case(annualSalary > 80001 && annualSalary < 180000):
               tax = (17547 + (annualSalary - 80000) * 0.37) / 12;
               break;
            case(annualSalary > 180000):
                tax = (54547 + (annualSalary - 180000) * 0.45) / 12;
                break;
          default:
                console.log("ERROR");
                tax = null;
      }

      return Math.round(tax);
  }

  calculateNetIncome() {
      return Math.round(this.grossIncome-this.incomeTax);
  }
  calculateSuper() {
      return Math.round(this.grossIncome * (this.employee.superRate / 100));
  }
  calculatePay() {
      return Math.round(this.netIncome - this.superAmt);
  }
}
