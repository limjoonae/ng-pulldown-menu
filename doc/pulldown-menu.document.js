"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ATTRIBUTELIST = [
    { require: '*', name: 'headMenu', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E2B\u0E31\u0E27\u0E40\u0E21\u0E19\u0E39" },
    { require: '*', name: 'pageList', type: 'array', description: "\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E04\u0E48\u0E32\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23 array \u0E0B\u0E36\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 key \u0E04\u0E37\u0E2D routerLink=url path, menuName=\u0E0A\u0E37\u0E48\u0E2D Menu" },
];
var SYSTEMJSLINE = [
    "map: {",
    " 'gos-pulldown-menu': 'gos:pulldown-menu/{version}',",
    "},",
    "",
    "packages: {",
    " 'gos-pulldown-menu': {",
    "    main: './pulldown-menu.js',",
    "    defaultExtension: 'js'",
    "  },",
];
var APPMODULELINE = [
    "import { PulldownMenuComponent } from 'gos-pulldown-menu';",
    "import { RouterModule, Routes } from '@angular/router';",
    "",
    "const appRoutes: Routes = [",
    "  { path: '', component: AppComponent },",
    "  { path: 'link_1', component: Link1Component },",
    "  { path: 'link_2', component: Link2Component },",
    "  { path: 'link_n', component: LinkNComponent },",
    "  { path: '**', component: AppComponent }",
    "];",
    "",
    "@NgModule({",
    "   imports:      [ ",
    "       BrowserModule,",
    "       RouterModule.forRoot(appRoutes), ",
    "   ],",
    "",
    "   declarations: [",
    "   ..........",
    "   PulldownMenuComponent,",
    "   ..........",
    "],",
];
var APPCOMPONENTLINE = [
    "import { PageListModel } from 'gos-pulldown-menu';",
    "",
    "const CONST_VAR_NAME: PageListModel[] = [",
    "   {routerLink: 'menu_1', menuName: 'Menu 1'},",
    "   {routerLink: 'menu_2', menuName: 'Menu 2'},",
    "   {routerLink: 'menu_n', menuName: 'Menu N'},",
    "],",
    "",
    "export class AppComponent {",
    "   array_variable = CONST_VAR_NAME;",
    "}",
];
var STYLELINE = [
    ".navbar-nav .nav-item{",
    "    margin-left: 1rem!important;",
    "}",
];
var PAGELIST = [
    { routerLink: 'badge', menuName: 'Badge' },
    { routerLink: 'checkbox', menuName: 'Check Box' },
    { routerLink: 'textarea', menuName: 'Text Area' },
    { routerLink: 'textbox', menuName: 'Text Box' },
    { routerLink: 'texteditor', menuName: 'Text Editor' },
    { routerLink: 'popup', menuName: 'Popup' },
    { routerLink: 'progressbar', menuName: 'Progress Bar' },
    { routerLink: 'pulldown', menuName: 'Pulldown Menu' },
    { routerLink: 'radiobox', menuName: 'Radio Box' },
    { routerLink: 'sidebar', menuName: 'Side Bar' },
];
var PulldownMenuDocument = (function () {
    function PulldownMenuDocument() {
        this.componentTag = '<gos-pulldown-menu>';
        this.componentDescription = "Pull down menu \u0E04\u0E37\u0E2D \u0E40\u0E21\u0E19\u0E39\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E19\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E16\u0E39\u0E01\u0E14\u0E36\u0E07\u0E25\u0E07 \u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E01\u0E14\u0E17\u0E35\u0E48\u0E2B\u0E31\u0E27\u0E40\u0E21\u0E19\u0E39\u0E2B\u0E25\u0E31\u0E01  \n      \u0E15\u0E31\u0E27\u0E40\u0E21\u0E19\u0E39\u0E08\u0E30 hilight \u0E2A\u0E35\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A url \u0E02\u0E2D\u0E07\u0E40\u0E21\u0E19\u0E39\u0E19\u0E31\u0E49\u0E19\u0E46 \n      \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E08\u0E30\u0E43\u0E0A\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A router link \u0E43\u0E19 Angular 2 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E14\u0E27\u0E01\u0E43\u0E19\u0E01\u0E32\u0E23 config path";
        this.version = '1.0';
        this.releaseDate = '19/12/2016';
        this.prefixSyntax = "<gos-pulldown-menu ";
        this.attrSyntax = "headMenu=\"text\" [pageList]=\"array_variable\"";
        this.suffixSyntax = "></gos-pulldown-menu>";
        this.attributeList = ATTRIBUTELIST;
        this.systemjsLine = SYSTEMJSLINE;
        this.appModuleLine = APPMODULELINE;
        this.appComponentLine = APPCOMPONENTLINE;
        this.pageList = PAGELIST;
    }
    PulldownMenuDocument.prototype.ngOnInit = function () {
    };
    PulldownMenuDocument = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pulldown-menu-document',
            templateUrl: './pulldown-menu.document.html',
            styleUrls: ['./pulldown-menu.document.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PulldownMenuDocument);
    return PulldownMenuDocument;
}());
exports.PulldownMenuDocument = PulldownMenuDocument;
//# sourceMappingURL=pulldown-menu.document.js.map