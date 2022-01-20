import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MyshopHeaderComponent } from './myshop-header.component';

describe('HeaderComponent', () => {
  let component: MyshopHeaderComponent;
  let fixture: ComponentFixture<MyshopHeaderComponent>;
  const mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyshopHeaderComponent],
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When invoke onSubmit()', () => {
    it('should simulate invocation navigate', () => {
      component.onSubmit();
      expect(mockRouter.navigate).toHaveBeenCalledOnceWith([`/items`], {
        queryParams: { search: '' },
      });
    });
  });
});
