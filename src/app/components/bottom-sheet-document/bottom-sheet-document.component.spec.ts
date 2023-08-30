import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetDocumentComponent } from './bottom-sheet-document.component';

describe('BottomSheetDocumentComponent', () => {
  let component: BottomSheetDocumentComponent;
  let fixture: ComponentFixture<BottomSheetDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
