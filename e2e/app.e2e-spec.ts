import { PayrollSystemPage } from './app.po';

describe('payroll-system App', function() {
  let page: PayrollSystemPage;

  beforeEach(() => {
    page = new PayrollSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
