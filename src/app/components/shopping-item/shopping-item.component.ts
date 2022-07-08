import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/models/Product';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
@Input() product!:Product;
@Output()onItemDelete= new EventEmitter<number>();
@Output()onItemUpdate = new EventEmitter<Product>();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
deleteAsking(){
  const asking = window.confirm(`Are you sure? Do you want to remove this: ${this.product.product}`);
  if(asking){
  this.emitDeleteEvent();
  }
}
  emitDeleteEvent(){ //Emitter for deletion. Deletion is based on the item ID number.
 this.onItemDelete.emit(this.product.id);
 
  }
  
  toggleDone(){
  this.product.done = !this.product.done;
  this.onItemUpdate.emit(this.product);
  }
  navigateToDetail(){
    this.router.navigate(['products', this.product.id]);
    }
  }

