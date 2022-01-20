import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/modules/base/services/items/item.service';
import { IItemsResponse } from '../../interfaces/items-response';

@Component({
  selector: 'meli-items',
  templateUrl: './meli-items.component.html',
  styleUrls: ['./meli-items.component.scss'],
})
export class MeliItemsComponent implements OnInit {
  public itemsInfo!: IItemsResponse;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    const paramValue = location.search.split('?search=') ? location.search.split('?search=')[1] : '';
    this.invokeItems(paramValue);
  }

  public invokeItems(paramValue: string): void {
    if (paramValue) {
      this.itemService.getItems(paramValue).subscribe(
        (data: any) => {
          this.itemsInfo = data;
        },
        (err) => {
          console.error('[ERROR]: service /items?q ', err);
        },
      );
    }
  }
}
