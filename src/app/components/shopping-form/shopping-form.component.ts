import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/models/Product';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit {
  @Output() onItemSave = new EventEmitter<Product>(); //For individual actions I used EventEmitter, because emits an event containing a given value. 
  @Input() product:string="";
  @Input() amount:number=0;
  @Input() unit:string="";
  @Input() note:string="";

  constructor() { }

  ngOnInit(): void {
  }
  
resetForm(){ //After adding the item, the form content is deleted so that a new one can be added.
  this.product="";
  this.unit="";
  this.note="";
  this.amount=0;
  
  }
  
  handleSave(){
  const product = new Product(this.product, this.amount, this.unit, this.note);
  this.onItemSave.emit(product);
  this.resetForm();
  
  }

}
