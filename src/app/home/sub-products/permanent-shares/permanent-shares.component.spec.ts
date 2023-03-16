import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentSharesComponent } from './permanent-shares.component';

describe('PermanentSharesComponent', () => {
  let component: PermanentSharesComponent;
  let fixture: ComponentFixture<PermanentSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentSharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
