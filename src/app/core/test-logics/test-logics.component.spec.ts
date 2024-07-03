import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLogicsComponent } from './test-logics.component';

describe('TestLogicsComponent', () => {
  let component: TestLogicsComponent;
  let fixture: ComponentFixture<TestLogicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLogicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLogicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
