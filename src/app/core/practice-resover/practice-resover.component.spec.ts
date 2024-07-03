import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeResoverComponent } from './practice-resover.component';

describe('PracticeResoverComponent', () => {
  let component: PracticeResoverComponent;
  let fixture: ComponentFixture<PracticeResoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeResoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeResoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
