import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });

  onSubmit(): void {
    console.log(this.checkoutForm.value.name);
    console.log(this.checkoutForm.value.address);
    window.alert("submit");
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {}
}
