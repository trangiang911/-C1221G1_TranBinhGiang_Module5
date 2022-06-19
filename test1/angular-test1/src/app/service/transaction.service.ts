import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GiaoDich} from "../model/giao-dich";

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http: HttpClient) { }


  search(value: any, value2: any):Observable<GiaoDich[]> {
    console.log(value);
    console.log(value2);
    return this.http.get<GiaoDich[]>(`${API_URL}/transaction?codeCustomer.name_like=${value}&facilityType.id_like=${value2}`)
  }

  save(trans: GiaoDich):Observable<GiaoDich> {
    return this.http.post<GiaoDich>(`${API_URL}/transaction`,trans)
  }

  getAllTrans():Observable<GiaoDich[]>{
    return this.http.get<GiaoDich[]>(`${API_URL}/transaction`)
  }

  findTransactionById(id: number):Observable<GiaoDich> {
    return this.http.get<GiaoDich>(`${API_URL}/transaction/${id}`)
  }

  updateTransaction(transaction: GiaoDich, id: number):Observable<GiaoDich> {
    return this.http.put<GiaoDich>(`${API_URL}/transaction/${id}`,transaction)
  }

  deleteTransaction(id: number):Observable<GiaoDich> {
    return this.http.delete<GiaoDich>(`${API_URL}/transaction/${id}`)
  }
}
