import { Component, Input } from '@angular/core';
import { IItemResponse } from 'src/app/modules/core/interfaces/item-response';

@Component({
  selector: 'myshop-card-details',
  templateUrl: './myshop-card-details.component.html',
  styleUrls: ['./myshop-card-details.component.scss'],
})
export class MyshopCardDetailsComponent {
  public typeItem: string = '';
  public titleItem: string = '';
  public amountItem: number = 0;
  public descriptionItem: string = '';
  public priceCurrency: string = '';
  @Input() public itemInfo!: IItemResponse;
}
