import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCodesComponent } from './temp-codes.component';

describe('TempCodesComponent', () => {
  let component: TempCodesComponent;
  let fixture: ComponentFixture<TempCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
