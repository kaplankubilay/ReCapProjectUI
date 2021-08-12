import { Component, OnInit } from '@angular/core';
import { Brand } from '../models/brand';
import { Color } from '../models/color';
import { BrandService } from '../services/brand.service';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  colors:Color[]=[];
  brands:Brand[]=[];
  constructor(private colorService:ColorService,
    private brandService:BrandService) { }

  ngOnInit(): void {
  }

  getAllColorComponent(){
    this.colorService.getAllColors().subscribe(response=>{
      this.colors=response.data;
    });
  }

  getAllBrandComponent(){
    this.brandService.getAllBrands().subscribe(response=>{
      this.brands=response.data;
    });
  }

}
