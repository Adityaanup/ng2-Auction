import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './components/application/application';
import ProductItemComponent from './components/product-item/product-item';

const routes: Routes = [
  { path: '', component: ApplicationComponent },
  {path: 'products', component: ProductItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }