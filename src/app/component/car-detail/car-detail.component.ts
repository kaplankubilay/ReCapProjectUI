import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { CarService } from '../services/car.service';
import { CarImageService } from '../services/carImage.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  basePath="https://localhost:44319/"
  carDetails: CarDetail[];
  carImages: CarImage[];
  currentImage:CarImage;

  constructor(
    private carService:CarService,
    private imageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit():void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
        this.getCarImage(params["carId"]);
      }
    })    
  }

  getCarImage(carId:number){
    this.imageService.getCarImagesMetod(carId).subscribe(response=>{
      this.carImages=response.data;
    })
  }

  getCarDetail(carId:number){
    this.carService.getCarDetailByCarId(carId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }

  getActivePhoto(index: number) {
    if (index == 0) {
      return "carousel-item active"
    }
    return "carousel-item"
  }

  getPath() {
    return this.basePath;
  }

  getButtonClass(image:CarImage){
    if (image===this.carImages[0]) {
      return "active";
    }
    else{
      return "";
    }
  }

  getCurrentImageClass(image:CarImage){
    if(this.carImages[0]===image){
      return "carousel-item active";
    } else {
      return "carousel-item ";
    }
  }
  
  setCurrentImageClass(image:CarImage){
    this.currentImage = image;
  }

}
