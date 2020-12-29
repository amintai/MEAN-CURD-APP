import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee : Employee;
  employees : Employee[];

  readonly baseURL = 'http://localhost:3000/employees';

  constructor(
    private http : HttpClient,
    private toastr : ToastrService
    ) { }

  postEmployee(emp : Employee) {
      return this.http.post(this.baseURL , emp);
  }

    
   
  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp : Employee) {
    return this.http.put(this.baseURL + `/${emp._id}` , emp);
  }

  showSuccess(message, title){
    this.toastr.success(message, title)
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
