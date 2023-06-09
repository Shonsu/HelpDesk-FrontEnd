import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketAddComponent } from './admin-ticket-add.component';

describe('AdminTicketAddComponent', () => {
  let component: AdminTicketAddComponent;
  let fixture: ComponentFixture<AdminTicketAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTicketAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
