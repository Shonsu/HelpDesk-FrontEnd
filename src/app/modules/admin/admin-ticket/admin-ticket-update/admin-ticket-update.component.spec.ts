import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketUpdateComponent } from './admin-ticket-update.component';

describe('AdminTicketUpdateComponent', () => {
  let component: AdminTicketUpdateComponent;
  let fixture: ComponentFixture<AdminTicketUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTicketUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
