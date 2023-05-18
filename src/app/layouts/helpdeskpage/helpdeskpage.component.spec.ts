import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskpageComponent as HelpdeskpageComponent } from './helpdeskpage.component';

describe('HelpdeskpageComponent', () => {
  let component: HelpdeskpageComponent;
  let fixture: ComponentFixture<HelpdeskpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpdeskpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpdeskpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
