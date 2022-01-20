import { TestBed } from '@angular/core/testing';
import { SessionStorageService } from './session-storage.service';

const SS_KEY = 'user';
const SS_TOKEN = 'token';
describe('SessionStorageService', () => {
  let service: SessionStorageService;
  const data: any = {
    usr: 'edisson',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageService);
    sessionStorage.setItem(btoa(SS_KEY), btoa(JSON.stringify(data)));
    sessionStorage.setItem(btoa(SS_TOKEN), btoa('123456'));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When invoke getSessionStorage()', () => {
    it('Should return string decode', () => {
      const response = service.getSessionStorage(SS_TOKEN, 'string');
      expect(response).toEqual('123456');
    });

    it('Should return NO AVAILABLE decode', () => {
      sessionStorage.removeItem(btoa(SS_TOKEN));
      const response = service.getSessionStorage(SS_TOKEN, 'string');
      expect(response).toEqual('NO AVAILABLE');
    });
  });

  describe('When invoke setSessionStorage()', () => {
    it('Should set object decode', () => {
      service.setSessionStorage(SS_KEY, JSON.stringify(data));
      const response: any = service.getSessionStorage(SS_KEY, 'object');
      expect(response.usr).toEqual('edisson');
      sessionStorage.removeItem(btoa(SS_KEY));
    });
  });
});
