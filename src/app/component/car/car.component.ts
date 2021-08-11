import { Component, OnInit } from '@angular/core';
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

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarDetailMetod();
  }

  getCarDetailMetod(){
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
      this.isLoaded=true;
    });
  }

}
