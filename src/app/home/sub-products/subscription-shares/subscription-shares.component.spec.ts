import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionSharesComponent } from './subscription-shares.component';

describe('SubscriptionSharesComponent', () => {
  let component: SubscriptionSharesComponent;
  let fixture: ComponentFixture<SubscriptionSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionSharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
