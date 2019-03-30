import { Component, OnInit } from '@angular/core'
import {LotService} from '../services/lot.service'
import {Lot} from '../Lot'
import {ActivatedRoute, ParamMap} from '@angular/router'
import {switchMap} from 'rxjs/operators'
import {Report} from '../Report'
import {timer} from 'rxjs';

@Component({
  selector: 'app-lot-detail',
  templateUrl: './lot-detail.component.html',
  styleUrls: ['./lot-detail.component.css']
})
export class LotDetailComponent implements OnInit {

  lot: Lot
  reports: Report[] = []

  formSliderVal = 0

  constructor(
    private lotService: LotService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      map => {
        const id = map.get('id')
        this.loadLot(id)
        timer(0, 10000).subscribe( _ => this.loadLot(id) )
      }
    )
  }

  loadLot(lotId) {
    this.lotService.getSingle(lotId)
      .subscribe( res => {
        this.lot = res
        this.updateReports()
      }
    )
  }

  updateReports() {
    const lot = this.lot
    if (lot.reports) {
      this.reports = lot.reports
    }
  }

  submitReport() {
    console.log(this.formSliderVal)
    this.lotService.submitReport(this.lot.id, this.formSliderVal)
      .subscribe( success => {
        this.loadLot(this.lot.id)
      }, err => {
        alert('There was an error submitting report')
      })
  }

}
