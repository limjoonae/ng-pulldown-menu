import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'headMenu', type: 'text', description: `ใช้ระบุข้อความที่หัวเมนู`},
    { require: '*', name: 'pageList', type: 'array', description: `ใช้ในการรับค่าตัวแปร array ซึ่งประกอบด้วย key คือ routerLink=url path, menuName=ชื่อ Menu`},
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    ` 'gos-pulldown-menu': 'gos:pulldown-menu/{version}',`,
    `},`,
    ``,
    `packages: {`,
    ` 'gos-pulldown-menu': {`,
    `    main: './pulldown-menu.js',`,
    `    defaultExtension: 'js'`,
    `  },`,    
];

const APPMODULELINE: Array<any> = [
    `import { PulldownMenuComponent } from 'gos-pulldown-menu';`,
    `import { RouterModule, Routes } from '@angular/router';`,
    ``,
    `const appRoutes: Routes = [`,
    `  { path: '', component: AppComponent },`,
    `  { path: 'link_1', component: Link1Component },`,
    `  { path: 'link_2', component: Link2Component },`,
    `  { path: 'link_n', component: LinkNComponent },`,
    `  { path: '**', component: AppComponent }`,
    `];`,
    ``,
    `@NgModule({`,
    `   imports:      [ `,
    `       BrowserModule,`,
    `       RouterModule.forRoot(appRoutes), `,
    `   ],`,
    ``,
    `   declarations: [`,
    `       ..........`,
    `       PulldownMenuComponent,`,
    `       ..........`,
    `   ],`,
];

const APPCOMPONENTLINE: Array<any> = [
    `import { PageListModel } from 'gos-pulldown-menu';`,
    ``,
    `const CONST_VAR_NAME: PageListModel[] = [`,
    `   {routerLink: 'menu_1', menuName: 'Menu 1'},`,
    `   {routerLink: 'menu_2', menuName: 'Menu 2'},`,
    `   {routerLink: 'menu_n', menuName: 'Menu N'},`,
    `],`,
    ``,
    `export class AppComponent {`,
    `   array_variable = CONST_VAR_NAME;`,
    `}`,
];

const STYLELINE: Array<any> = [
    `.navbar-nav .nav-item{`,
    `    margin-left: 1rem!important;`,
    `}`,
];

const PAGELIST: Array<any> = [
  {routerLink: 'badge', menuName: 'Badge'},
  {routerLink: 'checkbox', menuName: 'Check Box'},
  {routerLink: 'textarea', menuName: 'Text Area'},
  {routerLink: 'textbox', menuName: 'Text Box'},
  {routerLink: 'texteditor', menuName: 'Text Editor'},
  {routerLink: 'popup', menuName: 'Popup'},
  {routerLink: 'progressbar', menuName: 'Progress Bar'},
  {routerLink: 'pulldown', menuName: 'Pulldown Menu'},
  {routerLink: 'radiobox', menuName: 'Radio Box'},
  {routerLink: 'sidebar', menuName: 'Side Bar'},
];

@Component({
  moduleId: module.id,
  selector: 'pulldown-menu-document',
  templateUrl: './pulldown-menu.document.html',
  styleUrls: ['./pulldown-menu.document.css']
})
export class PulldownMenuDocument implements OnInit {

  private componentTag: string = '<gos-pulldown-menu>';
  private componentDescription: string = `Pull down menu คือ เมนูที่แสดงรายการในลักษณะถูกดึงลง โดยการกดที่หัวเมนูหลัก  
      ตัวเมนูจะ hilight สีเมื่อผู้ใช้อยู่ในหน้าที่ตรงกับ url ของเมนูนั้นๆ 
      การใช้งานจะใช้ร่วมกับ router link ใน Angular 2 เพื่อความสะดวกในการ config path`;
  private version: string = '1.0';
  private releaseDate: string = '19/12/2016';
  private prefixSyntax: string = `<gos-pulldown-menu `;
  private attrSyntax: string = `headMenu="text" [pageList]="array_variable"`;
  private suffixSyntax: string = `></gos-pulldown-menu>`;
  private attributeList = ATTRIBUTELIST;
  private systemjsLine = SYSTEMJSLINE;
  private appModuleLine = APPMODULELINE;
  private appComponentLine = APPCOMPONENTLINE;

  pageList = PAGELIST;
  constructor() { }

  ngOnInit() {
  }

}
