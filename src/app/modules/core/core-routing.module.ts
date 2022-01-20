import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyshopDetailProductComponent } from './components/myshop-detail-product/myshop-detail-product.component';
import { MyshopItemsComponent } from './components/myshop-items/myshop-items.component';
import { MyshopLandingComponent } from './components/myshop-landing/myshop-landing.component';

const routes: Routes = [
  {
    path: '',
    component: MyshopLandingComponent,
  },
  {
    path: 'items/:id',
    component: MyshopDetailProductComponent,
  },
  {
    path: 'items',
    component: MyshopItemsComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class CoreRoutingModule {}
