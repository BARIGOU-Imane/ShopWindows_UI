import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcompComponent } from './dashcomp.component';

describe('DashcompComponent', () => {
  let component: DashcompComponent;
  let fixture: ComponentFixture<DashcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
