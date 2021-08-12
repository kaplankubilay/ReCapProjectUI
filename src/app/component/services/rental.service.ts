import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListResponseModel } from '../models/getListResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl:string="https://localhost:44319/api/"
  constructor(private httpClient:HttpClient) { }

  getRentalDetailsDto():Observable<GetListResponseModel<RentalDetail>>{
    let customPath:string=this.apiUrl+"rentals/getrentaldetaildto";
    return this.httpClient.get<GetListResponseModel<RentalDetail>>(customPath);
  }
}
