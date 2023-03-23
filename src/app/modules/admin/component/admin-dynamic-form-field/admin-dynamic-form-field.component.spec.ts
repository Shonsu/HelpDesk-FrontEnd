import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDynamicFormFieldComponent } from './admin-dynamic-form-field.component';

describe('AdminDynamicFormFieldComponent', () => {
  let component: AdminDynamicFormFieldComponent;
  let fixture: ComponentFixture<AdminDynamicFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDynamicFormFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDynamicFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
