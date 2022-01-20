import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'myshop-header',
  templateUrl: './myshop-header.component.html',
  styleUrls: ['./myshop-header.component.scss'],
})
export class MyshopHeaderComponent implements OnInit {
  @Output() responseItems = new EventEmitter<any>();

  public applicationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  public onSubmit() {
    this.router.navigate([`/items`], {
      queryParams: { search: this.applicationForm.value.productName },
    });
  }

  private initForm() {
    this.applicationForm = this.formBuilder.group({
      productName: ['', Validators.required],
    });
  }
}
