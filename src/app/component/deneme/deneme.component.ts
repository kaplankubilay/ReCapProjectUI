import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {

  product1:any={id:1,name:"Saz",category:"Eğlence"};
  product2:any={id:2,name:"Top",category:"Oyuncak"};
  product3:any={id:3,name:"Bebek",category:"Oyun"};

  products:any=[this.product1,this.product2,this.product3];

  constructor() { }

  ngOnInit(): void {
  }

}
