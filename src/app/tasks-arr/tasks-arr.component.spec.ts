import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksArrComponent } from './tasks-arr.component';

describe('TasksArrComponent', () => {
  let component: TasksArrComponent;
  let fixture: ComponentFixture<TasksArrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksArrComponent]
    });
    fixture = TestBed.createComponent(TasksArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
