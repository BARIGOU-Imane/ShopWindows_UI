import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeUsersComponent } from './authorize-users.component';

describe('AuthorizeUsersComponent', () => {
  let component: AuthorizeUsersComponent;
  let fixture: ComponentFixture<AuthorizeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizeUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
