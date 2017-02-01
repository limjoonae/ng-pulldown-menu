import { Component, OnInit, Input } from '@angular/core';

export class PageListModel {
  routerLink: string;
  menuName: string;
}

@Component({
  moduleId: module.id,
  selector: 'gos-pulldown-menu',
  templateUrl: './pulldown-menu.component.html',
  styleUrls: ['./pulldown-menu.component.css']
})
export class PulldownMenuComponent {

  @Input() headMenu: string;
  @Input() pageList: PageListModel[];

  constructor() { }

}
