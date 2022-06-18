import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GiaoDich} from "../model/giao-dich";

const API_URL = `${environment}`
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }


  search(value: any, value2: any):Observable<GiaoDich[]> {
    console.log(value);
    console.log(value2);
    return this.http.get<GiaoDich[]>(`${API_URL}/transaction?facilityType.id_like=${value}&codeCustomer.name_like=${value2}`)
  }
}
