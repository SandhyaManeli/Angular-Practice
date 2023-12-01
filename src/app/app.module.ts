import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule  } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatIconModule } from '@angular/material/icon';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginator
 ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
