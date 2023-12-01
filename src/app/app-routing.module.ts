import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  { path: "dashboard",component:DashboardComponent },
  { path: "about", component:AboutComponent },
  { path: "projects", component:ProjectsComponent },
  { path: "employee-dashboard", component:EmployeeDashboardComponent },
  { path: "view-employee", component: ViewEmployeeComponent },
  { path: "edit-employee/:id", component: EditEmployeeComponent },
  { path: "add-employee", component:  AddEmployeeComponent},
  { path: "", redirectTo:"employee-dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
