import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAccountsComponent } from './call-accounts.component';

describe('CallAccountsComponent', () => {
  let component: CallAccountsComponent;
  let fixture: ComponentFixture<CallAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
