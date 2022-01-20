import { Component, Input } from '@angular/core';
import { IItemResponse } from 'src/app/modules/core/interfaces/item-response';

@Component({
  selector: 'meli-card-details',
  templateUrl: './meli-card-details.component.html',
  styleUrls: ['./meli-card-details.component.scss'],
})
export class MeliCardDetailsComponent {
  public typeItem: string = '';
  public titleItem: string = '';
  public amountItem: number = 0;
  public descriptionItem: string = '';
  public priceCurrency: string = '';
  @Input() public itemInfo!: IItemResponse;
}
