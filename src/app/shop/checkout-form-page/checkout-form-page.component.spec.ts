import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormPageComponent } from './checkout-form-page.component';

describe('CheckoutFormPageComponent', () => {
  let component: CheckoutFormPageComponent;
  let fixture: ComponentFixture<CheckoutFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
