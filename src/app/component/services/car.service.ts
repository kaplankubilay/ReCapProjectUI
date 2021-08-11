import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { GetListResponseModel } from '../models/getListResponseModel';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl:string="https://localhost:44319/api/cars/getcardetailsdto";

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<GetListResponseModel<CarDetail>>{
    return this.httpClient.get<GetListResponseModel<CarDetail>>(this.apiUrl);
  }
}
