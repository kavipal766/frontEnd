import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {HistoryComponent} from './history/history.component';

const routes: Routes = [

  {path:'ContactComponent',component:ContactComponent},
  {path:'HistoryComponent',component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
