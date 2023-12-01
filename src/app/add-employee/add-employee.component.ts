import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDetail } from '../employee-detail';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('picker') picker!: MatDatepicker<Date>;
  EmployeeDetail! : FormGroup;
  submitted = false;
  employeeForm: EmployeeDetail = {
    id: 0,
    emp_name: '',
    emp_id: '',
    emp_mobile: '',
    emp_email: '',
    emp_act_date: '',
    emp_dob: '',
    emp_task_id: '',
    emp_task_start_date: '',
    emp_task_end_date: ''
  };
  constructor(
    private EmployeeDetailService : EmployeeDetailsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

ngOnInit() 
{
  this.EmployeeDetail = this.formBuilder.group({
    emp_name: ['', Validators.required],   
    emp_id: ['', Validators.required], 
    emp_mobile: ['', Validators.required], 
    emp_email: ['', Validators.required], 
    emp_act_date: ['', Validators.required], 
    emp_dob: ['', Validators.required], 
    emp_task_id: ['', Validators.required], 
    emp_task_start_date: ['', Validators.required], 
    emp_task_end_date: ['', Validators.required], 
  });
}

get f() {
  return this.EmployeeDetail.controls;
}
onSubmit() {
  this.submitted = true;
  if(this.EmployeeDetail.invalid) {
    return;
  }
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.EmployeeDetail.value, null, 4));  //If you want to display form data in alert box
 // alert('Employee Added Successfully!');
  // setTimeout(() => {
  //   this.submitted=false;
  // },3000);
  const snackBarRef = this.snackBar.open('Employee Added Successfully!', 'Close',{
    duration:3000,
  });
  snackBarRef.onAction().subscribe(() => {
  snackBarRef.dismiss();
  });
}
OnReset() {
  this.submitted = false;
  this.EmployeeDetail.reset();
}
  createEmployee(){
    this.submitted = true;
    if(this.EmployeeDetail.invalid) {
      return;
    }
    const formValue = this.EmployeeDetail.value;
    this.EmployeeDetailService.createEmployee(formValue).subscribe(() => {
    this.router.navigate(['/']);
      console.log(formValue);
    });
  }
}
