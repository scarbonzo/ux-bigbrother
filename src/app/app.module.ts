import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CallsComponent } from './calls/calls.component';
import { CallsresultsComponent } from './callsresults/callsresults.component';

import 'hammerjs';

import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatGridListModule,
  MatDividerModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule,
  MatSelectModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CallsService } from './calls.service';
import { EventsComponent } from './events/events.component';
import { EventsresultsComponent } from './eventsresults/eventsresults.component';
import { EventsService } from './events.service';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallsComponent,
    CallsresultsComponent,
    EventsComponent,
    EventsresultsComponent,
    UsersComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatGridListModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [
    CallsService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
