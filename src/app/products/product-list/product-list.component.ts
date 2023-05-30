import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "../../model/product";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isProductForm: boolean = false;
  href: string = "";
  products: Product[];
  loggedInUserName: string;
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.href = this.router.url;
    if (this.router.url.includes("new") || this.router.url.includes("edit")) {
      this.isProductForm = true;
    }
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data: any) => {
        if (data?.length > 0) {
          this.products = data;
        }
      },
      (error) => {
        console.log("error===>", error);
      }
    );
  }
  addButtonClicked() {
    this.router.navigate([`/products/new`]);
  }
  editButtonClicked(id: number) {
    this.router.navigate([`/products/edit/` + id]);
  }
  parentWillTakeAction(response: any) {
    if (response?.status == "product added/updated") {
      this.router.navigate(["/products/list"]);
    }
  }
  clickMethod(product: Product) {
    if (confirm("Are you sure to delete " + product.title)) {
      this.productService.deleteProduct(product.id).subscribe(
        (data: any) => {
          this.getProducts();
        },
        (error) => {
          console.log("error===>", error);
        }
      );
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }
}
