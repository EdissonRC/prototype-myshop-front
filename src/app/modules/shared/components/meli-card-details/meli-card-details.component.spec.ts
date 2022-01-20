import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeliCardDetailsComponent } from './meli-card-details.component';

describe('MeliCardDetailsComponent', () => {
  let component: MeliCardDetailsComponent;
  let fixture: ComponentFixture<MeliCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeliCardDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
