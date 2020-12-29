import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee.model';
import { CreateComponent } from './../create/create.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers:[EmployeeService]
})
export class ViewComponent implements OnInit {

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

onSubmit(form: NgForm) {
  if (form.value._id == "") {
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

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  onEdit(emp : Employee) {
    this.employeeService.selectedEmployee = emp;
  }
  
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        
      });
    }
  }


}
