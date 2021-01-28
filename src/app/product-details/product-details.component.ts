import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    console.log(routeParam);
    const productIdFromRoute = Number(routeParam.get("productId"));
    console.log(productIdFromRoute.toString());

    this.product = products.find(product => product.id === productIdFromRoute);
    console.log(this.product);
  }
}
