import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { SessionStorageService } from 'src/app/modules/shared/service/session-storage.service';
import { RequestService } from '../request.service';
import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;
  let requestService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule],
      providers: [RequestService, SessionStorageService],
    });
    service = TestBed.inject(ItemService);
  });

  beforeEach(inject([RequestService], (r: any) => {
    requestService = r;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When invoke getItems()', () => {
    it('should return success response', () => {
      const response = { data: 'Mock response' };
      const spy = spyOn(requestService, 'get').and.returnValue(of(response));
      service.getItems('');
      expect(spy).toHaveBeenCalled();
      spy.calls.reset();
    });

    it('should return fail response', () => {
      const spy = spyOn(requestService, 'get').and.throwError('Error');
      try {
        service.getItems('');
        expect(spy).toThrowError('Error');
      } catch (error) {
        spy.calls.reset();
      }
    });
  });
});
