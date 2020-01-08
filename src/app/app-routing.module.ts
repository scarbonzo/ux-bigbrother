import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallsComponent } from './calls/calls.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'calls',
    pathMatch: 'full'
  },
  {
    path: 'calls',
    component: CallsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
