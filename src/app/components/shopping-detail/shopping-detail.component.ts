import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/models/Product';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class ShoppingDetailComponent implements OnInit {
  paramId!: number;
  product: Product = new Product("",0,"");
  constructor(private activatedRoute: ActivatedRoute, private shoppingService: ProductApiService, private router:Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.paramId = params['id'];
      this.product = await this.shoppingService.getProduct(this.paramId);
      });}
      async saveItem(product: Product) {
        await this.shoppingService.updateProduct({ ...product, id: this.product.id, done: this.product.done });
        this.router.navigate(['/']);
  }

}
