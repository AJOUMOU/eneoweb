import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetDirectorsComponent } from './bottom-sheet-directors.component';

describe('BottomSheetDirectorsComponent', () => {
  let component: BottomSheetDirectorsComponent;
  let fixture: ComponentFixture<BottomSheetDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetDirectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
