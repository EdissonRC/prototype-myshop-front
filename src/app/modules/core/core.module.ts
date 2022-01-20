import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyshopDetailProductComponent } from './components/myshop-detail-product/myshop-detail-product.component';
import { MyshopItemsComponent } from './components/myshop-items/myshop-items.component';
import { MyshopLandingComponent } from './components/myshop-landing/myshop-landing.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [MyshopLandingComponent, MyshopDetailProductComponent, MyshopItemsComponent],
  exports: [MyshopLandingComponent, MyshopDetailProductComponent, MyshopItemsComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
