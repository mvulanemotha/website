import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPeriodSharesComponent } from './fixed-period-shares.component';

describe('FixedPeriodSharesComponent', () => {
  let component: FixedPeriodSharesComponent;
  let fixture: ComponentFixture<FixedPeriodSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedPeriodSharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedPeriodSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
