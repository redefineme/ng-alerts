webpackJsonp([0,6],{

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by iZel on 4/27/17.
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
// import { ComponentsModule} from "../components/components.module"
var alerts_router_1 = __webpack_require__(350);
var alerts_components_1 = __webpack_require__(349);
var AlertsModule = (function () {
    function AlertsModule() {
    }
    return AlertsModule;
}());
AlertsModule = __decorate([
    core_1.NgModule({
        imports: [
            alerts_router_1.AlertsRouter,
        ],
        declarations: [
            alerts_components_1.AlertsComponents
        ]
    })
], AlertsModule);
exports.AlertsModule = AlertsModule;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/alerts.module.js.map

/***/ }),

/***/ 349:
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
var core_1 = __webpack_require__(8);
var ngAlertsService_1 = __webpack_require__(83);
var AlertsComponents = (function () {
    function AlertsComponents(ngAlerts) {
        this.ngAlerts = ngAlerts;
        this.ngAlerts.pushAlert({
            msg: 'test',
        });
    }
    AlertsComponents.prototype.addAlert = function () {
        this.ngAlerts.pushAlert({
            msg: Date.now(),
        });
    };
    return AlertsComponents;
}());
AlertsComponents = __decorate([
    core_1.Component({
        selector: 'alerts-component',
        template: __webpack_require__(351)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ngAlertsService_1.NgAlertsService !== "undefined" && ngAlertsService_1.NgAlertsService) === "function" && _a || Object])
], AlertsComponents);
exports.AlertsComponents = AlertsComponents;
var _a;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/alerts.components.js.map

/***/ }),

/***/ 350:
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
var core_1 = __webpack_require__(8);
var router_1 = __webpack_require__(143);
var alerts_components_1 = __webpack_require__(349);
var routes = [
    {
        path: '',
        data: {
            title: 'Alerts'
        },
        component: alerts_components_1.AlertsComponents
    }
];
var AlertsRouter = (function () {
    function AlertsRouter() {
    }
    return AlertsRouter;
}());
AlertsRouter = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], AlertsRouter);
exports.AlertsRouter = AlertsRouter;
//# sourceMappingURL=/Users/iZel/www/spaceHub/defaultTemplate/src/alerts.router.js.map

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n         Card title\n        </div>\n        <div class=\"card-block\">\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      <div class=\"card-footer\">Card footer</div>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addAlert()\">Add Alert</button>\n      </div>\n    </div><!--/.col-->\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map