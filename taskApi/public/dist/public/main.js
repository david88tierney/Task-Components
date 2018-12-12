(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-tasks/all-tasks.component.css":
/*!***************************************************!*\
  !*** ./src/app/all-tasks/all-tasks.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC10YXNrcy9hbGwtdGFza3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/all-tasks/all-tasks.component.html":
/*!****************************************************!*\
  !*** ./src/app/all-tasks/all-tasks.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  all-tasks works!\n</p>\n"

/***/ }),

/***/ "./src/app/all-tasks/all-tasks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/all-tasks/all-tasks.component.ts ***!
  \**************************************************/
/*! exports provided: AllTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTasksComponent", function() { return AllTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AllTasksComponent = /** @class */ (function () {
    function AllTasksComponent() {
    }
    AllTasksComponent.prototype.ngOnInit = function () {
    };
    AllTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-tasks',
            template: __webpack_require__(/*! ./all-tasks.component.html */ "./src/app/all-tasks/all-tasks.component.html"),
            styles: [__webpack_require__(/*! ./all-tasks.component.css */ "./src/app/all-tasks/all-tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AllTasksComponent);
    return AllTasksComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  background-color: antiquewhite;\n  text-align: center;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1COztDQUVwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>{{ title }}!</h1>\n  <br>\n  <fieldset>\n    <legend>Make a Task</legend>\n    <form (submit)=\"makeTask()\">\n        <input type=\"text\" name=\"newTask.title\" [(ngModel)]='newTask.title' placeholder=\"title\" />\n        <input type=\"text\" name=\"newTask.description\" [(ngModel)]=\"newTask.description\" placeholder=\"description\" />\n      <input type=\"submit\" value=\"Create Yo Task!\" />\n    </form>\n  </fieldset>\n\n\n  <app-all-tasks></app-all-tasks>\n\n\n\n  <fieldset>\n    <legend>Task List</legend>\n      <ul *ngFor= \"let task of tasks\">\n        <li> {{task.title}} ,  {{ task.description}}\n            <form (submit)=\"removeTask(task._id)\">\n                <input type=\"submit\" value=\"Delete\" />\n            </form>\n            <button (click)=\"taskToEdit(task._id)\">Edit</button>\n\n\n            <!-- <app-edit *ngIf='BUTTONwasCLICKED' [LoadEditForm]='task'></app-edit> -->\n\n        </li>\n        </ul>\n    </fieldset>\n\n<app-edit *ngIf='BUTTONwasCLICKED' [taskToBeEdit]=\"golly\"></app-edit>\n\n\n\n\n\n\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Restful Tasks API';
        this.tasks = [];
        this.newTask = {
            'title': '',
            'description': ''
        };
        this.editTask = {
            'title': '',
            'description': ''
        };
        this.BUTTONwasCLICKED = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTasksFromService();
    };
    AppComponent.prototype.edit = function (task_id) {
        var _this = this;
        var observable = this._httpService.edit(task_id, this.editTask);
        observable.subscribe(function (data) {
            console.log(data);
            _this.golly = _this.editTask;
            // this.BUTTONwasCLICKED = false;
            _this.getTasksFromService();
            _this.editTask = {
                'title': '',
                'description': ''
            };
        });
    };
    AppComponent.prototype.receiveMesseage = function ($event) {
        this.editTask = $event;
        this.edit($event.id);
    };
    AppComponent.prototype.getTasksFromService = function () {
        var _this = this;
        var observable = this._httpService.getTasks();
        observable.subscribe(function (data) {
            console.log(data);
            _this.tasks = data['tasks'];
        });
    };
    AppComponent.prototype.makeTask = function () {
        var _this = this;
        var observable = this._httpService.createTask(this.newTask);
        observable.subscribe(function (data) {
            console.log(data);
            _this.getTasksFromService();
            _this.newTask = {
                'title': '',
                'description': ''
            };
        });
    };
    AppComponent.prototype.taskToEdit = function (task_id) {
        this.BUTTONwasCLICKED = true;
    };
    AppComponent.prototype.removeTask = function (task_id) {
        var _this = this;
        var observable = this._httpService.deleteTask(task_id);
        console.log('REMOVE TASK EXECUTED!', task_id);
        observable.subscribe(function (data) {
            _this.getTasksFromService();
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());

//   onButtonClick(): void {
//     console.log(`Click event is working`);
// }
// onButtonClickParam(num: Number): void {
//     console.log(`Click event is working with num param: ${num}`);
// }
// onButtonClickParams(num: Number, str: String): void {
//     console.log(`Click event is working with num param: ${num} and str param: ${str}`);
// }
// onButtonClickEvent(event: any): void {
//     console.log(`Click event is working with event: ${event}`);
// }


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _all_tasks_all_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-tasks/all-tasks.component */ "./src/app/all-tasks/all-tasks.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
                _all_tasks_all_tasks_component__WEBPACK_IMPORTED_MODULE_9__["AllTasksComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (submit)=\"sendEdit(taskToBeEdit)\">\n    <p>{{ taskToBeEdit.title }}</p>\n    <input type=\"text\" name=\"editTask.WHAT\" [(ngModel)]='editTask.WHAT' placeholder=\"{{taskToBeEdit.title}}\" />\n    <p>{{ taskToBeEdit.description }}</p>\n    <input type=\"text\" name=\"editTask.description\" [(ngModel)]=\"editTask.description\" placeholder=\"{{ taskToBeEdit.description}}\" />\n    <input type=\"submit\" value=\"Edit\" />\n</form>\n<!-- <form (submit)=\"edit(task._id)\">\n    <input type=\"text\" name=\"newTask.title\" [(ngModel)]='editTask.title' placeholder=\"{{task.title}}\" />\n    <input type=\"text\" name=\"editTask.description\" [(ngModel)]=\"editTask.description\" placeholder=\"{{ task.description}}\" />\n    <input type=\"submit\" value=\"Edit\" />\n</form> -->\n\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditComponent = /** @class */ (function () {
    function EditComponent() {
        this.editTask = {
            'title': '',
            'description': ''
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.sendEdit = function (task) {
        this.editTask = task;
        this.messageEvent.emit(this.editTask);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditComponent.prototype, "taskToBeEdit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditComponent.prototype, "messageEvent", void 0);
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getTasks = function () {
        return this._http.get('/tasks');
    };
    HttpService.prototype.createTask = function (newTask) {
        return this._http.post('/tasks', newTask);
    };
    HttpService.prototype.deleteTask = function (id) {
        console.log('DELETE TASK EXECUTED!', id);
        return this._http.delete("/tasks/" + id);
    };
    HttpService.prototype.addTask = function (newtask) {
        return this._http.post('/task', newtask);
    };
    HttpService.prototype.edit = function (id, edittask) {
        return this._http.put("/update/" + id, edittask);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidtierney/Desktop/CodingDojo/Mean/taskApi/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map