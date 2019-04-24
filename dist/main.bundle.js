webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'stars/:id', component: __WEBPACK_IMPORTED_MODULE_2__details_details_component__["a" /* DetailsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-dashboard></app-dashboard>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Star Systems';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stars_stars_component__ = __webpack_require__("../../../../../src/app/stars/stars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__star_detail_star_detail_component__ = __webpack_require__("../../../../../src/app/star-detail/star-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stars_service__ = __webpack_require__("../../../../../src/app/stars.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__planets_planets_component__ = __webpack_require__("../../../../../src/app/planets/planets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__solar_radi_to_km_pipe__ = __webpack_require__("../../../../../src/app/solar-radi-to-km.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__kelvin_to_celsius_pipe__ = __webpack_require__("../../../../../src/app/kelvin-to-celsius.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__parsec_to_light_year_pipe__ = __webpack_require__("../../../../../src/app/parsec-to-light-year.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__stars_stars_component__["a" /* StarsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__star_detail_star_detail_component__["a" /* StarDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__planets_planets_component__["a" /* PlanetsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__solar_radi_to_km_pipe__["a" /* RadiiToKmPipe */],
                __WEBPACK_IMPORTED_MODULE_10__kelvin_to_celsius_pipe__["a" /* KelvinToCelsiusPipe */],
                __WEBPACK_IMPORTED_MODULE_11__parsec_to_light_year_pipe__["a" /* ParsecToLightYearPipe */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__search_result_search_result_component__["a" /* SearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_14__details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__messages_messages_component__["a" /* MessagesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__stars_service__["a" /* StarsService */], __WEBPACK_IMPORTED_MODULE_16__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n\tmargin: 1em 0;\n}\n\n.top-margin {\n\tmargin: 30px 0;\n}\n\n.spacing {\n\tmargin: 10px 0;\n}\n\nform {\n\tdisplay: inline;\n}\n\n.custom-padding {\n\tpadding: 8px;\n}\n\n.btn-icon {\n\tborder: none;\n}\n\n.btn-icon:hover {\n\tborder: none;\n}\n\n.nav-link {\n\tborder: 1px solid #083946;\n}\n\n.tab-pane {\n\tdisplay: inline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-margin\"></div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <div class=\"d-flex align-items-start flex-md-row justify-content-between\">\n        <form class=\"form-inline my-2 my-lg-0\" onsubmit=\"return false\">\n            <input class=\"form-control mr-sm-2\" placeholder=\"Search\" value='' #inputElem (keyup.enter)=\"searchByName(inputElem)\">\n            <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"searchByName(inputElem)\">\n              <i class=\"fa fa-search\" aria-hidden=\"true\">Search</i>\n            </button>\n        </form>\n        <!--\n          <button class=\"btn btn-icon btn-outline-success\" type=\"button\"\n          data-toggle=\"modal\" data-target=\"#settings\" (click)=\"settings()\" routerLink=\"settings\">\n            <i class=\"fa fa-cog fa-lg\" aria-hidden=\"true\"></i>\n          </button>\n        -->\n      </div>\n        <div class=\"spacing\"></div>\n        <ul class=\"nav nav-pills\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [ngClass]=\"{'active' : whichList === 'all'}\"\n              data-toggle=\"tab\" href=\"#all\" role=\"tab\" aria-controls=\"all\" aria-selected=\"true\"\n              (click)=\"allSelected()\">\n                All\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [ngClass]=\"{'active' : whichList === 'withPlanet'}\"\n              data-toggle=\"tab\" href=\"#withplanets\" role=\"tab\" aria-controls=\"withplanets\" aria-selected=\"false\"\n              (click)=\"withPlanetsSelected()\">\n                <span *ngIf=\"moreThenPlanets > 1\">More then {{moreThenPlanets}} Planets</span>\n                <span *ngIf=\"moreThenPlanets === 1\">More then {{moreThenPlanets}} Planet</span>\n              </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"searchResult\">\n                <a class=\"nav-link\" [ngClass]=\"{'active' : whichList === 'search'}\"\n                data-toggle=\"tab\" href=\"#search\" role=\"tab\" aria-controls=\"withplanets\" aria-selected=\"false\"\n                (click)=\"searchSelected()\">\n                  Search Result\n                </a>\n              </li>\n          </ul>\n\n      <ng-container >\n        <app-stars [style.display]=\"showListAll ? 'block' : 'none'\" [whichList]=\"'all'\" [moreThenPlanets]=\"moreThenPlanets\"></app-stars>\n      </ng-container>\n      <ng-container >\n        <app-stars [style.display]=\"showListWithPlanet ? 'block' : 'none'\" [whichList]=\"'withPlanet'\" [moreThenPlanets]=\"moreThenPlanets\"></app-stars>\n      </ng-container>\n      <ng-container >\n        <app-search-result [style.display]=\"showListSearch ? 'block' : 'none'\" [searchName]=\"searchName\" [whichList]=\"'search'\"></app-search-result>\n      </ng-container>\n\n      <app-messages></app-messages>\n    </div>\n    <div class=\"col-md-7\">\n\n        <div class=\"card\" *ngIf=\"showInfoText\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Please select Star System.</h4>\n              <p class=\"card-text\">Select System of interest from the list to display all available details</p>\n            </div>\n          </div>\n\n        <router-outlet (activate)='onActivate()'></router-outlet>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.moreThenPlanets = 1;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.searchResult = false;
        this.searchName = '';
        this.whichList = 'all';
        this.moreThenPlanets = 1;
        this.showInfoText = true;
        this.showListAll = true;
        this.showListWithPlanet = false;
        this.showListSearch = false;
    };
    /**
     * (click) callback function for UI tabs.
     */
    DashboardComponent.prototype.allSelected = function () {
        this.whichList = 'all';
        this.showListAll = true;
        this.showListWithPlanet = false;
        this.showListSearch = false;
    };
    /**
    * (click) callback function for UI tabs.
    */
    DashboardComponent.prototype.withPlanetsSelected = function () {
        this.whichList = 'withPlanet';
        this.showListAll = false;
        this.showListWithPlanet = true;
        this.showListSearch = false;
    };
    /**
    * (click) callback function for UI tabs.
    */
    DashboardComponent.prototype.searchSelected = function () {
        this.whichList = 'search';
        this.showListAll = false;
        this.showListWithPlanet = false;
        this.showListSearch = true;
    };
    /**
     * Get name that user is searching for.
     * It get's value of HTML input element
     *
     * @param input - HTMLInputElement
     */
    DashboardComponent.prototype.searchByName = function (input) {
        this.searchName = input.value;
        input.value = '';
        this.searchResult = true;
        this.searchSelected();
    };
    /**
     * route was activated which means star details
     * on screen. We no longer need to show message
     * to user to select star from list for details.
     * So we can set this.showInfoText to false.
     */
    DashboardComponent.prototype.onActivate = function () {
        this.showInfoText = false;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\" *ngIf=\"star\">\n  <h3 class=\"card-header\">Star System Details</h3>\n  <div class=\"card-body\" >\n    <!-- angular component -->\n    <app-star-detail [star]=\"star\"></app-star-detail>\n    <!--  ***************  -->\n  </div>\n  <app-planets [star]=\"star\"></app-planets>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stars_service__ = __webpack_require__("../../../../../src/app/stars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = (function () {
    function DetailsComponent(route, starServices) {
        this.route = route;
        this.starServices = starServices;
    }
    /**
     *  React to ID change
     */
    DetailsComponent.prototype.ngDoCheck = function () {
        if (this.oldId !== this.id) {
            this.getNewStar();
            this.oldId = this.id;
        }
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) { return _this.id = +params['id']; });
    };
    /**
     * Retrieve detail about single star by ID.
     */
    DetailsComponent.prototype.getNewStar = function () {
        var _this = this;
        this.starServices.getStarById(this.id)
            .subscribe(function (star) { return _this.star = star; });
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("../../../../../src/app/details/details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__stars_service__["a" /* StarsService */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kelvin-to-celsius.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KelvinToCelsiusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KelvinToCelsiusPipe = (function () {
    function KelvinToCelsiusPipe() {
    }
    KelvinToCelsiusPipe.prototype.transform = function (tempKelvin) {
        return (tempKelvin - 273.15).toFixed(3);
    };
    KelvinToCelsiusPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'kelvinToCelsius'
        })
    ], KelvinToCelsiusPipe);
    return KelvinToCelsiusPipe;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    /**
     * add message to messages list to show
     * and removes it after x seconds if second argument not true,
     *
     * @param message - message to add to list
     * @param sec - time before message removed from the list
     * @param dontRemove - if true message will not be removed from the list
     */
    MessageService.prototype.addForSec = function (message, sec, dontRemove) {
        this.messages.push(message);
        if (!dontRemove) {
            this.clearAfterSec(sec); // remove message after 2 seconds
        }
    };
    MessageService.prototype.clearAll = function () {
        this.messages = [];
    };
    MessageService.prototype.clearFirst = function () {
        if (this.messages) {
            this.messages.shift();
        }
    };
    MessageService.prototype.clearAfterSec = function (seconds) {
        var _this = this;
        setTimeout(function () {
            _this.clearFirst();
        }, seconds * 1000);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"messageService.messages.length\">\n  <div class=\"card text-white bg-warning mb-3\" style=\"max-width: 30rem;\">\n    <div class=\"card-body\">\n        <div *ngFor='let message of messageService.messages'> <span class=\"card-text\"><em>{{message}}</em></span> </div>\n    </div>\n  </div>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/parsec-to-light-year.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParsecToLightYearPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ParsecToLightYearPipe = (function () {
    function ParsecToLightYearPipe() {
    }
    ParsecToLightYearPipe.prototype.transform = function (parsec) {
        if (parsec) {
            return (parsec * 3.26156).toFixed(3);
        }
        else {
            return null;
        }
    };
    ParsecToLightYearPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'parsecToLy'
        })
    ], ParsecToLightYearPipe);
    return ParsecToLightYearPipe;
}());



/***/ }),

/***/ "../../../../../src/app/planets/planets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-link:hover, .btn-link:active {\n\tfont-weight: 700;\n}\n\n.custom-active {\n\tcolor: #B58900;\n\tfont-weight: 700;\n\t-webkit-text-decoration-line: underline;\n\t        text-decoration-line: underline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/planets/planets.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"planets\">\n  <div class=\"card-footer text-muted\" *ngIf='star.name != \"Sun\"'>\n    System Exoplanets\n  </div>\n  <div class=\"card-footer text-muted\" *ngIf='star.name == \"Sun\"'>\n    System Planets\n  </div>\n    <ng-container *ngFor=\"let planet of planets; let i=index\">\n          <button *ngIf=\"planet.name\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"{'custom-active': isSelected(i,planet) }\" (click)=\"onSelect(planet)\">\n              {{planet.name}}\n          </button>\n    </ng-container>\n\n    <div class=\"card-body\">\n    <ng-container *ngIf=\"selectedPlanet\">\n      <table class=\"table table-sm text-info\">\n        <tbody>\n          <tr>\n            <ng-container *ngIf=\"selectedPlanet.radius\">\n              <th scope=\"row\" class=\"text-muted\">Radius (km):</th>\n              <td>{{selectedPlanet.radius | radiiToKm: \"jovian\"}}</td>\n            </ng-container>\n            <ng-container *ngIf=\"selectedPlanet.age\">\n              <th scope=\"row\" class=\"text-muted\">Age (Gy):</th>\n              <td>{{selectedPlanet.age}} </td>\n            </ng-container>\n          </tr>\n          <tr>\n            <ng-container *ngIf=\"selectedPlanet.temperature\">\n              <th scope=\"row\" class=\"text-muted\">Temperature(°C):</th>\n              <td>{{selectedPlanet.temperature | kelvinToCelsius}}</td>\n            </ng-container>\n            <ng-container *ngIf=\"selectedPlanet.mass\">\n              <th scope=\"row\" class=\"text-muted\">Mass(M<sub>J</sub>):</th>\n              <td>{{selectedPlanet.mass}}</td>\n            </ng-container>\n          </tr>\n          <tr>\n              <ng-container *ngIf=\"selectedPlanet.discoveryMethod\">\n                <th scope=\"row\" class=\"text-muted\">Discovery method:</th>\n                <td>{{selectedPlanet.discoveryMethod}}</td>\n              </ng-container>\n              <ng-container *ngIf=\"selectedPlanet.discoveryDate\">\n                <th scope=\"row\" class=\"text-muted\">Discovery date:</th>\n                <td>{{selectedPlanet.discoveryDate | date : 'MMM d, y' }}</td>\n              </ng-container>\n           </tr>\n          <tr>\n              <ng-container *ngIf=\"selectedPlanet.list\">\n                <th scope=\"row\" class=\"text-muted\" >List:</th>\n                <td colspan=\"3\">{{selectedPlanet.list}}</td>\n              </ng-container>\n          </tr>\n        </tbody>\n      </table>\n\n      <div class=\"card-footer text-muted\" *ngIf=\"selectedPlanet.description\">\n          <h6><strong>Description:</strong></h6>\n          <p>\n            {{selectedPlanet.description}}\n          </p>\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/planets/planets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stars_service__ = __webpack_require__("../../../../../src/app/stars.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanetsComponent = (function () {
    function PlanetsComponent(starsService) {
        this.starsService = starsService;
        this.oldStarName = '';
    }
    PlanetsComponent.prototype.ngDoCheck = function () {
        if (this.star) {
            if (this.star.name !== this.oldStarName) {
                this.planets = [];
                this.getPlanets(this.star);
                this.oldStarName = this.star.name;
            }
        }
    };
    PlanetsComponent.prototype.getPlanets = function (star) {
        var _this = this;
        this.starsService.getPlanets(this.star._links.planets['href'])
            .finally(function () { return _this.selectedPlanet = _this.planets[0]; })
            .subscribe(function (planets) { return _this.planets = planets['_embedded']['planets']; });
    };
    PlanetsComponent.prototype.onSelect = function (planet) {
        this.selectedPlanet = planet;
    };
    PlanetsComponent.prototype.isSelected = function (index, planet) {
        if (this.selectedPlanet) {
            if (this.selectedPlanet.name === planet.name) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (index === 0) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PlanetsComponent.prototype, "star", void 0);
    PlanetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-planets',
            template: __webpack_require__("../../../../../src/app/planets/planets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/planets/planets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stars_service__["a" /* StarsService */]])
    ], PlanetsComponent);
    return PlanetsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n\tmargin: 0;\n}\n\n.custom-narrow {\n\tpadding: 2px 10px 2px 0;\n}\n\n.btn-custom, .btn-custom:active {\n\tborder: 1px solid #073642;\n\toutline: none;\n\toutline-width: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n      <tr class=\"table-active\">\n        <th scope=\"col\" colspan=3 class=\"custom-narrow\">\n            <div class=\"btn-group d-flex justify-content-end\" role=\"group\">\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary btn-custom\" (click)=\"backPg()\">\n                  <strong>&laquo;</strong>\n                </button>\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary btn-custom disabled\">\n                  <strong>Page {{page+1}} of {{totalPages}}</strong>\n                </button>\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary btn-custom\" (click)=\"forwardPg()\">\n                  <strong>&raquo;</strong>\n                </button>\n            </div>\n        </th>\n      </tr>\n    </thead>\n  <thead>\n    <tr>\n      <th scope=\"col\">Searched Name</th>\n      <th scope=\"col\">Canonical Name </th>\n      <th scope=\"col\">Distance from Sun</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let nws of nameWithStars\" routerLink=\"/stars/{{starId(nws)}}\">\n      <td>{{nws.name}}</td>\n      <td>{{nws.star.name}}</td>\n      <td>{{nws.star.distance | parsecToLy }}</td>\n    </tr>\n  </tbody>\n</table> \n"

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stars_service__ = __webpack_require__("../../../../../src/app/stars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultComponent = (function () {
    function SearchResultComponent(starsService) {
        this.starsService = starsService;
        this.page = 0;
        this.size = 10;
        this.sort = 'name,asc';
    }
    SearchResultComponent.prototype.ngOnInit = function () {
    };
    /**
     *  React to user actions
     *  Retrieve new data if user input new name.
     */
    SearchResultComponent.prototype.ngOnChanges = function () {
        if (this.oldSearchName !== this.searchName) {
            this.page = 0;
            this.oldSearchName = this.searchName;
        }
        this.getStarsByName(this.page, this.size, this.searchName, this.sort);
    };
    /**
     * Get stars by name from alternateNames repository
     *
     * @param page - page number
     * @param size - size of the pages
     * @param name - name to look for
     * @param sort - sort method (e.g. by name)
     */
    SearchResultComponent.prototype.getStarsByName = function (page, size, name, sort) {
        var _this = this;
        this.starsService.getStarsByName(page, size, name, sort)
            .finally(function () {
            _this.nameWithStars = _this.altNamesWithStars._embedded['alternateNames'];
            _this.totalPages = _this.altNamesWithStars.page.totalPages;
        })
            .subscribe(function (names) { return _this.altNamesWithStars = names; });
    };
    SearchResultComponent.prototype.forwardPg = function () {
        if (this.page < (this.totalPages - 1)) {
            this.page += 1;
        }
        this.getStarsByName(this.page, this.size, this.searchName, this.sort);
    };
    SearchResultComponent.prototype.backPg = function () {
        if (this.page > 0) {
            this.page -= 1;
            this.getStarsByName(this.page, this.size, this.searchName, this.sort);
        }
    };
    SearchResultComponent.prototype.starId = function (nws) {
        var id = nws._links.planets['href'].match(/\/\d*\/planets$/)[0];
        return id.replace('/planets', '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SearchResultComponent.prototype, "searchName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SearchResultComponent.prototype, "whichList", void 0);
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-result',
            template: __webpack_require__("../../../../../src/app/search-result/search-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stars_service__["a" /* StarsService */]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/solar-radi-to-km.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadiiToKmPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RadiiToKmPipe = (function () {
    function RadiiToKmPipe() {
    }
    /**
     * Pipe,
     * transforms Solar or Jovian Radii to Kilometers
     * @param value - value to be transformed
     * @param name - optional parameter to determin if value is SolarRadii or JovianRadii
     */
    RadiiToKmPipe.prototype.transform = function (value, name) {
        var rKm = 1;
        switch (name) {
            case 'solar':
                rKm = 695700;
                break;
            case 'jovian':
                rKm = 71492;
                break;
            default:
                rKm = 695700;
                break;
        }
        return (value * rKm).toFixed(3);
    };
    RadiiToKmPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'radiiToKm'
        })
    ], RadiiToKmPipe);
    return RadiiToKmPipe;
}());



/***/ }),

/***/ "../../../../../src/app/star-detail/star-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/star-detail/star-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"card-title text-primary\">Star Name: {{star.name}}</h5>\n  <ng-container *ngIf=\"hasAlts()\">\n    <h6 class=\"card-subtitle text-muted\">Alternative names: \n      <ng-container *ngFor=\"let alt of alts\"> <span *ngIf=\"alt.name != star.name\" class=\"text-info\"> {{alt.name}}, </span></ng-container>\n    </h6>\n  </ng-container>\n\n  <table class=\"table table-sm text-info\">\n    <tbody>\n      <tr>\n        <ng-container *ngIf=\"star.radius\">\n          <th scope=\"row\" class=\"text-muted\">Radius (km):</th>\n          <td>{{star.radius | radiiToKm: \"solar\"}}</td>\n        </ng-container>\n        <ng-container *ngIf=\"star.age\">\n          <th scope=\"row\" class=\"text-muted\">Age (Gy):</th>\n          <td>{{star.age}}</td>\n        </ng-container>\n      </tr>\n      <tr>\n        <ng-container *ngIf=\"star.temperature\">\n          <th scope=\"row\" class=\"text-muted\">Temperature (°C):</th>\n          <td>{{star.temperature | kelvinToCelsius}}</td>\n        </ng-container>\n        <ng-container *ngIf=\"star.mass\">\n          <th scope=\"row\" class=\"text-muted\">Mass (M☉):</th>\n          <td>{{star.mass}}</td>\n        </ng-container>\n      </tr>\n      <tr>\n          <ng-container *ngIf=\"star.distance\">\n            <th scope=\"row\" class=\"text-muted\">Distance from Sun (ly):</th>\n            <td>{{star.distance | parsecToLy }}</td>\n          </ng-container>\n          <ng-container *ngIf=\"star.numberOfPlanets\">\n            <th scope=\"row\" class=\"text-muted\">Number of Planets:</th>\n            <td>{{star.numberOfPlanets}}</td>\n          </ng-container>\n        </tr>\n    </tbody>\n  </table>\n"

/***/ }),

/***/ "../../../../../src/app/star-detail/star-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stars_service__ = __webpack_require__("../../../../../src/app/stars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarDetailComponent = (function () {
    function StarDetailComponent(starsService) {
        this.starsService = starsService;
        this.oldStarName = '';
    }
    /**
     * helper method
     * Returns true if star have alternative names
     * (used in template directive to guard against empty [])
     */
    StarDetailComponent.prototype.hasAlts = function () {
        if (this.alts) {
            return this.alts.length > 1;
        }
        else {
            return false;
        }
    };
    /**
     * Check if user selected different star.
     * Retrieve alternative names if star changed.
     */
    StarDetailComponent.prototype.ngDoCheck = function () {
        if (this.star) {
            if (this.star.name !== this.oldStarName) {
                this.getAltNames(this.star);
                this.oldStarName = this.star.name;
            }
        }
    };
    /**
     * Get additional alternative names for selected Star.
     * @param star - selected star: Star details.
     */
    StarDetailComponent.prototype.getAltNames = function (star) {
        var _this = this;
        var links = this.star._links;
        this.starsService.getAltNames(links.additionalNames['href'])
            .subscribe(function (names) { return _this.alts = names['_embedded']['alternateNames']; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StarDetailComponent.prototype, "star", void 0);
    StarDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-star-detail',
            template: __webpack_require__("../../../../../src/app/star-detail/star-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/star-detail/star-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stars_service__["a" /* StarsService */]])
    ], StarDetailComponent);
    return StarDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stars.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StarsService = (function () {
    function StarsService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.rootUri = encodeURI('http://webdevelopertest.playfusionservices.com/webapptest');
    }
    /** Log a message with the MessageService */
    StarsService.prototype.log = function (message, time) {
        this.messageService.addForSec(message, time);
    };
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    StarsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console
            // show message to the user.
            _this.log('Oh no! Something went wrong! Please retry.', 4);
            _this.log(operation + " failed: " + error.message, 4);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /**
     * get Stars from remote server using HTTP request
     *
     * @param page - page number to get
     * @param size - size of the pages to get
     * @param sort - by what to sort (e.g. name, distance, numberOfPlanets )
     * @param planetsCount - optional parameter - if present method will use server search method(findByNumberOfPlanetsGreaterThan)
     */
    StarsService.prototype.getStars = function (page, size, sort, planetsCount) {
        var partial;
        if (!planetsCount) {
            partial = encodeURI("/stars?page=" + page + "&size=" + size + "&sort=" + sort);
        }
        else {
            partial =
                encodeURI("/stars/search/findByNumberOfPlanetsGreaterThan?numberOfPlanets=" + planetsCount + "&page=" + page + "&size=" + size + "&sort=" + sort);
        }
        var uri = this.rootUri + partial;
        return this.http.get(uri)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('getStars')));
    };
    /**
     * get Stars from the server from alternateNames repository
     * using search method findByNameLike ()
     *
     * @param page - page number
     * @param size - size of the pages
     * @param name - name to find - this method automaticly adds wildcard at beginning and end of the name
     * @param sort - by what to sort (e.g. name )
     * @param strict - if strict is present and truthy wildcards will not by added to name
     */
    StarsService.prototype.getStarsByName = function (page, size, name, sort, strict) {
        var wildcard = '%';
        if (strict) {
            wildcard = '';
        }
        var partial = encodeURI(
        // tslint:disable-next-line:max-line-length
        "/alternateNames/search/findByNameLike?name=" + wildcard + name + wildcard + "&page=" + page + "&size=" + size + "&sort=" + sort + "&projection=NameWithStar");
        var uri = this.rootUri + partial;
        return this.http.get(uri)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('getStarsByName')));
    };
    /**
     * Get details about star with id from repository
     * @param id - star id in the stars repository
     */
    StarsService.prototype.getStarById = function (id) {
        var uri = encodeURI(this.rootUri + ("/stars/" + id));
        return this.http.get(encodeURI(uri))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('getStarById')));
    };
    /**
     * Get details about star
     * @param uri - full url (it should be acquired from server _links )
     */
    StarsService.prototype.getStar = function (uri) {
        return this.http.get(encodeURI(uri))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('getStar')));
    };
    /**
     * Get additional names and details about planets
     * @param uri - full url (it should be acquired from server _links )
     */
    StarsService.prototype.getPlanets = function (uri) {
        return this.http.get(uri)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('getPlanets', [])));
    };
    /**
     * Get alternative names for the star
     * @param uri - full url (it should be acquired from server _links )
     */
    StarsService.prototype.getAltNames = function (uri) {
        return this.http.get(uri)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('getAltNames', [])));
    };
    StarsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */]])
    ], StarsService);
    return StarsService;
}());



/***/ }),

/***/ "../../../../../src/app/stars/stars.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n\tmargin: 0;\n}\n\n.custom-narrow {\n\tpadding: 2px 10px 2px 0;\n}\n\n.btn-custom, .btn-custom:active {\n\tborder: 1px solid #073642;\n\toutline: none;\n\toutline-width: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stars/stars.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n      <tr class=\"table-active\">\n        <th scope=\"col\" colspan=3 class=\"custom-narrow\">\n            <div class=\"btn-group d-flex justify-content-end\" role=\"group\">\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary btn-custom\" (click)=\"backPg()\">\n                  <strong>&laquo;</strong>\n                </button>\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary btn-custom disabled\">\n                  <strong>Page {{page+1}} of {{totalPages}}</strong>\n                </button>\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary btn-custom\" (click)=\"forwardPg()\">\n                  <strong>&raquo;</strong>\n                </button>\n            </div>\n        </th>\n      </tr>\n    </thead>\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Distance <br>from Earth</th>\n      <th scope=\"col\">Number<br>of Planets</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let star of stars\" routerLink=\"/stars/{{starId(star)}}\">\n      <td>{{star.name}}</td>\n      <td>{{star.distance | parsecToLy }}</td>\n      <td>{{star.numberOfPlanets}}</td>\n    </tr>\n  </tbody>\n</table> \n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/stars/stars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stars_service__ = __webpack_require__("../../../../../src/app/stars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarsComponent = (function () {
    function StarsComponent(starsService) {
        this.starsService = starsService;
        this.page = 0;
        this.size = 10;
        this.sort = 'numberOfPlanets,asc';
    }
    /**
     * Helper method to get list of stars from server
     * it check this.whichList variable to decide
     * what list we need.
     * @param page - page number
     * @param size - size of the pages
     */
    StarsComponent.prototype.getData = function (page, size) {
        this.page = page;
        this.size = size;
        if (this.whichList === 'withPlanet') {
            this.sort = 'distance,asc';
            // this.moreThenPlanets parameters is passed to uri parameters
            // to retrieve only stars with more then planets.
            this.getStars(this.page, this.size, this.sort, this.moreThenPlanets);
        }
        else {
            this.sort = 'numberOfPlanets,desc';
            this.getStars(this.page, this.size, this.sort);
        }
    };
    /**
     * Retrieve data on component initialization
     */
    StarsComponent.prototype.ngOnInit = function () {
        this.getData(this.page, this.size);
    };
    /**
     * Retrive data on change (e.g. page changed, whichList changed )
     * change will be caused by user interaction
     */
    StarsComponent.prototype.ngOnChanges = function () {
        this.getData(this.page, this.size);
    };
    /**
     * Getting Stars from the server using starsService
     * this.starsService.getStars returns Observable that
     * we need to subscribe to.
     *
     * @param page - page number
     * @param size - size of the pages
     * @param sort - on what to sort data
     * @param planetsCount - optional parameter if we retrieving stars with more then number of planets.
     */
    StarsComponent.prototype.getStars = function (page, size, sort, planetsCount) {
        var _this = this;
        this.starsService.getStars(page, size, sort, planetsCount)
            .finally(function () {
            _this.stars = _this.starsRes._embedded.stars;
            _this.totalPages = _this.starsRes.page.totalPages;
        })
            .subscribe(function (stars) { return _this.starsRes = stars; });
    };
    /**
     * Method to get Star Id from links
     * @param star - star details retrievent from the server.
     */
    StarsComponent.prototype.starId = function (star) {
        return star._links.self['href'].match(/\/\d*$/)[0];
    };
    StarsComponent.prototype.forwardPg = function () {
        if (this.page < (this.totalPages - 1)) {
            this.page += 1;
        }
        this.getData(this.page, this.size);
    };
    StarsComponent.prototype.backPg = function () {
        if (this.page > 0) {
            this.page -= 1;
            this.getData(this.page, this.size);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], StarsComponent.prototype, "whichList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], StarsComponent.prototype, "moreThenPlanets", void 0);
    StarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stars',
            template: __webpack_require__("../../../../../src/app/stars/stars.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stars/stars.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stars_service__["a" /* StarsService */]])
    ], StarsComponent);
    return StarsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map