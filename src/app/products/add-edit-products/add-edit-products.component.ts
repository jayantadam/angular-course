
import { Component, OnInit,Output,EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;
  // @Input() message: string;
  @Output() informParent = new EventEmitter();

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      // imageURL: ["", Validators.required],
      imageURL: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      quantity: ["", Validators.required],
    });
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
    this.informParent.emit("product added");
    // this.router.navigate([`/products/list`]);
  }
}

