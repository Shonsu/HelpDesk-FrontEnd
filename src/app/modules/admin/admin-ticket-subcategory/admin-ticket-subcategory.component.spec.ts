import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSubcategoryComponent } from './admin-ticket-subcategory.component';

describe('AdminTicketSubcategoryComponent', () => {
  let component: AdminTicketSubcategoryComponent;
  let fixture: ComponentFixture<AdminTicketSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketSubcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTicketSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
