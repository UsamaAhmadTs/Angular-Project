import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {Task} from "../task";

import {Constants} from "../constants";

@Component({
  selector: 'app-tasks-array',
  templateUrl: './taskArray.component.html',
  styleUrls: ['./taskArray.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TaskArrayComponent {
  @Input() taskTitle: string = '';
  @Input() tasks: Task[] = []
  @Input() taskCount: number = 0;
  @Input() role = Constants.ROLE_ADMIN;

  @Output() selectedTask = new EventEmitter<Task>();

  selectTask(task: Task) {
    this.selectedTask.emit(task)
  }
}
