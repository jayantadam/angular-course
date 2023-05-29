import { Component, OnInit, Output, EventEmitter, Input,ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import { Product } from "../../model/product";
import { ProductService } from "../product.service";

@Component({
  selector: "add-edit-products",
  templateUrl: "./add-edit-products.component.html",
  styleUrls: ["./add-edit-products.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AddEditProductsComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;
  productID: number;
  @Output() informParent = new EventEmitter();

  constructor(
    private productService: ProductService,
      private activatedroute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    
    this.activatedroute.params.subscribe((event) => {
      if(event.id)
   {
       this.productID=event.id;
       this.getProductByID(event.id);
   }
    });
    
    this.productForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      imageURL: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
          ),
        ],
      ],
      quantity: ["", Validators.required],
      price: [""],
    });
 
  }
  getProductByID(productID: number) {
    this.productService.getProduct(productID).subscribe((data: Product) => {
      if (data) {
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
if(this.productID){
   this.productService
      .updateProduct(this.productID,this.productForm.value)
      .subscribe((data: Product[]) => {
        if (data) {
          this.informParent.emit({ status: "product added", products: data });
        }
      });
  }

else{
  this.productForm.get("price").setValue(499);
   this.productService
      .addProduct(this.productForm.value)
      .subscribe((data: Product[]) => {
        if (data) {
          this.informParent.emit({ status: "product added", products: data });
        }
      });
  }
}
   
    ngOnDestroy() {
      this.productID=null;
    }

}
