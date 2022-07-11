import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualModeComponent } from './visual-mode.component';

describe('VisualModeComponent', () => {
  let component: VisualModeComponent;
  let fixture: ComponentFixture<VisualModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
