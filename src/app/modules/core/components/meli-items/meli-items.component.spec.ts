import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { ItemService } from 'src/app/modules/base/services/items/item.service';
import { MeliItemsComponent } from './meli-items.component';

describe('MeliItemsComponent', () => {
  let component: MeliItemsComponent;
  let fixture: ComponentFixture<MeliItemsComponent>;
  let itemService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [MeliItemsComponent],
      providers: [ItemService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([ItemService], (i: any) => {
    itemService = i;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When invoke invokeItems()', () => {
    it('should response service /items success', () => {
      const response = { data: 'Mock response' };
      const spy = spyOn(itemService, 'getItems').and.returnValue(of(response));
      component.invokeItems('12');
      expect(spy).toHaveBeenCalled();
      spy.calls.reset();
    });

    it('should response service /items fail', () => {
      const spy = spyOn(itemService, 'getItems').and.throwError('Error');
      try {
        component.invokeItems('34');
        expect(spy).toThrowError('Error');
        console.log('error 1');
      } catch (error) {
        console.log('error 2');
        spy.calls.reset();
      }
    });
  });
});
