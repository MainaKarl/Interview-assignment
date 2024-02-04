import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMiddlescreenComponent } from './login-middlescreen.component';

describe('LoginMiddlescreenComponent', () => {
  let component: LoginMiddlescreenComponent;
  let fixture: ComponentFixture<LoginMiddlescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginMiddlescreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginMiddlescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
