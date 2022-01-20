import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IItemsResponse } from 'src/app/modules/core/interfaces/items-response';

@Component({
  selector: 'meli-card-items',
  templateUrl: './meli-card-items.component.html',
  styleUrls: ['./meli-card-items.component.scss'],
})
export class MeliCardItemsComponent {
  @Input() public itemsInfo!: IItemsResponse;

  constructor(private route: Router) {}

  public goProductDetail(value: any): void {
    this.route.navigate(['/items', value.id]);
  }
}
