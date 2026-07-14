import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAbout } from './shop-about';

describe('ShopAbout', () => {
  let component: ShopAbout;
  let fixture: ComponentFixture<ShopAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
