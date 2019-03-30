import {Component, Input, OnInit} from '@angular/core'
import {Report} from '../Report'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  @Input()
  report: Report

  timeText: string

  private static makeTimeText(timestamp: string): string {
    // assumes timestamp is UTC time
    const reportTime = Date.parse(timestamp)
    const now = Date.now()
    return `${ Math.round((now - reportTime) / (1000 * 60))} minutes ago`
  }

  ngOnInit() {
    this.timeText = ReportComponent.makeTimeText(this.report.timestamp)
  }

}
