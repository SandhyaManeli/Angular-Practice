import { Component, OnInit,  ViewChild} from '@angular/core';
import { EmployeeDetail } from '../employee-detail';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  @ViewChild('picker') picker!: MatDatepicker<Date>;
  Today:Date[]=[];
  employeeForm: EmployeeDetail = {
    id : 0,
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>{
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number){
    this.EmployeeDetailService.getById(id).subscribe((data: EmployeeDetail) => {
    this.employeeForm = data;
    console.log(data); 
    },
    (error) => {
      console.error('Error Fetching employee data', error);
    }
    );
  }

  updateEmployee() {
    this.EmployeeDetailService.updateEmployee(this.employeeForm).subscribe(() =>{
    this.router.navigate(['/']);
    });
  }
}
