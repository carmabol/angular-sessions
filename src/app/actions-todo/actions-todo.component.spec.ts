import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsTodoComponent } from './actions-todo.component';

describe('ActionsTodoComponent', () => {
  let component: ActionsTodoComponent;
  let fixture: ComponentFixture<ActionsTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
