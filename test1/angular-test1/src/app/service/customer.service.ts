import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {KhachHang} from "../model/khach-hang";
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getAllCustomer():Observable<KhachHang[]>{
    return this.http.get<KhachHang[]>(`${API_URL}/customers`)
  }
}
