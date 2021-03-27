import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule, routingComponents} from './app-routing.module';

import {NgbdCollapseNavbar} from './nav/collapse-navbar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgbdCollapseNavbar,
    routingComponents
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
