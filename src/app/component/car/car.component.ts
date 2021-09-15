import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carDetails: CarDetail[] = [];

  brands: Brand[] = [];

  currentBrand: Brand;
  // get currentBrand(): Brand {
  //   return this._currentBrand;
  // }

  // set currentBrand(val: Brand) {
  //   debugger;
  //   this._currentBrand = val;
  // }

  filterBrandId: number;

  isLoaded: boolean = false;

  filterText = '';

  // carImages:CarImage[];

  // carImage:CarImage;

  // basePath ="https://localhost:44319/";

  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllBrandComponent();

    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandIdMetod(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorIdMetod(params['colorId']);
      } else {
        this.getCarDetailMetod();
      }
    });
  }

  getCarDetailMetod() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
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
      8;
      this.isLoaded = true;
    });
  }

  getAllBrandComponent() {
    this.brandService.getAllBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  // isCurrentBrand(brand: Brand) {
  //   if (!brand) return false;
  //   if (!this.currentBrand) return false;
  //   console.log(this.currentBrand.id);
  //   return this.currentBrand.id === brand.id;
  // }

  // getCarImageByCarId(carId:number) : CarImage[]{
  //   this.carImageService.getCarImagesMetod(carId).subscribe(response=>{
  //     this.carImages=response.data;
  //   })
  //   return this.carImages;
  // }

  // getFirstImageByCarId(carId:number):CarImage{
  //     this.carImage =  this.getCarImageByCarId(carId)[0];
  //     return this.carImage;
  // }

  // getCurrentImageClass(image:CarImage){
  //   if(this.carImages[0]==image){
  //     return "carousel-item active";
  //   } else {
  //     return "carousel-item ";
  //   }
  // }

  // getPath(){
  //   let postPath="https://localhost:44319/";
  //   return postPath +this.carImage.imagePath;
  // }
}
