import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketCategoryAddComponent } from './admin-category-add.component';

describe('AdminCategoryAddComponent', () => {
  let component: AdminTicketCategoryAddComponent;
  let fixture: ComponentFixture<AdminTicketCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketCategoryAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTicketCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
