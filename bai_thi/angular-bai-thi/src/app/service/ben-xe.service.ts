import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenXe} from '../model/ben-xe';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;
const API_URL_JAVA = `${environment.apiUrlJava}`;
@Injectable({
  providedIn: 'root'
})
export class BenXeService {

  constructor(private http: HttpClient) { }

  getAllBenXe(): Observable<BenXe[]> {
    return this.http.get<BenXe[]>(API_URL + `/benxe`);
  }

  deleteXe(id: number): Observable<BenXe> {
    return this.http.delete<BenXe>(`${API_URL_JAVA}/ben-xe/delete/${id}`);
  }

  findBenById(id: number): Observable<BenXe> {
    return this.http.get<BenXe>(`${API_URL_JAVA}/ben-xe/find/${id}`);
  }

  updateBenXe(benXe: BenXe, id: any): Observable<BenXe> {
    return this.http.patch<BenXe>(`${API_URL_JAVA}/ben-xe/update/${id}`, benXe);
  }

  getListAndSearch(loaiXe: any, tenNhaXe: any): Observable<BenXe[]> {
    return this.http.get<BenXe[]>(`${API_URL_JAVA}/ben-xe/list?loaiXe=${loaiXe}&tenNhaXe=${tenNhaXe}`);
  }

  createBenXe(benXe: any): Observable<BenXe> {
    return this.http.post<BenXe>(`${API_URL_JAVA}/ben-xe/create`, benXe);
  }
}
