import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
/* tslint:disable:no-unused-variable */
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../auth.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [AuthService],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty", () => {
    expect(component.loginForm.valid).toBeTrue();
  });

  it("test a form group element count", () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector("#loginform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(2);
  });

  it("check initial form values for login form group", () => {
    const loginformGroup = component.loginForm;
    const loginFormValues = {
      username: "cristiano",
      password: "ronaldo",
    };
    expect(loginformGroup.value).toEqual(loginFormValues);
  });

  it("username field validity", () => {
    let errors = {};
    let username = component.loginForm.controls["username"];
    username.setValue("");
    expect(username.valid).toBeFalsy();

    // username field is required
    errors = username.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set username to something
    username.setValue("test");
    errors = username.errors || {};
    expect(errors["required"]).toBeFalsy();
    // expect(errors["pattern"]).toBeTruthy();

    // Set username to something correct
    username.setValue("test@example.com");
    errors = username.errors || {};
    expect(errors["required"]).toBeFalsy();
    // expect(errors["pattern"]).toBeFalsy();
  });

  it("password field validity", () => {
    let errors = {};
    let password = component.loginForm.controls["password"];
    password.setValue("");
    // Email field is required
    errors = password.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set email to something
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors["required"]).toBeFalsy();
    // expect(errors['minlength']).toBeFalsy();
  });

  it("submitting a form", () => {
    let username = component.loginForm.controls["username"];
    username.setValue("");
    let password = component.loginForm.controls["password"];
    password.setValue("");
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls["username"].setValue("cristiano");
    component.loginForm.controls["password"].setValue("ronaldo");
    expect(component.loginForm.valid).toBeTruthy();
    component.onSubmit();
  });
});
