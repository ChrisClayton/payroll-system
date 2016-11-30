/* tslint:disable:no-unused-variable */
import {Utils} from './utils';

describe('Utils:TaxInfo', () => {
  let utils: Utils = new Utils();

  it('should be {bracket: 0, rate:0, flatTax: 0}', () => {
    let result = utils.getTaxInfo(5000);
    expect(result.bracket).toBe(0);
    expect(result.rate).toBe(0);
    expect(result.flatTax).toBe(0);
  });

  it('should be {bracket: 37000, rate:0.325, flatTax:3572}', () => {
    let salary = 60050;
    let result = utils.getTaxInfo(salary);
    expect(result.bracket).toBe(37000);
    expect(result.rate).toBe(0.325);
    expect(result.flatTax).toBe(3572);

    // expect(((result.flatTax + (salary - result.bracket) * result.rate) / 12)).toBe(921.9375);
    // expect(utils.round(((result.flatTax + (salary - result.bracket) * result.rate) / 12))).toBe(922);
  });
});

describe('Utils:Round', () => {
  let utils = new Utils();

  it('should be 0.1 rounded down to 0', () => {
    expect(utils.round(0.1)).toBe(0);
  });
  it('should be 99.99 rounded up to 100', () => {
    expect(utils.round(99.99)).toBe(100);
  });
  it('should be 99.5 rounded up to 100', () => {
    expect(utils.round(99.5)).toBe(100);
  });
  it('should be 5,004.16666667 rounded down to 5004', () => {
    expect(utils.round(5004.16666667)).toBe(5004);
  });
});
