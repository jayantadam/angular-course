import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Product } from "../../model/product";
import { ProductService } from "../product.service";

@Component({
  selector: "add-edit-products",
  templateUrl: "./add-edit-products.component.html",
  styleUrls: ["./add-edit-products.component.css"],
})
export class AddEditProductsComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;

  @Input() productID: number;
  @Output() informParent = new EventEmitter();

  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: ["title", Validators.required],
      description: ["description", Validators.required],
      imageURL: [
        "https://nd0g1j-4200.csb.app/products/new",
        [
          Validators.required,
          Validators.pattern(
            "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
          ),
        ],
      ],
      quantity: ["5", Validators.required],
      price: ["7", Validators.required],
    });
    console.log("this.productID", this.productID);
    this.getProductByID(this.productID);
  }
  getProductByID(productID: number) {
    this.productService.getProduct(productID).subscribe((data: Product) => {
      if (data) {
        console.log("data==>", data);
        // this.productForm.setValue({ data });
        this.productForm.patchValue({
        title: data?.title,
      description: data?.description,
      imageURL:data?.imageURL,
      quantity:data?.quantity,
      price: data?.price,
    });
      }
    })
  }
  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }

    this.productService
      .addProduct(this.productForm.value)
      .subscribe((data: Product[]) => {
        if (data) {
          this.informParent.emit({ status: "product added", products: data });
        }
      });
  }
}
