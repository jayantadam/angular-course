import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";
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
  products = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.href = this.router.url;
    if (this.router.url.includes("new")) {
      this.isProductForm = true;
    }
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      if (data?.length > 0) {
        this.products = data?.slice(-5);
        console.log("this.products", this.products.slice(0, 5));
      }
    });
  }
  addButtonClicked() {
    this.router.navigate([`/products/new`]);
  }
  parentWillTakeAction(message: any) {
    if (message == "product added") {
      this.router.navigate([`/products/list`]);
    }
    console.log("message===>", message);
    // this.messageFromChild = message;
  }
}
