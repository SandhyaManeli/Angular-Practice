import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EmployeeDetail } from './employee-detail';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  nameSearch(searchTerm$: MatTableDataSource<string>) {
    throw new Error('Method not implemented.');
  }
  delete(id: any) {
    throw new Error('Method not implemented.');
  }

  //private baseUrl = 'http://54.163.252.149:8080/api/countries';
  //private headers = new HttpHeaders().set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vNTQuMTYzLjI1Mi4xNDk6ODA4MC9hcGkvbG9naW4iLCJpYXQiOjE3MDA2MzQwNjgsImV4cCI6MTcwMDYzNzY2OCwibmJmIjoxNzAwNjM0MDY4LCJqdGkiOiJBM0E2U0prdFNtZFdpaDAwIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwidXNlciI6eyJpZCI6MSwiY2xpZW50X2lkIjoxLCJ1c2VybmFtZSI6ImJiYWRtaW4iLCJlbWFpbCI6InNoaXZhLmthcnVuYWthckBwZW9wbGV0ZWNoLmNvbSIsImFjdGl2YXRlZCI6MSwiY3JlYXRlZF9hdCI6IjIwMTgtMDktMTIgMTM6Mjg6MjEiLCJ1cGRhdGVkX2F0IjoiMjAyMS0wNS0yMiAwNjo1ODo0NCJ9LCJ1c2VyTW9uZ28iOnsiaWQiOiI1Yjk5MTQ3NTRkYjIwIiwidXNlcl9pZCI6MSwiZmlyc3RfbmFtZSI6Ik1yaWR1bCIsImxhc3RfbmFtZSI6Ikthc2h5YXAiLCJlbWFpbCI6Im1yaWR1bGthc2h5YXA1N0BnbWFpbC5jb20iLCJwaG9uZSI6Ijk1NTAwOTQyMTMiLCJjb21wYW55X25hbWUiOiJBdmVydGlzaW5nIE1hcmtldHBsYWNlIiwiY29tcGFueV90eXBlIjoiYmJpIiwiY2xpZW50X21vbmdvX2lkIjoiNWI5OTE0NzUzYWJlMSIsInBhc3N3b3JkX3Jlc2V0X3JlcXVlc3RfY291bnQiOjMsInN0YXR1cyI6MTAsImFkZHJlc3MiOiJQbG90IG5vIDM0LCB3YXJuIG5vIDgsIGJsb3ZrIG5vIDcgb2YgTVIgRW5jbGF2ZXMsIGR3YXJha2EgdGlydW1hbG5hZ2FyLCBraGFybWFuZ2hhdCwgc2Fyb29ybmFnYXIsaHlkZXJhYmFkIiwiY2l0eSI6IlNhcm9vcm5hZ2EiLCJuYW1lIjoiTXJpZHVsIEthc2h5YXAiLCJzdHJlZXQiOiJ0ZXN0Iiwid2Vic2l0ZSI6Imh0dHA6Ly93d3cuZ29vZ2xlLmNvbSIsInppcGNvZGUiOiI1MDAwNzkiLCJ1c2VyX3R5cGUiOiJiYmkiLCJjbGllbnRfc2x1ZyI6ImJiaSJ9fQ.yOCaU1N5tpzYJt_5I2Bm8g8HUEAFNae7kodsKtuUNrc')
  private apiUrl = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) 
  {

  }

  getAllEmployees() : Observable<EmployeeDetail[]>
  {
    //return this.http.get<EmployeeDetail[]>(this.baseUrl, { headers: this.headers });
    return this.http.get<EmployeeDetail[]>('http://localhost:3000/employees');
  }
  createEmployee(payload:EmployeeDetail){
    return this.http.post<EmployeeDetail>('http://localhost:3000/employees', payload);

  }
  getById(id: number): Observable<EmployeeDetail> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<EmployeeDetail>(url);
  }

  updateEmployee(payload: EmployeeDetail): Observable<EmployeeDetail> {
    return this.http.put<EmployeeDetail>(`http://localhost:3000/employees/${payload.id}`, payload);
  }

  deleteEmployee(id: number): Observable<EmployeeDetail> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<EmployeeDetail>(url);
  }

}

