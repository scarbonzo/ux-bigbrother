import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallsComponent } from './calls/calls.component';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { HdreportsComponent } from './hdreports/hdreports.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'calls',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'calls',
    component: CallsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'events/:username',
    component: EventsComponent
  }
  ,
  {
    path: 'hdreports',
    component: HdreportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
