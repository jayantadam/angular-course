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
    this.productService.getProducts().subscribe((data: any) => {
      if (data?.length > 0) {
        this.products = data;
      }
    });
  }
  addButtonClicked() {
    this.router.navigate([`/products/new`]);
  }
  editButtonClicked(id: number) {
   this.router.navigate([`/products/edit/` + id]);
  }
  parentWillTakeAction(response: any) {
    if (response?.status == "product added") {
      this.products = response?.products;
      this.router.navigate(["/products/list"]);
    }
  }
}
