import { Injectable } from '@angular/core';
import {Customer} from "../models/customer";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  public createCustomer( customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + `/customer`,customer)
  }
  public findCustomerById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${API_URL}/customer/${id}`);
  }

  public update(customer: Customer,id: number):Observable<Customer>{
    return this.http.put<Customer>(`${API_URL}/customer/${id}`,customer)
  }
  public getAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(API_URL + `/customer`);
  }

  removeByid(idDel: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customer/${idDel}`)
  }
}

