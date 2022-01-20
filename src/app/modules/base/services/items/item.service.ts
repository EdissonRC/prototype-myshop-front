import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'src/app/modules/shared/service/session-storage.service';
import { ITEM } from 'src/environments/environment';
import { RequestService } from '../request.service';

const SS_KEY_TOKEN = 'access-token';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private requestService: RequestService, private sessionStorageService: SessionStorageService) {}

  public getItems(data: string) {
    const headers = new HttpHeaders({
      'access-token': this.sessionStorageService.getSessionStorage(SS_KEY_TOKEN, 'string'),
    });
    return this.requestService.get(`${ITEM.api}${ITEM.endpoint.items}${data}`, headers);
  }

  public getItemsDetails(id: string) {
    const headers = new HttpHeaders({
      'access-token': this.sessionStorageService.getSessionStorage(SS_KEY_TOKEN, 'string'),
    });
    return this.requestService.get(`${ITEM.api}${ITEM.endpoint.item}/${id}`, headers);
  }
}
