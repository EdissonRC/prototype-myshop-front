import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { SessionStorageService } from '../../shared/service/session-storage.service';
import { RequestService } from './request.service';

describe('RequestService', () => {
  let service: RequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule],
      providers: [RequestService, SessionStorageService],
    });
    service = TestBed.inject(RequestService);
  });
});
