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
  registrationForm = this.fb.group({
    id: [""],
    name: [""],
    salary: [""],
    department: [""],
  });

  // Getter method to access formcontrols
  get myForm() {
    return this.registrationForm.controls;
  }

  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      alert("Please fill all the required fields to create a super hero!");
      return false;
    } else {
      console.log(this.registrationForm.value);
    }
  }
}
