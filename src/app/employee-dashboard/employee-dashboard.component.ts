import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeDetail } from '../employee-detail';
import { EmployeeDetailsService } from '../employee-details.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit 
{
  displayedColumns: string[] = ['emp_id', 'emp_name', 'emp_email', 'emp_mobile', 'emp_act_date', 'emp_dob', 'emp_task_id', 'emp_task_start_date', 'emp_task_end_date','actions'];
  dataSource = new MatTableDataSource<EmployeeDetail>();
  EmployeeDetail:EmployeeDetail[] = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  sort: any;
  Today:Date[]=[];
  constructor(private EmployeeDetailService : EmployeeDetailsService,
    public dialog:MatDialog
    )
  {

  }

ngOnInit() 
{
  this.EmployeeDetailService.getAllEmployees().subscribe(
    (response: EmployeeDetail[]) => {
      this.dataSource.data = response; // Assign data to MatTableDataSource
      console.log(this.dataSource.data);
    },
    (error) => {
      console.error('Error Fetching projects:', error);
    }
  );
  }

  openDeleteModal(id: number) {
      const dialogRef = this.dialog.open(DeleteEmployeeComponent,{
        width: '250px',
        data: {id},
      });
      dialogRef.afterClosed().subscribe((result) =>{
        if(result) {
          this.EmployeeDetail = this.EmployeeDetail.filter(
            (_) => _.id !==id
          );
        }
      });
  }
  searchFilter(event: Event): void {
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}



