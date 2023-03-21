import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSubcategoryAddComponent } from './admin-ticket-subcategory-add.component';

describe('AdminTicketSubcategoryAddComponent', () => {
  let component: AdminTicketSubcategoryAddComponent;
  let fixture: ComponentFixture<AdminTicketSubcategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketSubcategoryAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTicketSubcategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
