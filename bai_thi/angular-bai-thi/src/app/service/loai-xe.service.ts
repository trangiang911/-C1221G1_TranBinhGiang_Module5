import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaiXe} from '../model/loai-xe';
const API_URL = `${environment.apiUrl}`;
const API_URL_JAVA = `${environment.apiUrlJava}`;
@Injectable({
  providedIn: 'root'
})
export class LoaiXeService {

  constructor(private http: HttpClient) { }

  getAllLoaiXe(): Observable<LoaiXe[]> {
    return this.http.get<LoaiXe[]>(API_URL_JAVA + `/loai-xe/list`);
  }
}
