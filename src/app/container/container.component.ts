import {AfterContentInit, Component, ContentChild} from '@angular/core';

import {ManagerComponent} from "../manager/manager.component";

import {Constants} from '../constants';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(ManagerComponent) manager!: ManagerComponent;

  ngAfterContentInit(): void {
    this.manager.managerName = Constants.MANAGER_NAME;
  }
}
