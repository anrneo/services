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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.url_base = 'https://bitplacecoin.com/api_lar/public'; // URL to web api
    }
    ApiService.prototype.addUser = function (model) {
        var url = this.url_base + "/api/adduser";
        return this.http.post(url, model);
    };
    ApiService.prototype.userloggedin = function (model) {
        var url = this.url_base + "/api/userlogged";
        return this.http.post(url, model);
    };
    ApiService.prototype.addOrden = function (orden) {
        var url = this.url_base + "/api/services";
        return this.http.post(url, orden);
    };
    ApiService.prototype.getOrdenes = function () {
        var url = this.url_base + "/api/services";
        return this.http.get(url);
    };
    ApiService.prototype.getUser = function (id) {
        var url = this.url_base + "/api/getuser/" + id;
        return this.http.get(url);
    };
    ApiService.prototype.getClientes = function () {
        var url = this.url_base + "/api/getclientes";
        return this.http.get(url);
    };
    ApiService.prototype.getReport = function (cli) {
        var url = this.url_base + "/api/getreport/" + cli;
        return this.http.get(url);
    };
    ApiService.prototype.allUser = function () {
        var url = this.url_base + "/api/alluser";
        return this.http.get(url);
    };
    ApiService.prototype.update = function (model) {
        var url = this.url_base + "/api/services/" + model.id;
        return this.http.put(url, model);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
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
/* harmony import */ var _reporte_reporte_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporte/reporte.component */ "./src/app/reporte/reporte.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orden_orden_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orden/orden.component */ "./src/app/orden/orden.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home/:id', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'orden', component: _orden_orden_component__WEBPACK_IMPORTED_MODULE_5__["OrdenComponent"] },
    { path: 'report', component: _reporte_reporte_component__WEBPACK_IMPORTED_MODULE_0__["ReporteComponent"] },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <nav>\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\">ServiceTechnologies</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li *ngIf=\"isLogin()\"><a [routerLink]=\"['home', userId]\">Home</a></li>\n        <li><a routerLink=\"orden\">Crear Orden</a></li>\n        <li><a routerLink=\"report\">Reportes</a></li>\n        <li *ngIf=\"!isLogin()\"><a routerLink=\"login\">Login</a></li>\n        <li *ngIf=\"isLogin()\" (click)=\"logout()\"><a>Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>"

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
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.login = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.materialize();
        this.isLogin();
    };
    AppComponent.prototype.materialize = function () {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, Option);
        });
    };
    AppComponent.prototype.isLogin = function () {
        if (localStorage.getItem('id')) {
            this.userId = localStorage.getItem('id');
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('id');
        this.isLogin();
        this.router.navigate(["login"]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _orden_orden_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orden/orden.component */ "./src/app/orden/orden.component.ts");
/* harmony import */ var _reporte_reporte_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reporte/reporte.component */ "./src/app/reporte/reporte.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _orden_orden_component__WEBPACK_IMPORTED_MODULE_8__["OrdenComponent"],
                _reporte_reporte_component__WEBPACK_IMPORTED_MODULE_9__["ReporteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n    <div class=\"col s6\">\n\n   \n     <h6 *ngIf=\"user\">Ordenes creadas por: {{user.email}}</h6>\n    <table>\n        <thead>\n          <tr>\n              <th>ID Orden</th>\n              <th>Ciente</th>\n              <th></th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngFor=\"let dat of data\">\n            <td>{{dat.id}}</td>\n            <td>{{dat.cliente}}</td>\n            <td> <a (click)=\"editArt(dat.id)\" class=\"waves-effect waves-light btn-small blue\"><i class=\"material-icons\">edit</i></a>\n            </td>\n           \n          </tr>\n         \n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"col s6\">\n        <form  #registerForm=\"ngForm\" >\n            <div class=\"row\">\n              <div class=\"col s6\">\n                <div class=\"input-field\">\n                  <input placeholder=\"cliente\" type=\"text\" class=\"validate\" id=\"cliente\" required \n                  [(ngModel)]=\"model.cliente\" name=\"cliente\">\n                  <label for=\"cliente\">Cliente</label>\n                </div>\n              </div>\n              <div class=\"col s6\">\n                \n              </div>\n            </div>\n           \n          \n          \n        \n          \n          <table >\n            <thead>\n              <tr>\n                  <th>Artículo</th>\n                  <th>Tipo</th>\n                  <th>SKU</th>\n              </tr>\n            </thead>\n          \n            <tbody>\n              <tr *ngFor=\"let art of model.articulos, let i=index\">\n                  <td>\n                    <input type=\"text\" class=\"validate\"  required \n                    [(ngModel)]=\"model.articulos[i].articulo\" name=\"articulo{{i}}\">\n                  </td>\n                <td>\n                    <input type=\"text\" class=\"validate\"  required \n                    [(ngModel)]=\"model.articulos[i].tipo\" name=\"tipo{{i}}\">\n                </td>\n                <td>\n                    <input type=\"text\" class=\"validate\"  required \n                    [(ngModel)]=\"model.articulos[i].sku\" name=\"sku{{i}}\">\n                </td>\n              \n              </tr>\n           \n            </tbody>\n          </table>\n            <div class=\"progress\" *ngIf=\"preloader\">\n              <div class=\"indeterminate\"></div>\n          </div>\n          <br>\n          <div *ngIf=\"submitLogin\">\n            <button class=\"btn waves-effect waves-light btn-small\" style=\"float: right;\"  \n             (click)=\"addOrden(model)\">\n            Actualizar Orden<i class=\"material-icons right\">send</i>\n          </button>\n          \n          </div>\n          </form>\n    </div> \n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService) {
        this.apiService = apiService;
        this.model = {};
        this.preloader = false;
        this.submitLogin = true;
        this.data = [];
        this.user = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getOrdenes();
        this.getUser();
    };
    HomeComponent.prototype.getOrdenes = function () {
        var _this = this;
        this.apiService.getOrdenes()
            .subscribe(function (dat) {
            for (var _i = 0, dat_1 = dat; _i < dat_1.length; _i++) {
                var ite = dat_1[_i];
                if (ite.user_id == localStorage.getItem('id')) {
                    _this.data.push(ite);
                }
            }
        });
    };
    HomeComponent.prototype.getUser = function () {
        var _this = this;
        this.apiService.getUser(localStorage.getItem('id'))
            .subscribe(function (dat) {
            _this.user = dat;
        });
    };
    HomeComponent.prototype.editArt = function (id) {
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var ite = _a[_i];
            if (ite.id == id) {
                this.model = ite;
            }
        }
    };
    HomeComponent.prototype.addOrden = function (model) {
        var _this = this;
        this.preloader = true;
        this.submitLogin = false;
        this.apiService.update(model)
            .subscribe(function (dat) {
            _this.model = {};
            M.toast({ html: 'Orden actualizada correctamente', classes: 'rounded teal' });
            _this.preloader = false;
            _this.submitLogin = true;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\">\n      <div class=\"container\">\n          <div class=\"card-panel\">\n        <h4 *ngIf=\"registrar\">Iniciar sesión</h4> \n        <h4 *ngIf=\"!registrar\">Registrar Usuario</h4> \n        <br>\n        <form  #registerForm=\"ngForm\" >\n        \n          <div class=\"input-field\">\n            <input type=\"email\" class=\"validate\" id=\"email\" required \n            (keyup)=\"confirmEmail(model.email)\" (blur)=\"confirmEmail(model.email)\"\n            [(ngModel)]=\"model.email\" name=\"email\">\n            <label for=\"email\">Email</label>\n          </div>\n    \n          <div class=\"input-field\">\n            <input type=\"password\" class=\"validate\" id=\"password\" required (keyup)=\"countPass()\"\n            [(ngModel)]=\"model.password\" name=\"password\">\n            <label for=\"password\">Password  (mínimo 6 carácteres)</label>\n            <span class=\"new badge\" data-badge-caption=\"/ 6\">{{lengPass}}</span>\n          </div>\n    \n          <div class=\"input-field\" *ngIf=\"!registrar\">\n            <input type=\"password\" class=\"validate\" id=\"Confirm_password\" required  (keyup)=\"countPass()\"\n            (keyup)=\"confirmPass()\"\n            [(ngModel)]=\"model.confirm_password\" name=\"confirm_password\">\n            <label for=\"Confirm_password\">Confirma el Password\n                <i *ngIf=\"Confirm_password\" class=\"material-icons Small\" style=\"color:green\">check_circle</i>   \n            </label>\n            <span class=\"new badge\" data-badge-caption=\"/ 6\">{{lengPassCon}}</span>\n          </div>\n\n          <div class=\"progress\" *ngIf=\"preloader\">\n            <div class=\"indeterminate\"></div>\n        </div>\n        <div *ngIf=\"submitLogin\">\n          <a *ngIf=\"registrar\" (click)=\"register()\">Registrar</a>\n          <a *ngIf=\"!registrar\" (click)=\"login()\">Login</a>\n          <button *ngIf=\"!registrar\" class=\"btn waves-effect waves-light btn-small\" style=\"float: right;\"  \n          [disabled]=\"!registerForm.form.valid || !Confirm_password || !emailConfirm\" (click)=\"add()\">\n          Crear cuenta<i class=\"material-icons right\">send</i>\n        </button>\n        <button *ngIf=\"registrar\" class=\"btn waves-effect waves-light btn-small\" style=\"float: right;\"  \n        [disabled]=\"!registerForm.form.valid || !emailConfirm\" (click)=\"loginadd()\">\n        Login<i class=\"material-icons right\">send</i>\n      </button>\n        </div>\n        </form>\n <br>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.registrar = true;
        this.preloader = false;
        this.submitLogin = true;
        this.model = {};
        this.emailCheck = false;
        this.emailConfirm = false;
        this.lengPass = 0;
        this.lengPassCon = 0;
        this.validPass = false;
        this.Confirm_password = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.confirmPass = function () {
        if (this.countPass()) {
            this.Confirm_password = true;
        }
        else {
            this.Confirm_password = false;
        }
    };
    LoginComponent.prototype.countPass = function () {
        if (this.model.password) {
            this.lengPass = this.model.password.length;
        }
        if (this.model.confirm_password) {
            this.lengPassCon = this.model.confirm_password.length;
        }
        if (this.lengPass > 5 && this.lengPassCon > 5) {
            if (this.model.password == this.model.confirm_password) {
                this.validPass = true;
                return true;
            }
            else {
                this.validPass = false;
                return false;
            }
        }
        else {
            this.validPass = false;
            return false;
        }
    };
    LoginComponent.prototype.confirmEmail = function (email) {
        var regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (regExp.test(email)) {
            this.emailConfirm = true;
        }
        else {
            this.emailConfirm = false;
        }
    };
    LoginComponent.prototype.add = function () {
        var _this = this;
        var regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (regExp.test(this.model.email) && this.countPass()) {
            this.preloader = true;
            this.submitLogin = false;
            this.apiService.addUser(this.model)
                .subscribe(function (id) {
                localStorage.setItem('id', "" + id);
                _this.router.navigate(["home/" + id]);
                M.toast({ html: 'Usuario creado correctamente', classes: 'rounded teal' });
            }, function (error) {
                _this.preloader = false,
                    _this.submitLogin = true,
                    M.toast({ html: 'El email ingresado ya existe', classes: 'rounded teal' });
            });
        }
        else {
            M.toast({ html: 'Los datos ingresados son incorrectos', classes: 'rounded teal' });
        }
    };
    LoginComponent.prototype.register = function () {
        this.registrar = false;
    };
    LoginComponent.prototype.login = function () {
        this.registrar = true;
    };
    LoginComponent.prototype.loginadd = function () {
        var _this = this;
        this.apiService.userloggedin(this.model)
            .subscribe(function (dat) {
            if (dat) {
                localStorage.setItem('id', "" + dat.id);
                _this.router.navigate(["home/" + dat.id]);
                M.toast({ html: "Bienvenido " + dat.email, classes: 'rounded teal' });
            }
            else {
                M.toast({ html: 'Los datos son incorrectos', classes: 'rounded teal' });
            }
        }, function (error) {
            M.toast({ html: 'Los datos son incorrectos', classes: 'rounded teal' });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/orden/orden.component.css":
/*!*******************************************!*\
  !*** ./src/app/orden/orden.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orden/orden.component.html":
/*!********************************************!*\
  !*** ./src/app/orden/orden.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"card-panel\">\n<h4>Crear Orden</h4> \n<br>\n<form  #registerForm=\"ngForm\" >\n  <div class=\"row\">\n    <div class=\"col s6\">\n      <div class=\"input-field\">\n        <input type=\"text\" class=\"validate\" id=\"cliente\" required \n        [(ngModel)]=\"model.cliente\" name=\"cliente\">\n        <label for=\"cliente\">Cliente</label>\n      </div>\n    </div>\n    <div class=\"col s6\">\n      <label>Técnico</label>\n      <select class=\"browser-default\" name=\"user_id\"  [(ngModel)]=\"model.user_id\" required>\n        <option value=\"\"  disabled selected>Selecciona...</option>\n        <option *ngFor=\"let user of users\" value=\"{{user.id}}\">{{user.email}}</option>\n      </select>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col s4\">\n      <input type=\"hidden\"  [(ngModel)]=\"arti.id\" name=\"id\">\n      <div class=\"input-field\">\n        <input type=\"text\" class=\"validate\" id=\"articulo\"  \n        [(ngModel)]=\"arti.articulo\" name=\"articulo\">\n        <label for=\"articulo\">Nombre artículo</label>\n      </div>\n    </div>\n    <div class=\"col s4\">\n      <div class=\"input-field\">\n        <input type=\"text\" class=\"validate\" id=\"tipo\"  \n        [(ngModel)]=\"arti.tipo\" name=\"tipo\">\n        <label for=\"tipo\">Tipo artículo</label>\n      </div>\n    </div>\n    <div class=\"col s4\">\n      <div class=\"input-field\">\n        <input type=\"text\" class=\"validate\" id=\"sku\"  \n        [(ngModel)]=\"arti.sku\" name=\"sku\">\n        <label for=\"sku\">SKU artículo</label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n  <button *ngIf=\"!btn_articulo\" class=\"btn waves-effect waves-light btn-small blue\" style=\"float: right;\"  \n  (click)=\"editArticulo()\">\n  Actualizar Articulo</button>\n<button *ngIf=\"btn_articulo\" class=\"btn waves-effect waves-light btn-small\" style=\"float: right;\"  \n(click)=\"addArticulo()\">\nAdicionar Articulo</button>\n</div>\n\n<table *ngIf=\"tableArt\">\n  <thead>\n    <tr>\n        <th>Artículo</th>\n        <th>Tipo</th>\n        <th>SKU</th>\n        <th></th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let art of articulos, let i=index\">\n      <td>{{art.articulo}}</td>\n      <td>{{art.tipo}}</td>\n      <td>{{art.sku}}</td>\n      <td> <a (click)=\"editArt(i)\" class=\"waves-effect waves-light btn-small blue\"><i class=\"material-icons\">edit</i></a>\n        <a (click)=\"deleteArt(i)\" class=\"waves-effect waves-light btn-small red\"><i class=\"material-icons\">delete</i></a>\n      </td>\n    </tr>\n \n  </tbody>\n</table>\n  <div class=\"progress\" *ngIf=\"preloader\">\n    <div class=\"indeterminate\"></div>\n</div>\n<div *ngIf=\"submitLogin\">\n  <button class=\"btn waves-effect waves-light btn-small\" style=\"float: right;\"  \n  [disabled]=\"!registerForm.form.valid || articulos.length==0\" (click)=\"addOrden()\">\n  Crear Orden<i class=\"material-icons right\">send</i>\n</button>\n\n</div>\n</form>\n<br>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/orden/orden.component.ts":
/*!******************************************!*\
  !*** ./src/app/orden/orden.component.ts ***!
  \******************************************/
/*! exports provided: OrdenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenComponent", function() { return OrdenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdenComponent = /** @class */ (function () {
    function OrdenComponent(apiService) {
        this.apiService = apiService;
        this.model = {};
        this.preloader = false;
        this.submitLogin = true;
        this.users = [];
        this.arti = {};
        this.articulos = [];
        this.tableArt = false;
        this.btn_articulo = true;
    }
    OrdenComponent.prototype.ngOnInit = function () {
        this.allUser();
    };
    OrdenComponent.prototype.addOrden = function () {
        var _this = this;
        var arti = [];
        for (var _i = 0, _a = this.articulos; _i < _a.length; _i++) {
            var ite = _a[_i];
            var dat = { articulo: ite.articulo, tipo: ite.tipo, sku: ite.sku };
            arti.push(dat);
        }
        var orden = {
            model: this.model,
            arti: arti
        };
        this.preloader = true;
        this.submitLogin = false;
        this.apiService.addOrden(orden)
            .subscribe(function (dat) {
            _this.preloader = false;
            _this.submitLogin = true;
            _this.articulos = [];
            _this.tableArt = false;
            _this.arti = [];
            _this.model = {};
            M.toast({ html: 'Orden creada correctamente', classes: 'rounded teal' });
        });
    };
    OrdenComponent.prototype.allUser = function () {
        var _this = this;
        this.apiService.allUser()
            .subscribe(function (dat) {
            _this.users = dat;
        });
    };
    OrdenComponent.prototype.addArticulo = function () {
        this.articulos.push(this.arti);
        if (this.articulos.length > 0) {
            this.tableArt = true;
        }
        this.arti = [];
    };
    OrdenComponent.prototype.deleteArt = function (i) {
        this.articulos.splice(i, 1);
        if (this.articulos.length == 0) {
            this.tableArt = false;
        }
        this.arti = [];
        this.btn_articulo = true;
    };
    OrdenComponent.prototype.editArt = function (i) {
        this.arti = this.articulos[i];
        this.arti.id = i;
        this.btn_articulo = false;
    };
    OrdenComponent.prototype.editArticulo = function () {
        this.arti = [];
        this.btn_articulo = true;
    };
    OrdenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orden',
            template: __webpack_require__(/*! ./orden.component.html */ "./src/app/orden/orden.component.html"),
            styles: [__webpack_require__(/*! ./orden.component.css */ "./src/app/orden/orden.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], OrdenComponent);
    return OrdenComponent;
}());



/***/ }),

/***/ "./src/app/reporte/reporte.component.css":
/*!***********************************************!*\
  !*** ./src/app/reporte/reporte.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reporte/reporte.component.html":
/*!************************************************!*\
  !*** ./src/app/reporte/reporte.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container\">\n  <h6>Reporte por cliente</h6>\n    <form  #registerForm=\"ngForm\" >\n        <div class=\"row\">\n         \n          \n          <div class=\"col s6\">\n            <label>cliente</label>\n            <select class=\"browser-default\" required [(ngModel)]=\"model.cliente\" name=\"cliente\" (change)=\"changeSelec()\">\n              <option value=\"\"  disabled selected>Selecciona...</option>\n              <option *ngFor=\"let cli of clientes\" value=\"{{cli}}\">{{cli}}</option>\n            </select>\n          </div>\n        </div>\n       \n      \n      \n     \n      \n   \n        <div class=\"progress\" *ngIf=\"preloader\">\n          <div class=\"indeterminate\"></div>\n      </div>\n      <div *ngIf=\"submitLogin\">\n        <button class=\"btn waves-effect waves-light btn-small\" style=\"float: right;\"  \n        [disabled]=\"!registerForm.form.valid\" (click)=\"addOrden()\">\n        Crear Reporte<i class=\"material-icons right\">send</i>\n      </button>\n      \n      </div>\n      </form>\n      <br>\n      <p>{{json}}</p>\n</div>"

/***/ }),

/***/ "./src/app/reporte/reporte.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reporte/reporte.component.ts ***!
  \**********************************************/
/*! exports provided: ReporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteComponent", function() { return ReporteComponent; });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReporteComponent = /** @class */ (function () {
    function ReporteComponent(apiService) {
        this.apiService = apiService;
        this.model = {};
        this.json = '';
        this.preloader = false;
        this.submitLogin = true;
        this.clientes = [];
    }
    ReporteComponent.prototype.ngOnInit = function () {
        this.getClientes();
    };
    ReporteComponent.prototype.getClientes = function () {
        var _this = this;
        this.apiService.getClientes()
            .subscribe(function (dat) {
            _this.clientes = dat;
        });
    };
    ReporteComponent.prototype.addOrden = function () {
        var _this = this;
        this.apiService.getReport(this.model.cliente)
            .subscribe(function (dat) {
            _this.json = JSON.stringify(dat);
            M.toast({ html: 'Reporte creado correctamente', classes: 'rounded teal' });
            window.open("http://127.0.0.1:8000/api/getreport/" + _this.model.cliente, '_blank');
        });
    };
    ReporteComponent.prototype.changeSelec = function () {
        this.json = '';
    };
    ReporteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reporte',
            template: __webpack_require__(/*! ./reporte.component.html */ "./src/app/reporte/reporte.component.html"),
            styles: [__webpack_require__(/*! ./reporte.component.css */ "./src/app/reporte/reporte.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]])
    ], ReporteComponent);
    return ReporteComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/ang/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map