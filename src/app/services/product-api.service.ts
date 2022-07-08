import { Injectable } from '@angular/core';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
apiUrl:string;

  constructor() {
    this.apiUrl="http://localhost:3000/products";
   }

// CRUD - Methoden für Shopping List

//READ ALL PRODUCT - GET
async getProducts(): Promise<Product[]> {
  const response = await fetch(this.apiUrl);
  const data = await response.json();
  return data;
}

//READ ONE PRODUCT - GET
async getProduct(id:number):Promise <Product>{
  const response = await fetch(`${this.apiUrl}/${id}`);
  const data = await response.json();
  return data;
}

//CREATE - POST
async createProduct(product:Product):Promise<Product>{
  const response = await fetch(this.apiUrl, {
    method: "POST",
    headers: { //teil von HTTP
      "Content-Type": "application/json",
    },
    body:JSON.stringify(product)
  });
  const data = await response.json();
  return data;
}

//UPDATE - PUT
async updateProduct(product:Product): Promise<void>{
const response=await fetch(`${this.apiUrl}/${product.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body:JSON.stringify(product)
});
}

//DELETE
async deleteProduct(id:number):Promise<void>{
  const response = await fetch(`${this.apiUrl}/${id}`, {
    method: "DELETE",
  });
  
}
}
