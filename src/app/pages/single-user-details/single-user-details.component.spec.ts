import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserDetailsComponent } from './single-user-details.component';

describe('SingleUserDetailsComponent', () => {
  let component: SingleUserDetailsComponent;
  let fixture: ComponentFixture<SingleUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleUserDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
