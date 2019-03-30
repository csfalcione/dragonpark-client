import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {LotListComponent} from './lot-list/lot-list.component'
import {LotDetailComponent} from './lot-detail/lot-detail.component'

const routes: Routes = [
  {path: '', component: LotListComponent},
  {path: 'lot/:id', component: LotDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
