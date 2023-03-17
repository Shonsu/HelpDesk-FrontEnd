import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketCategoryUpdateComponent } from './admin-ticket-category-update.component';

describe('AdminTicketCategoryUpdateComponent', () => {
  let component: AdminTicketCategoryUpdateComponent;
  let fixture: ComponentFixture<AdminTicketCategoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketCategoryUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTicketCategoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
