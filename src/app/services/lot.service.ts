import { Injectable } from '@angular/core'
import {Observable} from 'rxjs'
import {Lot} from '../Lot'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';

const baseUrl = 'http://localhost:4000/api'


@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor(private http: HttpClient) { }

  getGlobalLots(): Observable<Lot[]> {
    return this.http.get<any>(`${baseUrl}/lots`)
      .pipe(
        map(res => res.data)
      )
  }

  getSingle(lotId: string): Observable<Lot> {
    return this.http.get<Lot>(`${baseUrl}/lots/${lotId}`)
  }

  submitReport(lotId, status): Observable<any> {
    return this.http.post<any>( `${baseUrl}/reports`, {report: {status, lot_id: lotId}} )
  }



}
