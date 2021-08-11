import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { GetListResponseModel } from '../models/getListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl:string="https://localhost:44319/api/customers/getcustomerdetailsdto";
  constructor(private httpClient:HttpClient) { }

  getCustomerDetailDto():Observable<GetListResponseModel<Customer>>{
    return this.httpClient.get<GetListResponseModel<Customer>>(this.apiUrl);
  }
}
