import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetAgentsComponent } from './bottom-sheet-agents.component';

describe('BottomSheetAgentsComponent', () => {
  let component: BottomSheetAgentsComponent;
  let fixture: ComponentFixture<BottomSheetAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetAgentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
