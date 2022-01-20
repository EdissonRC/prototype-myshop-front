import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyshopCardDetailsComponent } from './myshop-card-details.component';

describe('MyshopCardDetailsComponent', () => {
  let component: MyshopCardDetailsComponent;
  let fixture: ComponentFixture<MyshopCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyshopCardDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshopCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
