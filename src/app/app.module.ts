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
  MatTableModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CallsService } from './calls.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallsComponent,
    CallsresultsComponent
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
    MatTableModule
  ],
  providers: [
    CallsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
