import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    private EmployeeDetailService : EmployeeDetailsService
  ) { }

  ngOnInit() {}

  confirmDelete(){
      this.EmployeeDetailService.deleteEmployee(this.data.id).subscribe(() =>{
      this.dialogRef.close(this.data.id);
      }, (error: any) => {
        console.error('Error Deleting Employee', error);
      });
    }

}
