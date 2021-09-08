import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { CarService } from '../services/car.service';
import { CarImageService } from '../services/carImage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetail[]=[]

  isLoaded:boolean=false;

  // carImages:CarImage[];

  // carImage:CarImage;

  // basePath ="https://localhost:44319/";

  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandIdMetod(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColorIdMetod(params["colorId"]);
      }
      else{
        this.getCarDetailMetod();
      }
    });
  }

  getCarDetailMetod(){
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
      this.isLoaded=true;
    });
  }

  getCarsByBrandIdMetod(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.carDetails=response.data;
      this.isLoaded=true;
    });
  }

  getCarsByColorIdMetod(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
      this.carDetails=response.data;
      this.isLoaded=true;
    })
  }

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
