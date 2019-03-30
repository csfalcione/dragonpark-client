import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatCommonModule, MatGridListModule, MatIconModule,
  MatListModule,
  MatPaginatorModule, MatProgressBarModule, MatSidenavModule, MatSliderModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {LotSummaryCardComponent} from './lot-summary-card/lot-summary-card.component'
import { LotListComponent } from './lot-list/lot-list.component'
import {LotService} from './services/lot.service'
import {FlexLayoutModule} from '@angular/flex-layout';
import { LotDetailComponent } from './lot-detail/lot-detail.component';
import { ReportComponent } from './report/report.component'
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LotSummaryCardComponent,
    LotListComponent,
    LotDetailComponent,
    ReportComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FlexLayoutModule,
    HttpClientModule,

    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatCommonModule,
    MatListModule,
    MatGridListModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatProgressBarModule,
    FormsModule,
    MatSliderModule,
  ],
  providers: [
    LotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
