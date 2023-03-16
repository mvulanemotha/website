import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaintsPolicyComponent } from './compaints-policy.component';

describe('CompaintsPolicyComponent', () => {
  let component: CompaintsPolicyComponent;
  let fixture: ComponentFixture<CompaintsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaintsPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaintsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
