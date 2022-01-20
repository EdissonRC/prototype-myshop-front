import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { ItemService } from 'src/app/modules/base/services/items/item.service';
import { MyshopDetailProductComponent } from './myshop-detail-product.component';

describe('MyshopDetailProductComponent', () => {
  let component: MyshopDetailProductComponent;
  let fixture: ComponentFixture<MyshopDetailProductComponent>;
  let itemService: any;
  const activatedRoute = ({ data: of({ label: 'hello' }) } as any) as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyshopDetailProductComponent],
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule],
      providers: [
        ItemService,
        {
          provide: ActivatedRoute,
          useValue: activatedRoute,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshopDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([ItemService], (r: any) => {
    itemService = r;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When invoke invokeItemsDetails()', () => {
    it('should return success response', () => {
      const response = { data: 'Mock response' };
      const spy = spyOn(itemService, 'getItemsDetails').and.returnValue(of(response));
      component.invokeItemsDetails('');
      expect(spy).toHaveBeenCalled();
      spy.calls.reset();
    });

    it('should return fail response', () => {
      const spy = spyOn(itemService, 'getItemsDetails').and.throwError('Error');
      try {
        component.invokeItemsDetails('');
        expect(spy).toThrowError('Error');
      } catch (error) {
        spy.calls.reset();
      }
    });
  });
});
