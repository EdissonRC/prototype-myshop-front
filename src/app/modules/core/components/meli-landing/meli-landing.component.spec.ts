import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { SessionStorageService } from 'src/app/modules/shared/service/session-storage.service';
import { MeliLandingComponent } from './meli-landing.component';

describe('MeliLandingComponent', () => {
  let component: MeliLandingComponent;
  let fixture: ComponentFixture<MeliLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeliLandingComponent],
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule],
      providers: [SessionStorageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
