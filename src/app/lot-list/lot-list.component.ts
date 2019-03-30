import { Component, OnInit } from '@angular/core'
import {Lot} from '../Lot'
import {LotService} from '../services/lot.service';

@Component({
  selector: 'app-lot-list',
  templateUrl: './lot-list.component.html',
  styleUrls: ['./lot-list.component.css']
})
export class LotListComponent implements OnInit {

  lots: Lot[]

  constructor(private lotService: LotService) { }

  ngOnInit() {
    this.lotService.getGlobalLots()
      .subscribe( lots => {
        console.log(lots)
        this.lots = lots
      } )
  }

}
