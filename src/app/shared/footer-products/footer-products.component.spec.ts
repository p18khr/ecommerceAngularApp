import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterProductsComponent } from './footer-products.component';

describe('FooterProductsComponent', () => {
  let component: FooterProductsComponent;
  let fixture: ComponentFixture<FooterProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
