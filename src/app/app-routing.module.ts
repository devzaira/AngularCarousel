import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoreComponent} from './store/store.component';
import {ProductServiceComponent} from './product-service/product-service.component';
import {HelpSupportComponent} from './help-support/help-support.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'store-list', component: StoreComponent},
  {path: 'product-services', component: ProductServiceComponent},
  {path: 'help-support', component: HelpSupportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  StoreComponent,
  ProductServiceComponent,
  HelpSupportComponent
];
