import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/modules/shared/service/session-storage.service';
import { IItemsResponse } from '../../interfaces/items-response';

const SS_KEY_TOKEN = 'access-token';
const SS_VALUE_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpc3NvbiIsImxhc3RuYW1lIjoiUnVpeiJ9.NmNt3kHc9VqHzfYAdTcKl5sGVZg4EY555LRWZEbtCes';

@Component({
  selector: 'meli-landing',
  template: `
    <meli-header></meli-header>
  `,
  styleUrls: ['./meli-landing.component.scss'],
})
export class MeliLandingComponent implements OnInit {
  public itemsInfo!: IItemsResponse;

  constructor(private sessionStorageService: SessionStorageService) {}

  ngOnInit(): void {
    this.sessionStorageService.setSessionStorage(SS_KEY_TOKEN, SS_VALUE_TOKEN);
  }
}
