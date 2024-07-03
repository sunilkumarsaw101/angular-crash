import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToCheckCanDeactivateGuardComponent } from './to-check-can-deactivate-guard.component';

describe('ToCheckCanDeactivateGuardComponent', () => {
  let component: ToCheckCanDeactivateGuardComponent;
  let fixture: ComponentFixture<ToCheckCanDeactivateGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToCheckCanDeactivateGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToCheckCanDeactivateGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
