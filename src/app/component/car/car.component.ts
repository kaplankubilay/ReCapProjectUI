import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetail[]=[]

  isLoaded:boolean=false;

  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandIdMetod(params["brandId"])
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

}
