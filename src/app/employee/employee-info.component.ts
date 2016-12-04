import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup }        from '@angular/forms';

import { Employee } from '../shared/employee';
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html'
})
export class EmployeeInfoComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onSubmit =  new EventEmitter<Employee>();
  form: FormGroup;
  
  constructor(fb: FormBuilder) {
     this.form = fb.group({
        // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
        'firstName' : '',
        'lastName': '',
        'annualSalary': 0,
        'superannuation': 0
     });
   }

  ngOnInit() {
  }

  formOnSubmit(value: any):void {
      console.log(value);
      this.onSubmit.emit(value);
      this.employee = value;
  }

}
