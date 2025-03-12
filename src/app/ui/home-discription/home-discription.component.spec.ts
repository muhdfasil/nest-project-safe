import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiscriptionComponent } from './home-discription.component';

describe('HomeDiscriptionComponent', () => {
  let component: HomeDiscriptionComponent;
  let fixture: ComponentFixture<HomeDiscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDiscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
