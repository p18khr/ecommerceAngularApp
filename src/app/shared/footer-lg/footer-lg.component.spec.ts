import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLgComponent } from './footer-lg.component';

describe('FooterLgComponent', () => {
  let component: FooterLgComponent;
  let fixture: ComponentFixture<FooterLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
