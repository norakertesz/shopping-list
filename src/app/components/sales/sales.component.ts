import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  myImage:any="./BillaPlus.png";
  constructor() { }

  ngOnInit(): void {
  }

}
