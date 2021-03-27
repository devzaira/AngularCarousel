import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NgbdCollapseNavbar} from './nav/collapse-navbar';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// const routes: Routes = [
//   { path: '/store', component: AppComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgbdCollapseNavbar
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule,
    FontAwesomeModule,
    NgbModule, RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
