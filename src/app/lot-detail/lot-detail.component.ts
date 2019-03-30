import { Component, OnInit } from '@angular/core'
import {LotService} from '../services/lot.service'
import {Lot} from '../Lot'
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Report} from '../Report';

@Component({
  selector: 'app-lot-detail',
  templateUrl: './lot-detail.component.html',
  styleUrls: ['./lot-detail.component.css']
})
export class LotDetailComponent implements OnInit {

  lot: Lot
  reports: Report[]

  formSliderVal = 0

  constructor(
    private lotService: LotService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap( (params: ParamMap) =>
        this.lotService.getSingle(params.get('id'))
      )
    ).subscribe( lot => {
        this.lot = lot
        this.updateReports()
    })
  }

  updateReports() {
    const lot = this.lot
    if (lot.reports) {
      this.reports = lot.reports
    }
  }

  submitReport() {
    console.log(this.formSliderVal)
  }

}
