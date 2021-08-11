import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ColorResponseModel } from '../models/colorResponseModel';
import { GetListResponseModel } from '../models/getListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl:string="https://localhost:44319/api/colors/getallcolors";

  constructor(private httpClient:HttpClient) { }

  getAllColors():Observable<GetListResponseModel<Color>>{
    return this.httpClient.get<GetListResponseModel<Color>>(this.apiUrl);
  }

}
