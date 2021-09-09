import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private brandService:BrandService,
    private toastrService:ToastrService) { }
  brands:Brand[]=[];
  isLoaded:boolean=false;

  ngOnInit(): void {
    this.getAllBrandComponent();
  }

  getAllBrandComponent(){
    this.brandService.getAllBrands().subscribe(response=>{
      this.brands=response.data;
      this.isLoaded=true;      
      this.toastrService.info("Markalar listelendi.")
    });
  }

}
