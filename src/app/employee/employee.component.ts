import {
  Component,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent {
  submitted = false;

  constructor(public fb: FormBuilder, private cd: ChangeDetectorRef) {}

  /*##################### Registration Form #####################*/
  employeeForm = this.fb.group({
    id: ["", Validators.required],
    name: ["", Validators.required],
    salary: ["", Validators.required],
    department: ["", Validators.required],
  });

  // Getter method to access formcontrols
  get f() {
    return this.employeeForm.controls;
  }

  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      alert("Please fill all the required fields to create a super hero!");
      return false;
    } else {
      console.log(this.employeeForm.value);
    }
  }
}
