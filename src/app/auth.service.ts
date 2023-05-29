import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private loggedInStatus = JSON.parse(
    localStorage.getItem("loggedIn") || "false"
  );
  private handleError(error: any) {
    console.error(error); //Created a function to handle and log errors, in case
    return throwError(error);
  }
  setLoginStatus(value) {
    this.loggedInStatus = value;
    localStorage.setItem("loggedIn", "true");
  }

  get LoginStatus() {
    return JSON.parse(
      localStorage.getItem("loggedIn") || this.loggedInStatus.toString()
    );
  }

  login(postData: any): Observable<any> {
    return this.http
      .post<any>("/api/login/", postData)
      .pipe(catchError(this.handleError));
  }
}
