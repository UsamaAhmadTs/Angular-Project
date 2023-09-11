import {AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';
import {ManagerComponent} from "../manager/manager.component";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements  OnInit, AfterContentInit{
  @ContentChild(ManagerComponent) manager!: ManagerComponent;
  ngAfterContentInit(): void {
    this.manager.managerName = 'ali';
  }

  ngOnInit(): void {
  }

}
