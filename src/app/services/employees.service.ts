import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../models/employee.model';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((res: any) => res.data));
  }

  getOne(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<EmployeeModel>('https://dummy.restapiexample.com/api/v1/employee/'+id).pipe(
      map((res: any) => res.data));
  }
}
