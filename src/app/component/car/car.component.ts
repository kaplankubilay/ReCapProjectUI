import { ReturnStatement } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { CarService } from '../services/car.service';
import { CarImageService } from '../services/carImage.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';
import { ColorService } from '../services/color.service';
import { Color } from '../models/color';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carDetails: CarDetail[] = [];
  carDetailResults:CarDetail[]=[];

  brands: Brand[] = [];
  colors: Color[] = [];

  _selectedBrand: Brand;
  _selectedColor: Color;
  // _currentBrand: Brand;
  //  get currentBrand(): Brand {
  //    debugger;
  //    return this._currentBrand;
  //  }
  // set currentBrand(val: Brand) {
  //    debugger;
  //    this._currentBrand = val;
  //  }

  isLoaded: boolean = false;

  filterText = '';

  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService:ColorService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllBrandComponent();
    this.getAllColorComponent();

    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandIdMetod(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorIdMetod(params['colorId']);
      }
      else {
        this.getCarDetailMetod();
      }
    });
  }

  getCarDetailMetod() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetailResults = response.data;
      this.isLoaded = true;
      this.toastrService.info('Arabalar listelendi.');
    });
  }

  getCarsByBrandIdMetod(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.carDetails = response.data;
      this.isLoaded = true;
    });
  }

  getCarsByColorIdMetod(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.carDetails = response.data;
      this.isLoaded = true;
    });
  }

  getAllBrandComponent() {
    this.brandService.getAllBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }  

  getAllColorComponent(){
    this.colorService.getAllColors().subscribe(response=>{
      this.colors = response.data;
    });
  }

  getCarFiltered(_selectedBrand,_selectedColor){
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetailResults = response.data.filter(x=>x.brandId==_selectedBrand.id && x.colorId==_selectedColor.id);
      this.isLoaded = true;
      this.toastrService.info('Arabalar listelendi.');
    });    
  }
}
