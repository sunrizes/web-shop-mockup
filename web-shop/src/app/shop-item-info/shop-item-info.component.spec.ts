import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemInfoComponent } from './shop-item-info.component';

describe('ShopItemInfoComponent', () => {
  let component: ShopItemInfoComponent;
  let fixture: ComponentFixture<ShopItemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopItemInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
