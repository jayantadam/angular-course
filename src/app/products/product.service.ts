import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  apiurl = "https://jsonplaceholder.typicode.com/posts"; // Our created Data can be accessed here at api/users
  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {} //Injecting HTTP service to communicate with the data

  private handleError(error: any) {
    console.error(error); //Created a function to handle and log errors, in case
    return throwError(error);
  }
  getProducts(): Observable<[]> {
    return this.http.get<[]>(this.apiurl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }
  getProduct(id: number): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  addProduct(user: any): Observable<any> {
    user.id = null;
    return this.http.post<any>(this.apiurl, user, this.httpOptions).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.http
      .delete<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateProduct(user: any): Observable<any> {
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<any>(this.apiurl, user, this.httpOptions).pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }
}
