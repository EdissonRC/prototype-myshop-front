import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeliDetailProductComponent } from './components/meli-detail-product/meli-detail-product.component';
import { MeliItemsComponent } from './components/meli-items/meli-items.component';
import { MeliLandingComponent } from './components/meli-landing/meli-landing.component';

const routes: Routes = [
  {
    path: '',
    component: MeliLandingComponent,
  },
  {
    path: 'items/:id',
    component: MeliDetailProductComponent,
  },
  {
    path: 'items',
    component: MeliItemsComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class CoreRoutingModule {}
