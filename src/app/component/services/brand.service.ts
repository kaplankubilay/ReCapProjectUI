import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { GetListResponseModel } from '../models/getListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl:string="https://localhost:44319/api/brands/getallbrands"

  constructor(private httpClient:HttpClient) { }

  getAllBrands():Observable<GetListResponseModel<Brand>>{
    return this.httpClient.get<GetListResponseModel<Brand>>(this.apiUrl);
  }
}
