import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {FacilityType} from "../model/facility-type";
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment}`
@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private http: HttpClient) { }

  getAllFacilityType():Observable<FacilityType[]>{
    return this.http.get<FacilityType[]>(API_URL+`/facilityType`)
  }
}
