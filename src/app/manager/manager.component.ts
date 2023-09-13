import {Component} from '@angular/core';

import {Constants} from "../constants";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent {
  managerName: string = Constants.OLD_MANAGER;
}
