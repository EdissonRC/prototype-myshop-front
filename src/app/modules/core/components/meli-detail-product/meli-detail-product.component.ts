import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/modules/base/services/items/item.service';
import { IItemResponse } from '../../interfaces/item-response';

@Component({
  selector: 'meli-detail-product',
  templateUrl: './meli-detail-product.component.html',
  styleUrls: ['./meli-detail-product.component.scss'],
})
export class MeliDetailProductComponent implements OnInit {
  public item!: IItemResponse;

  constructor(private activeRoute: ActivatedRoute, private itemService: ItemService) {}

  async ngOnInit() {
    this.item = await this.invokeItemsDetails(`${this.activeRoute?.snapshot?.paramMap.get('id')}`);
  }

  public invokeItemsDetails(id: string): Promise<IItemResponse> {
    return new Promise((resolve, reject) => {
      this.itemService.getItemsDetails(id).subscribe(
        (data: any) => {
          resolve(data);
        },
        (err) => {
          reject(err);
          console.error('[ERROR]: service /items/:id ', err);
        },
      );
    });
  }
}
