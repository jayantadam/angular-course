import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddEditProductsComponent } from "./add-edit-products.component";

xdescribe("AddEditProductsComponent", () => {
  let component: AddEditProductsComponent;
  let fixture: ComponentFixture<AddEditProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditProductsComponent],
    });
    fixture = TestBed.createComponent(AddEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
