import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGames } from './shop-games';

describe('ShopGames', () => {
  let component: ShopGames;
  let fixture: ComponentFixture<ShopGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopGames],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
