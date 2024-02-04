import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMiddlescreenComponent } from './landing-middlescreen.component';

describe('LandingMiddlescreenComponent', () => {
  let component: LandingMiddlescreenComponent;
  let fixture: ComponentFixture<LandingMiddlescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingMiddlescreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingMiddlescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
