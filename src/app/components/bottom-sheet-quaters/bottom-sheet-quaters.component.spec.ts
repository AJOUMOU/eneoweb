import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetQuatersComponent } from './bottom-sheet-quaters.component';

describe('BottomSheetQuatersComponent', () => {
  let component: BottomSheetQuatersComponent;
  let fixture: ComponentFixture<BottomSheetQuatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetQuatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetQuatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
