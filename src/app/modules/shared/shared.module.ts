import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseModule } from '../base/base.module';
import { MyshopCardDetailsComponent } from './components/myshop-card-details/myshop-card-details.component';
import { MyshopCardItemsComponent } from './components/myshop-card-items/myshop-card-items.component';
import { MyshopHeaderComponent } from './components/myshop-header/myshop-header.component';

@NgModule({
  declarations: [MyshopHeaderComponent, MyshopCardItemsComponent, MyshopCardDetailsComponent],
  exports: [MyshopHeaderComponent, MyshopCardItemsComponent, MyshopCardDetailsComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule, BaseModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
