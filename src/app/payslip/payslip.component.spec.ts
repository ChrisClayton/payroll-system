/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PayslipComponent } from './payslip.component';

import { Employee } from '../shared/employee';
import { Payslip } from '../shared/payslip';

describe('PayslipComponent', () => {
  let component: PayslipComponent;
  let fixture: ComponentFixture<PayslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipComponent);
    component = fixture.componentInstance;

    let employee = new Employee(1, "John","Smith",60050,9);
    component.payslip = new Payslip(employee, '01 March – 31 March');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render title in a h2 tag', async(() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Payslip');
  }));
});
