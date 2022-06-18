import { Injectable } from '@angular/core';
import {Customer} from "../models/customer";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
const API_URL = `${environment.apiUrl}`;
const API_URL_JAVA =`${environment.apiUrlJava}`
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  public createCustomer( customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL_JAVA + `/customers/create-customer`,customer)
  }
  public findCustomerById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${API_URL}/customer/${id}`);
  }

  public update(customer: Customer,id: number):Observable<Customer>{
    return this.http.put<Customer>(`${API_URL}/customer/${id}`,customer)
  }
  public getAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(API_URL_JAVA + `/customers/list-customer`);
  }

  removeByid(idDel: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customer/${idDel}`)
  }

  search(value: any, value2: any, value3: any):Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/customer?name_like=${value}&phone_like=${value2}&customerType.type_like=${value3}`)
  }
}

