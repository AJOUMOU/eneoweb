import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatersComponent } from './quaters.component';

describe('QuatersComponent', () => {
  let component: QuatersComponent;
  let fixture: ComponentFixture<QuatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
