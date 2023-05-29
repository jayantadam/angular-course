import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { Product } from "../model/product";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {} //Injecting HTTP service to communicate with the data

  private handleError(error: any) {
    console.error(error); //Created a function to handle and log errors, in case
    return throwError(error);
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("/api/products").pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }
  getProduct(id: number): Observable<any> {
    return this.http
      .get<any>("/api/products/" + id)
      .pipe(catchError(this.handleError));
  }

  addProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>("api/products", product).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http
      .delete<any>("/api/products/" + id)
      .pipe(catchError(this.handleError));
  }

  updateProduct(productID:number,product: Product): Observable<any> {
    return this.http.put<any>("/api/products/"+productID, product).pipe(
      map(() => product),
      catchError(this.handleError)
    );
  }
}
