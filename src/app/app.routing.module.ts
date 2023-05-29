import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './auth-guard.service';


const appRoutes: Routes = [
  {
    path: "employee",
    component: EmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.module").then((m) => m.ProductsModule),
      canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "products/list", pathMatch: "full" },
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
