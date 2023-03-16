import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikusasaFixedDepositAccountComponent } from './likusasa-fixed-deposit-account.component';

describe('LikusasaFixedDepositAccountComponent', () => {
  let component: LikusasaFixedDepositAccountComponent;
  let fixture: ComponentFixture<LikusasaFixedDepositAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikusasaFixedDepositAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikusasaFixedDepositAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
