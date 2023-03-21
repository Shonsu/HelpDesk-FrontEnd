import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSubcategoryUpdateComponent } from './admin-ticket-subcategory-update.component';

describe('AdminTicketSubcategoryUpdateComponent', () => {
  let component: AdminTicketSubcategoryUpdateComponent;
  let fixture: ComponentFixture<AdminTicketSubcategoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketSubcategoryUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTicketSubcategoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
