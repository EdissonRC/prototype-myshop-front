import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  public setSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(btoa(key), btoa(value));
  }

  /**
   *
   * @param key nombre de la llave
   * @param type tipo de valor a decodificar
   */
  public getSessionStorage(key: string, type: string): any {
    let response = 'NO AVAILABLE';
    const session = sessionStorage.getItem(btoa(key));
    if (session) {
      response = type === 'object' ? JSON.parse(atob(session.toString())) : atob(session.toString());
    }
    return response;
  }
}
