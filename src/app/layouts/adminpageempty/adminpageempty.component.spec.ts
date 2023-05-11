import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpageemptyComponent } from './adminpageempty.component';

describe('AdminpageemptyComponent', () => {
  let component: AdminpageemptyComponent;
  let fixture: ComponentFixture<AdminpageemptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpageemptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpageemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
