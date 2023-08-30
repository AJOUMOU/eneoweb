import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetApdateQuaterComponent } from './bottom-sheet-apdate-quater.component';

describe('BottomSheetApdateQuaterComponent', () => {
  let component: BottomSheetApdateQuaterComponent;
  let fixture: ComponentFixture<BottomSheetApdateQuaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetApdateQuaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetApdateQuaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
