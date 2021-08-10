import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl:string="https://localhost:44319/api/cars/getcardetailsdto";

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<CarDetailResponseModel>{
    debugger;
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
