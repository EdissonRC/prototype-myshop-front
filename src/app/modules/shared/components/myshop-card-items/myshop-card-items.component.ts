import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IItemsResponse } from 'src/app/modules/core/interfaces/items-response';

@Component({
  selector: 'myshop-card-items',
  templateUrl: './myshop-card-items.component.html',
  styleUrls: ['./myshop-card-items.component.scss'],
})
export class MyshopCardItemsComponent {
  @Input() public itemsInfo!: IItemsResponse;

  constructor(private route: Router) {}

  public goProductDetail(value: any): void {
    this.route.navigate(['/items', value.id]);
  }
}
