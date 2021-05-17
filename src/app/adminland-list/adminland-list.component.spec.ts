import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlandListComponent } from './adminland-list.component';

describe('AdminlandListComponent', () => {
  let component: AdminlandListComponent;
  let fixture: ComponentFixture<AdminlandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlandListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
