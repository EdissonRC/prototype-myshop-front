import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { SessionStorageService } from 'src/app/modules/shared/service/session-storage.service';
import { MyshopLandingComponent } from './myshop-landing.component';

describe('MyshopLandingComponent', () => {
  let component: MyshopLandingComponent;
  let fixture: ComponentFixture<MyshopLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyshopLandingComponent],
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule],
      providers: [SessionStorageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshopLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
