import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboProfileComponent } from './labo-profile.component';

describe('LaboProfileComponent', () => {
  let component: LaboProfileComponent;
  let fixture: ComponentFixture<LaboProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
