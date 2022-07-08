import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/Product';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
products:Product[]=[];
  constructor(private productService:ProductApiService) { }

  async ngOnInit():Promise <void> {
  this.products = await this.productService.getProducts();
  console.log(this.products);
  }
  async removeProduct(id:number){ //The deletion is done by ID number, using the filter keyword, which deletes the item with the given ID number from the Array.
    await this.productService.deleteProduct(id);
    this.products=this.products.filter(p=>p.id!==id);
    
    
    }
    async addProduct(product:Product){ // POST from service
    //After switching to the API service, a new item is added to the Arra with the push keyword.
     const newProduct = await this.productService.createProduct(product);
     this.products.push(newProduct);
    
    }
    async updateItem(product:Product){ //PUT from service
      await this.productService.updateProduct(product);
      
    
    }
   
}
