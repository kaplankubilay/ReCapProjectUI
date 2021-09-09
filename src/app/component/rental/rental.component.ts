import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private rentalService:RentalService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getRentalDetailDtosComponent()
  }

  getRentalDetailDtosComponent(){
    this.rentalService.getRentalDetailsDto().subscribe(response=>{
      this.rentalDetails=response.data;
      this.isLoad=true;
      this.toastrService.info("Kiralamalar Listelendi.")
    });
  }

}
