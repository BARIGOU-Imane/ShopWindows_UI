import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaDashboardComponent } from './pharma-dashboard.component';

describe('PharmaDashboardComponent', () => {
  let component: PharmaDashboardComponent;
  let fixture: ComponentFixture<PharmaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
