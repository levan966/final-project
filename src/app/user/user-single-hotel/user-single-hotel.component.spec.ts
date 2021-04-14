import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSingleHotelComponent } from './user-single-hotel.component';

describe('UserSingleHotelComponent', () => {
  let component: UserSingleHotelComponent;
  let fixture: ComponentFixture<UserSingleHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSingleHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSingleHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
