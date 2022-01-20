import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MeliDetailProductComponent } from './components/meli-detail-product/meli-detail-product.component';
import { MeliItemsComponent } from './components/meli-items/meli-items.component';
import { MeliLandingComponent } from './components/meli-landing/meli-landing.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [MeliLandingComponent, MeliDetailProductComponent, MeliItemsComponent],
  exports: [MeliLandingComponent, MeliDetailProductComponent, MeliItemsComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
