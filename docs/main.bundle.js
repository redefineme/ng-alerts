webpackJsonp([2,6],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alerts/alerts.module": [
		349,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 139;


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(7);
var platform_browser_dynamic_1 = __webpack_require__(149);
var app_module_1 = __webpack_require__(151);
var environment_1 = __webpack_require__(158);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/main.js.map

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(7);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        // tslint:disable-next-line
        selector: 'body',
        template: __webpack_require__(313)
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/app.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(55);
var core_1 = __webpack_require__(7);
var common_1 = __webpack_require__(36);
var app_component_1 = __webpack_require__(150);
var sidebar_directive_1 = __webpack_require__(157);
// Routing Module
var app_routing_1 = __webpack_require__(152);
// Layouts
var full_layout_component_1 = __webpack_require__(87);
var simple_layout_component_1 = __webpack_require__(156);
var components_module_1 = __webpack_require__(153);
var ngAlertsService_1 = __webpack_require__(83);
function AlertConfig() {
    return new ngAlertsService_1.NgAlertsService({
        timeout: 3000,
        place: 'right-top-alert',
        size: 'default'
    });
}
exports.AlertConfig = AlertConfig;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_1.AppRoutingModule,
            components_module_1.ComponentsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            full_layout_component_1.FullLayoutComponent,
            simple_layout_component_1.SimpleLayoutComponent,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES
        ],
        providers: [{
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            },
            [
                {
                    provide: ngAlertsService_1.NgAlertsService,
                    useFactory: AlertConfig
                }
            ]
            // NgAlertsService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/app.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(7);
var router_1 = __webpack_require__(145);
// Layouts
var full_layout_component_1 = __webpack_require__(87);
exports.routes = [
    {
        path: '',
        redirectTo: 'alerts',
        pathMatch: 'full',
    },
    {
        path: '',
        component: full_layout_component_1.FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'alerts',
                loadChildren: './alerts/alerts.module#AlertsModule'
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/app.routing.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by iZel on 4/27/17.
 */
var core_1 = __webpack_require__(7);
var common_1 = __webpack_require__(36);
var ng_alerts_component_1 = __webpack_require__(155);
var alert_component_1 = __webpack_require__(154);
var alert_model_1 = __webpack_require__(86);
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        exports: [
            ng_alerts_component_1.NgAlertsComponent,
            alert_component_1.AlertComponent
        ],
        declarations: [
            ng_alerts_component_1.NgAlertsComponent,
            alert_component_1.AlertComponent
        ],
        providers: [
            alert_model_1.AlertModel
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
exports.AlertsComponents = [
    ng_alerts_component_1.NgAlertsComponent,
    alert_component_1.AlertComponent
];
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/components.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by iZel on 4/27/17.
 */
var core_1 = __webpack_require__(7);
var AlertComponent = (function () {
    function AlertComponent() {
        this.alert = {};
        this.onClosed = new core_1.EventEmitter();
        this.dissmiss = true;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.dissmiss = false;
            _this.onClosed.emit();
        }, this.alert.timeout);
    };
    return AlertComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "alert", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "onClosed", void 0);
AlertComponent = __decorate([
    core_1.Component({
        selector: '[single-alert]',
        template: __webpack_require__(314),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], AlertComponent);
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/alert.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by iZel on 4/27/17.
 */
var core_1 = __webpack_require__(7);
var ngAlertsService_1 = __webpack_require__(83);
var NgAlertsComponent = (function () {
    function NgAlertsComponent(alertsService) {
        this.alertsService = alertsService;
        this.options = {};
        this.alerts = [];
        this.queue = [];
        this._countsAlerts = 0;
    }
    NgAlertsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertsService.eventAlerts.subscribe(function (alert) {
            if (alert) {
                if (_this._countsAlerts < _this.options.limit) {
                    _this.alerts.unshift(alert);
                    _this._countsAlerts++;
                }
                else {
                    _this.queue.push(alert);
                }
            }
        });
        this.alertsService.eventOptions.subscribe(function (options) {
            if (options) {
                _this.options = options;
            }
        });
    };
    NgAlertsComponent.prototype.closed = function (e, alert) {
        this._countsAlerts--;
        if (this.queue.length) {
            this.alerts.unshift(this.queue.shift());
            this._countsAlerts++;
        }
    };
    return NgAlertsComponent;
}());
NgAlertsComponent = __decorate([
    core_1.Component({
        selector: 'ng-alerts',
        template: __webpack_require__(315),
        styles: [__webpack_require__(309)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ngAlertsService_1.NgAlertsService !== "undefined" && ngAlertsService_1.NgAlertsService) === "function" && _a || Object])
], NgAlertsComponent);
exports.NgAlertsComponent = NgAlertsComponent;
var _a;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/ng-alerts.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(7);
var SimpleLayoutComponent = (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent.prototype.ngOnInit = function () { };
    return SimpleLayoutComponent;
}());
SimpleLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: '<router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [])
], SimpleLayoutComponent);
exports.SimpleLayoutComponent = SimpleLayoutComponent;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/simple-layout.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(7);
/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    return SidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = __decorate([
    core_1.Directive({
        selector: '.sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], SidebarToggleDirective);
exports.SidebarToggleDirective = SidebarToggleDirective;
var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    return MobileSidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = __decorate([
    core_1.Directive({
        selector: '.mobile-sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], MobileSidebarToggleDirective);
exports.MobileSidebarToggleDirective = MobileSidebarToggleDirective;
/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    return SidebarOffCanvasCloseDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = __decorate([
    core_1.Directive({
        selector: '.sidebar-close',
    }),
    __metadata("design:paramtypes", [])
], SidebarOffCanvasCloseDirective);
exports.SidebarOffCanvasCloseDirective = SidebarOffCanvasCloseDirective;
exports.SIDEBAR_TOGGLE_DIRECTIVES = [SidebarToggleDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective];
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/sidebar.directive.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/environment.js.map

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)();
// imports


// module
exports.push([module.i, "\n:host{\n  width: 100%;\n}\n\n.dock-header{\n  position: fixed;\n  text-align: center;\n  opacity: 0.9;\n  z-index: 1500;\n}\n\n.dock-size-default{\n  width: 200px;\n}\n\n.dock-size-full{\n  width: 100%;\n}\n\n\n.right-top-alert{\n  right: 0px;\n  top:0px;\n}\n.right-bottom-alert{\n  right: 0px;\n  bottom: 0px;\n}\n.left-top-alert{\n  left: 0px;\n  top:0px;\n}\n.left-bottom-alert{\n  left: 0px;\n  bottom:0px;\n}\n.default-size-alert{\n  width: inherit;\n}\n\n.dock-header > div > .alert{\n  margin-bottom: 5px !important;\n  animation: intro 3s;\n  -webkit-animation: intro 3s;\n  -moz-animation: intro 3s;\n}\n\n@-webkit-keyframes intro {\n  0% {opacity: 0.6;}\n  20% {opacity: 0.9;}\n  40% {opacity: 1;}\n  60% {opacity: 1;}\n  80% {opacity: 0.9;}\n  100% {opacity: 0.6}\n}\n\n@keyframes intro {\n  0% {opacity: 0.6;}\n  20% {opacity: 0.9;}\n  40% {opacity: 1;}\n  60% {opacity: 1;}\n  80% {opacity: 0.9;}\n  100% {opacity: 0.6}\n}\n\nalert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<ng-alerts></ng-alerts>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'alert alert-'+alert.type\" *ngIf=\"dissmiss\">\n  <span>{{alert.msg}}</span>\n</div>\n"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"dock-header\" [ngClass]=\"options.place +' dock-size-'+options.size\">\n  <div single-alert *ngFor=\"let alert of alerts\" [alert]=\"alert\" (onClosed)=\"closed()\">\n  </div>\n</div>\n\n"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\">&#9776;</button>\n  <a class=\"navbar-brand\" href=\"#\"></a>\n\n  <ul class=\"nav navbar-nav hidden-md-down\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"https://www.techspacehub.com/\">&#9776;</a>\n    </li>\n    <li class=\"nav-item px-1\">\n      <a class=\"nav-link\" href=\"https://www.techspacehub.com/\">TechSpaceHub</a>\n    </li>\n  </ul>\n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item hidden-md-down\">\n      <a class=\"nav-link\" href=\"https://github.com/redefineme/ng-alerts\" target=\"_blank\">\n        <button type=\"button\" class=\"btn btn-secondary\" ><i class=\"icon-social-github\"></i> View Code </button></a>\n    </li>\n    <li class=\"nav-item hidden-md-down\">\n      <a class=\"nav-link\" href=\"https://github.com/redefineme/ng-alerts/archive/master.zip\">\n        <button type=\"button\" class=\"btn btn-secondary\" ><i class=\"icon-cloud-download\"></i> Download Code </button></a>\n    </li>\n  </ul>\n</header>\n\n<div class=\"app-body\">\n  <div class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/alerts']\"><i class=\"icon-exclamation\"></i> Alerts <span class=\"badge badge-info\">NEW</span></a>\n        </li>\n\n\n        <li class=\"nav-item hidden-md-up\">\n          <a class=\"nav-link\" href=\"https://github.com/redefineme/ng-alerts\" target=\"_blank\"> <i class=\"icon-social-github\"></i> View Code\n          </a>\n        </li>\n        <li class=\"nav-item hidden-md-up\">\n          <a class=\"nav-link\" href=\"https://github.com/redefineme/ng-alerts/archive/master.zip\">\n            <i class=\"icon-cloud-download\"></i> Download Code\n          </a>\n        </li>\n\n\n      </ul>\n    </nav>\n  </div>\n\n  <!-- Main content -->\n  <main class=\"main\">\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.conainer-fluid -->\n  </main>\n</div>\n\n<footer class=\"app-footer\">\n  <a href=\"https://www.techspacehub.com/\">TechSpaceHub</a> &copy; 2017 Redefineme.\n  <span class=\"float-right\">Powered by <a href=\"https://www.techspacehub.com/\">Redefineme</a></span>\n</footer>\n"

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by iZel on 4/27/17.
 */
var core_1 = __webpack_require__(7);
var alert_model_1 = __webpack_require__(86);
var BehaviorSubject_1 = __webpack_require__(126);
var NgAlertsService = (function () {
    function NgAlertsService(options) {
        this.eventAlerts = new BehaviorSubject_1.BehaviorSubject(null);
        this.eventOptions = new BehaviorSubject_1.BehaviorSubject(null);
        this.defaultOptions = new alert_model_1.AlertModel();
        Object.assign(this.defaultOptions, options);
        this.eventOptions.next(this.defaultOptions);
    }
    NgAlertsService.prototype.pushAlert = function (alert) {
        this.eventAlerts.next({
            type: alert.type || 'success',
            msg: alert.msg || 'Undefined',
            timeout: alert.timeout || this.defaultOptions.timeout
        });
    };
    NgAlertsService.prototype.getOptions = function () {
        return this.defaultOptions;
    };
    NgAlertsService.prototype.setOptions = function (options) {
        Object.assign(this.defaultOptions, options);
        this.eventOptions.next(this.defaultOptions);
    };
    return NgAlertsService;
}());
NgAlertsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alert_model_1.AlertModel !== "undefined" && alert_model_1.AlertModel) === "function" && _a || Object])
], NgAlertsService);
exports.NgAlertsService = NgAlertsService;
var _a;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/ngAlertsService.js.map

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by iZel on 4/27/17.
 */
var core_1 = __webpack_require__(7);
var AlertModel = (function () {
    function AlertModel() {
        this.timeout = 3000;
        this.place = 'right-top-alert';
        this.size = 'default';
        this.limit = 5;
        this.timeout = 3000;
        this.place = 'right-top-alert';
        this.size = 'default';
        this.limit = 5;
    }
    return AlertModel;
}());
AlertModel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AlertModel);
exports.AlertModel = AlertModel;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/alert.model.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(7);
var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    return FullLayoutComponent;
}());
FullLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: __webpack_require__(316)
    })
], FullLayoutComponent);
exports.FullLayoutComponent = FullLayoutComponent;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/full-layout.component.js.map

/***/ })

},[345]);
//# sourceMappingURL=main.bundle.js.map