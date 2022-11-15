import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendProductsComponent } from './frontend-products.component';

describe('FrontendProductsComponent', () => {
  let component: FrontendProductsComponent;
  let fixture: ComponentFixture<FrontendProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
