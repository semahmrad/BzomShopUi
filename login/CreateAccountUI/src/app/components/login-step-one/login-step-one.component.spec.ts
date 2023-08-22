import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStepOneComponent } from './login-step-one.component';

describe('LoginStepOneComponent', () => {
  let component: LoginStepOneComponent;
  let fixture: ComponentFixture<LoginStepOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginStepOneComponent]
    });
    fixture = TestBed.createComponent(LoginStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
