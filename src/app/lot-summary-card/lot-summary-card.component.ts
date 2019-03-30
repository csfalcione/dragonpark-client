import {Component, Input, OnInit} from '@angular/core'
import {Lot} from '../Lot'

@Component({
  selector: 'app-lot-summary-card',
  templateUrl: './lot-summary-card.component.html',
  styleUrls: ['./lot-summary-card.component.css']
})
export class LotSummaryCardComponent implements OnInit {

  constructor() { }

  @Input()
  lot: Lot


  ngOnInit() {
  }

}
