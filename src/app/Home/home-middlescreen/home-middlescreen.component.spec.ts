import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiddlescreenComponent } from './home-middlescreen.component';

describe('HomeMiddlescreenComponent', () => {
  let component: HomeMiddlescreenComponent;
  let fixture: ComponentFixture<HomeMiddlescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMiddlescreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMiddlescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
