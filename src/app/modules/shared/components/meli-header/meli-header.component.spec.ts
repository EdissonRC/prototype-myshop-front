import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MeliHeaderComponent } from './meli-header.component';

describe('HeaderComponent', () => {
  let component: MeliHeaderComponent;
  let fixture: ComponentFixture<MeliHeaderComponent>;
  const mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeliHeaderComponent],
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliHeaderComponent);
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
