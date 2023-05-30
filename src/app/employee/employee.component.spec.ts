import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EmployeeComponent } from "./employee.component";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe("EmployeeComponent", () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
    });
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("test a form group element count", () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector("#employeeForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(4);
  });

  it("id field validity", () => {
    let errors = {};
    let id = component.employeeForm.controls["id"];
    expect(id.valid).toBeFalsy();

    // id field is required
    errors = id.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set id to something
    id.setValue("12");
    errors = id.errors || {};
    expect(errors["required"]).toBeFalsy();
    // expect(errors["pattern"]).toBeTruthy();
  });

  it("name field validity", () => {
    let errors = {};
    let name = component.employeeForm.controls["name"];
    name.setValue("");
    expect(name.valid).toBeFalsy();

    // name field is required
    errors = name.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set name to something
    name.setValue("test");
    errors = name.errors || {};
    expect(errors["required"]).toBeFalsy();
    // expect(errors["pattern"]).toBeTruthy();
  });

  it("salary field validity", () => {
    let errors = {};
    let salary = component.employeeForm.controls["salary"];
    salary.setValue("");
    expect(salary.valid).toBeFalsy();

    // salary field is required
    errors = salary.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set salary to something
    salary.setValue("test");
    errors = salary.errors || {};
    expect(errors["required"]).toBeFalsy();
    // expect(errors["pattern"]).toBeTruthy();
  });

  it("department field validity", () => {
    let errors = {};
    let department = component.employeeForm.controls["department"];
    department.setValue("");
    expect(department.valid).toBeFalsy();

    // department field is required
    errors = department.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set department to something
    department.setValue("test");
    errors = department.errors || {};
    expect(errors["required"]).toBeFalsy();
    // expect(errors["pattern"]).toBeTruthy();
  });

  it("submitting a form", () => {
    component.employeeForm.patchValue({
      id: "1",
      name: "testing",
      salary: "70,000",
      department: "IT",
    });
    expect(component.employeeForm.valid).toBeTruthy();

    fixture.detectChanges();
    let submitEL: DebugElement = fixture.debugElement.query(By.css("button"));
    expect(submitEL.nativeElement.disabled).toBe(false);

    let idColumn =
      fixture.debugElement.nativeElement.querySelector("#idColumn");
    expect(idColumn).toBeTruthy();
    expect(idColumn.innerHTML).toBe(component.employeeForm.get("id").value);

    let nameColumn =
      fixture.debugElement.nativeElement.querySelector("#nameColumn");
    expect(nameColumn).toBeTruthy();
    expect(nameColumn.innerHTML).toBe(component.employeeForm.get("name").value);

    let salaryColumn =
      fixture.debugElement.nativeElement.querySelector("#salaryColumn");
    expect(salaryColumn).toBeTruthy();
    expect(salaryColumn.innerHTML).toBe(
      component.employeeForm.get("salary").value
    );

    let departmentColumn =
      fixture.debugElement.nativeElement.querySelector("#departmentColumn");
    expect(departmentColumn).toBeTruthy();
    expect(departmentColumn.innerHTML).toBe(
      component.employeeForm.get("department").value
    );
  });

  it("submit button onclick", () => {
    component.employeeForm.patchValue({
      id: "",
      name: "",
      salary: "",
      department: "",
    });
    fixture.detectChanges();
    component.onSubmit();
    expect(component.submitted).toBe(true);
    component.employeeForm.patchValue({
      id: "",
      name: "",
      salary: "",
      department: "",
    });
    fixture.detectChanges();
    expect(component.employeeForm.valid).toBeFalsy();

    component.employeeForm.patchValue({
      id: "1",
      name: "testing",
      salary: "70,000",
      department: "IT",
    });
    expect(component.employeeForm.valid).toBeTruthy();

    fixture.detectChanges();
  });
});
