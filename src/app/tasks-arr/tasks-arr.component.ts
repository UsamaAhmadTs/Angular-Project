import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { tasks } from '../mock-tasks';
import {Tasks} from "../tasks";

@Component({
  selector: 'app-tasks-arr',
  templateUrl: './tasks-arr.component.html',
  styleUrls: ['./tasks-arr.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TasksArrComponent implements OnChanges{
  @Input() taskTitle: string = '';
  @Input() tasks: Tasks[] = []
  @Input() taskCount: number = tasks.length;

  @Input() role = 'admin';

  @Output() selectedTask= new EventEmitter<Tasks>();

selectTask(task: Tasks){
  this.selectedTask.emit(task)
}
  ngOnChanges(changes: SimpleChanges): void {
  console.log(tasks);
  }


}
