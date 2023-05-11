import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketPreviewComponent } from './admin-ticket-preview.component';

describe('AdminTicketPreviewComponent', () => {
  let component: AdminTicketPreviewComponent;
  let fixture: ComponentFixture<AdminTicketPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTicketPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
