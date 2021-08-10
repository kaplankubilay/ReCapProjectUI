import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { CarDetailService } from '../services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetail[]=[]

  isLoaded:boolean=false;

  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    debugger;
    this.getCarDetailMetod();
  }

  getCarDetailMetod(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
      this.isLoaded=true;
    });
  }

}
