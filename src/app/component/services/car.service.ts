import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetListResponseModel } from '../models/getListResponseModel';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl:string="https://localhost:44319/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<GetListResponseModel<CarDetail>>{
    let customPath:string=this.apiUrl+"cars/getcardetailsdto";
    return this.httpClient.get<GetListResponseModel<CarDetail>>(customPath);
  }

  getCarDetailByCarId(carId:number):Observable<GetListResponseModel<CarDetail>>{
    let customPath:string=this.apiUrl+"cars/GetCarDetailDtoByCarId?carId="+carId;
    return this.httpClient.get<GetListResponseModel<CarDetail>>(customPath);
  }

  getCarsByColorId(colorId:number):Observable<GetListResponseModel<CarDetail>>{
    let customPath:string=this.apiUrl+"cars/getcarsbycolorId?colorId="+colorId;
    return this.httpClient.get<GetListResponseModel<CarDetail>>(customPath);
  }

  getCarsByBrandId(brandId:number):Observable<GetListResponseModel<CarDetail>>{
    let customPath:string=this.apiUrl+"cars/getcarsbybrandId?brandId="+brandId;
    return this.httpClient.get<GetListResponseModel<CarDetail>>(customPath);
  }
}
