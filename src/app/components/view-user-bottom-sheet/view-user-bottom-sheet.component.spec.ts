import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserBottomSheetComponent } from './view-user-bottom-sheet.component';

describe('ViewUserBottomSheetComponent', () => {
  let component: ViewUserBottomSheetComponent;
  let fixture: ComponentFixture<ViewUserBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserBottomSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
