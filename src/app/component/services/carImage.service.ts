import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { GetListResponseModel } from '../models/getListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl:string="https://localhost:44319/api/";

  constructor(private httpClient:HttpClient) { }

  getCarImagesMetod(carId:number):Observable<GetListResponseModel<CarImage>>{
    let customPath:string=this.apiUrl+"CarImage/getimagesbycarid?carId="+carId;
    return this.httpClient.get<GetListResponseModel<CarImage>>(customPath);
  }  
}
