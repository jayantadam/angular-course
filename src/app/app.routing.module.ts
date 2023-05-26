import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { LoginComponent } from "./login/login.component";

// import { AuthGuard }                          from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: "employee",
    component: EmployeeComponent,
  },
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.module").then((m) => m.ProductsModule),
    // canLoad: [AuthGuard]
  },
  { path: "", redirectTo: "/", pathMatch: "full" },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
