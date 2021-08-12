import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { GetListResponseModel } from '../models/getListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl:string="https://localhost:44319/api/";

  constructor(private httpClient:HttpClient) { }

  getAllColors():Observable<GetListResponseModel<Color>>{
    let customPath:string=this.apiUrl+"colors/getallcolors";
    return this.httpClient.get<GetListResponseModel<Color>>(customPath);
  }

}
