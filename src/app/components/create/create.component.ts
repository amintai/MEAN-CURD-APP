import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee.model';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [EmployeeService]
})
export class CreateComponent implements OnInit {

  constructor(public employeeService : EmployeeService) { }

  
  ngOnInit(): void {
    this.resetForm();
    this.refreshEmployeeList();
 }

  resetForm(form?: NgForm){
    if(form) {
      form.reset();
      this.employeeService.selectedEmployee = {
        _id : "",
        FirstName : "",
        LastName : "",
        Email : "",
        Dob : "",
        Bio : ""
      }
    }
  }
  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  onSubmit(form : NgForm){

    if(form.value._id == ""){
      this.employeeService.postEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshEmployeeList();

    });
  }

    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshEmployeeList();
      
    });
  }
}


  showToasterSuccess() {
      this.employeeService.showSuccess("Data Saved Succesfully!", "Success!")
  }

}
