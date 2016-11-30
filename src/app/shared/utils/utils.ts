import {TaxBracket} from '../tax-bracket';
export class Utils {
  constructor() {  }

  /** Get the tax bracket **/
  getTaxInfo(salary) {
      var taxRates = [];

      // Save the tax rate in an array
      taxRates.push(new TaxBracket(0,      0,       0));
      taxRates.push(new TaxBracket(18200,  0.19,    0));
      taxRates.push(new TaxBracket(37000,  0.325,   3572));
      taxRates.push(new TaxBracket(80000,  0.37,    17547));
      taxRates.push(new TaxBracket(180000, 0.45,    54547));

      const lowestTaxRate = taxRates[0];

      return taxRates.reduce((previousValue, currentValue) => {
        let taxRateToUse = previousValue;
        if (salary > currentValue.bracket) {
          taxRateToUse = currentValue;
        }
        return taxRateToUse;
      }, lowestTaxRate);
  }

  /** Helper: Round the rawNmber **/
  round(rawNumber) {
      return Math.round(rawNumber)
  }
}
