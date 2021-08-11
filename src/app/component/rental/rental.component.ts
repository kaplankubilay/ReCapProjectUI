import { Component, OnInit } from '@angular/core';
import { RentalDetail } from '../models/rentalDetail';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  isLoad:boolean=false;
  rentalDetails:RentalDetail[]=[];
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetailDtosComponent()
  }

  getRentalDetailDtosComponent(){
    this.rentalService.getRentalDetailsDto().subscribe(response=>{
      this.rentalDetails=response.data;
      this.isLoad=true;
    });
  }

}
