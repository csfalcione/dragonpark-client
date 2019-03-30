import { Injectable } from '@angular/core'
import {Observable, of, Subject} from 'rxjs'
import {Lot} from '../Lot'

@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor() { }

  sampleData: Lot[] = [
    {
      id: 1,
      name: '12th Street Parking Deck',
      address: '1212 University Blvd Birmingham, Alabama 35233',
      lat: 40,
      lng: -79,
      status: 20,
      reports: [
        {
          timestamp: '2019-03-30 20:25:16.540239Z',
          status: 60,
          name: 'Caleb',
          lot_id: 1
        },
        {
          timestamp: '2019-03-30 20:45:16.540239Z',
          status: 40,
          name: 'Rofael',
          lot_id: 1
        }
      ]
    },
    {
      id: 2,
      name: '16th Street Parking Deck',
      address: '1024 16th St S Birmingham, Alabama 35205',
      lat: 40,
      lng: -79,
      status: 80
    }
  ]

  getGlobalLots(): Observable<Lot[]> {
    return of(this.sampleData)
  }

  getSingle(lotId: string): Observable<Lot> {
    return of(this.sampleData[0])
  }

  submitReport(lotId, value): Observable<any> {
    return of(true)
  }



}
