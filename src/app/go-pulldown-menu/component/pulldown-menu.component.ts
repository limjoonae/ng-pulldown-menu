import { Component, OnInit, Input } from '@angular/core';

export class PageListModel {
  routerLink: string;
  outerHref: string;
  menuName: string;
  separated: boolean;
}

@Component({
  selector: 'go-pulldown-menu',
  templateUrl: './pulldown-menu.component.html',
  styleUrls: ['./pulldown-menu.component.css']
})
export class PulldownMenuComponent implements OnInit {

  @Input() headLabel: string = '';
  @Input() pageList: PageListModel[];

  constructor() { }

  ngOnInit() {
  }
}
