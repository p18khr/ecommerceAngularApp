import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterProductsComponent } from './enter-products.component';

describe('EnterProductsComponent', () => {
  let component: EnterProductsComponent;
  let fixture: ComponentFixture<EnterProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
