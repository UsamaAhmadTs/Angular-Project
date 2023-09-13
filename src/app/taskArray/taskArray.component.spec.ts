import { ComponentFixture, TestBed } from '@angular/core/testing';

  import {TaskArrayComponent} from "./taskArray.component";

describe('TaskArrayComponent', () => {
  let component: TaskArrayComponent;
  let fixture: ComponentFixture<TaskArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskArrayComponent]
    });
    fixture = TestBed.createComponent(TaskArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
