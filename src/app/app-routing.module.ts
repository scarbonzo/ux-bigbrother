import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallsComponent } from './calls/calls.component';
import { EventsComponent } from './events/events.component';


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
  ,
  {
    path: 'events',
    component: EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
