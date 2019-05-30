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
/* harmony import */ var _common_components_login_reg_login_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/components/login-reg/login-reg.component */ "./src/app/common/components/login-reg/login-reg.component.ts");
/* harmony import */ var _common_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/components/dashboard/dashboard.component */ "./src/app/common/components/dashboard/dashboard.component.ts");
<<<<<<< HEAD
/* harmony import */ var _common_components_my_events_my_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/components/my-events/my-events.component */ "./src/app/common/components/my-events/my-events.component.ts");
=======
/* harmony import */ var _common_components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/components/create-event/create-event.component */ "./src/app/common/components/create-event/create-event.component.ts");
/* harmony import */ var _common_components_my_events_my_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/components/my-events/my-events.component */ "./src/app/common/components/my-events/my-events.component.ts");
/* harmony import */ var _common_components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/components/about/about.component */ "./src/app/common/components/about/about.component.ts");


>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e






var routes = [
    { path: '', component: _common_components_login_reg_login_reg_component__WEBPACK_IMPORTED_MODULE_3__["LoginRegComponent"] },
    { path: 'dashboard', component: _common_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
<<<<<<< HEAD
    { path: 'events', component: _common_components_my_events_my_events_component__WEBPACK_IMPORTED_MODULE_5__["MyEventsComponent"] },
=======
    { path: 'new-event', component: _common_components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"] },
    { path: 'events', component: _common_components_my_events_my_events_component__WEBPACK_IMPORTED_MODULE_6__["MyEventsComponent"] },
<<<<<<< HEAD
    { path: 'about', component: _common_components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
=======

    { path: 'about', component: _common_components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e
>>>>>>> be14d10a5cf80b0f2a76a36c477986aec4e98159
];
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

module.exports = ".wrapper {\n   background-color: lightsteelblue\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRztBQUNIIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<nav class=\"navbar navbar-expand-sm bg-primary navbar-dark fixed-top\">\n  <img src=\"/assets/images/ricebowl.png\" height=\"35\" width=\"35\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Support</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search for food\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav><br> <Br> <br>\n\n\n<!-- <div class=\"footer\">\n  <a href=\"https://linkedin.com\" target=\"_blank\">\n    <img src=\"/assets/images/linkedin.png\" height=\"35\" width=\"35\">\n  </a>\n  <a href=\"https://facebook.com\" target=\"_blank\">\n    <img src=\"/assets/images/facebook.png\" height=\"35\" width=\"35\">\n  </a>\n  <a href=\"https://twitter.com\" target=\"_blank\">\n    <img src=\"/assets/images/twitter.png\" height=\"35\" width=\"35\">\n  </a>\n</div> -->\n<router-outlet></router-outlet>\n<!-- Footer -->\n<div class=\"footer\">\n  <footer class=\"page-footer font-small blue pt-4\">\n\n    <!-- Footer Links -->\n    <div class=\"container-fluid text-center text-md-left\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-6 mt-md-0 mt-3\">\n\n          <!-- Content -->\n          <h5 class=\"text-uppercase\">YumYum Incorporated</h5>\n          <p>Copyright\n\n            Content published on this website (digital downloads, images, texts, graphics, logos) is the property of\n            YumYum and/or its content creators and protected by international copyright laws. The entire compilation of\n            the content found on this website is the exclusive property of YumYum, with copyright authorship for this\n            compilation by YumYum.</p>\n\n        </div>\n        <!-- Grid column -->\n\n        <hr class=\"clearfix w-100 d-md-none pb-3\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mb-md-0 mb-3\">\n\n          <!-- Links -->\n          <h5 class=\"text-uppercase\">YumYum Rewards</h5>\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">Join Now</a>\n            </li>\n            <li>\n              <a href=\"#!\">Learn More</a>\n            </li>\n            <li>\n              <a href=\"#!\">Manage Account</a>\n            </li>\n            <a href=\"https://linkedin.com\" target=\"_blank\">\n              <img src=\"/assets/images/linkedin.png\" height=\"25\" width=\"25\">\n            </a>\n            <a href=\"https://facebook.com\" target=\"_blank\">\n              <img src=\"/assets/images/facebook.png\" height=\"25\" width=\"25\">\n            </a>\n            <a href=\"https://twitter.com\" target=\"_blank\">\n              <img src=\"/assets/images/twitter.png\" height=\"25\" width=\"25\">\n            </a>\n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mb-md-0 mb-3\">\n\n          <!-- Links -->\n          <h5 class=\"text-uppercase\">News & Info</h5>\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">Press Releases</a>\n            </li>\n            <li>\n              <a href=\"#!\">About YumYum</a>\n            </li>\n            <li>\n              <a href=\"#!\">Yum Yum Support</a>\n            </li>\n            <li>\n              <a href=\"#!\">YumYum API</a>\n            </li>\n\n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n      </div>\n      <!-- Grid row -->\n\n    </div>\n    <!-- Footer Links -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a href=\"https://mdbootstrap.com/education/bootstrap/\"> YumYum.com</a>\n    </div>\n    <!-- Copyright -->\n\n  </footer>\n  <!-- Footer -->\n</div>\n\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>"
=======
<<<<<<< HEAD
module.exports = "\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n\n<nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\n    <img src=\"/assets/images/ricebowl.png\" height=\"35\" width=\"35\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Support</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search for food\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n\n<div class=\"footer\">\n  <a href=\"https://linkedin.com\" target=\"_blank\">\n    <img src=\"/assets/images/linkedin.png\" height=\"35\" width=\"35\">\n  </a>\n  <a href=\"https://facebook.com\" target=\"_blank\">\n    <img src=\"/assets/images/facebook.png\" height=\"35\" width=\"35\">\n  </a>\n  <a href=\"https://twitter.com\" target=\"_blank\">\n    <img src=\"/assets/images/twitter.png\" height=\"35\" width=\"35\">\n  </a>\n</div>\n\n<router-outlet></router-outlet>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n"
=======
module.exports = "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n\n<nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\n    <img src=\"/assets/images/ricebowl.png\" height=\"35\" width=\"35\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Support</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search for food\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n\n<div class=\"footer\">\n  <a href=\"https://linkedin.com\" target=\"_blank\">\n    <img src=\"/assets/images/linkedin.png\" height=\"35\" width=\"35\">\n  </a>\n  <a href=\"https://facebook.com\" target=\"_blank\">\n    <img src=\"/assets/images/facebook.png\" height=\"35\" width=\"35\">\n  </a>\n  <a href=\"https://twitter.com\" target=\"_blank\">\n    <img src=\"/assets/images/twitter.png\" height=\"35\" width=\"35\">\n  </a>\n</div>\n\n<router-outlet></router-outlet>\n"

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n\n<nav class=\"navbar navbar-expand-sm bg-primary navbar-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">YumYum</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Support</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search for food\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav><br> <Br> <br>\n\n\n<!-- <div class=\"footer\">\n  <a href=\"https://linkedin.com\" target=\"_blank\">\n    <img src=\"/assets/images/linkedin.png\" height=\"35\" width=\"35\">\n  </a>\n  <a href=\"https://facebook.com\" target=\"_blank\">\n    <img src=\"/assets/images/facebook.png\" height=\"35\" width=\"35\">\n  </a>\n  <a href=\"https://twitter.com\" target=\"_blank\">\n    <img src=\"/assets/images/twitter.png\" height=\"35\" width=\"35\">\n  </a>\n</div> -->\n<router-outlet></router-outlet>\n<!-- Footer -->\n<div class=\"footer\">\n  <footer class=\"page-footer font-small blue pt-4\">\n\n    <!-- Footer Links -->\n    <div class=\"container-fluid text-center text-md-left\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-6 mt-md-0 mt-3\">\n\n          <!-- Content -->\n          <h5 class=\"text-uppercase\">YumYum Incorporated</h5>\n          <p>Copyright\n\n            Content published on this website (digital downloads, images, texts, graphics, logos) is the property of\n            YumYum and/or its content creators and protected by international copyright laws. The entire compilation of\n            the content found on this website is the exclusive property of YumYum, with copyright authorship for this\n            compilation by YumYum.</p>\n\n        </div>\n        <!-- Grid column -->\n\n        <hr class=\"clearfix w-100 d-md-none pb-3\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mb-md-0 mb-3\">\n\n          <!-- Links -->\n          <h5 class=\"text-uppercase\">YumYum Rewards</h5>\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">Join Now</a>\n            </li>\n            <li>\n              <a href=\"#!\">Learn More</a>\n            </li>\n            <li>\n              <a href=\"#!\">Manage Account</a>\n            </li>\n            <a href=\"https://linkedin.com\" target=\"_blank\">\n              <img src=\"/assets/images/linkedin.png\" height=\"25\" width=\"25\">\n            </a>\n            <a href=\"https://facebook.com\" target=\"_blank\">\n              <img src=\"/assets/images/facebook.png\" height=\"25\" width=\"25\">\n            </a>\n            <a href=\"https://twitter.com\" target=\"_blank\">\n              <img src=\"/assets/images/twitter.png\" height=\"25\" width=\"25\">\n            </a>\n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mb-md-0 mb-3\">\n\n          <!-- Links -->\n          <h5 class=\"text-uppercase\">News & Info</h5>\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">Press Releases</a>\n            </li>\n            <li>\n              <a href=\"#!\">About YumYum</a>\n            </li>\n            <li>\n              <a href=\"#!\">Yum Yum Support</a>\n            </li>\n            <li>\n              <a href=\"#!\">YumYum API</a>\n            </li>\n\n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n      </div>\n      <!-- Grid row -->\n\n    </div>\n    <!-- Footer Links -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a href=\"https://mdbootstrap.com/education/bootstrap/\"> YumYum.com</a>\n    </div>\n    <!-- Copyright -->\n\n\n  </footer>\n  <!-- Footer -->\n</div>"

>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e
>>>>>>> be14d10a5cf80b0f2a76a36c477986aec4e98159

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_components_login_reg_login_reg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/components/login-reg/login-reg.component */ "./src/app/common/components/login-reg/login-reg.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/components/dashboard/dashboard.component */ "./src/app/common/components/dashboard/dashboard.component.ts");
/* harmony import */ var _common_services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/services/http.service */ "./src/app/common/services/http.service.ts");
<<<<<<< HEAD
/* harmony import */ var _common_components_my_events_my_events_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/components/my-events/my-events.component */ "./src/app/common/components/my-events/my-events.component.ts");
=======
/* harmony import */ var _common_components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/components/create-event/create-event.component */ "./src/app/common/components/create-event/create-event.component.ts");
/* harmony import */ var _common_components_my_events_my_events_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/components/my-events/my-events.component */ "./src/app/common/components/my-events/my-events.component.ts");
/* harmony import */ var _common_components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/components/about/about.component */ "./src/app/common/components/about/about.component.ts");


>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _common_components_login_reg_login_reg_component__WEBPACK_IMPORTED_MODULE_6__["LoginRegComponent"],
                _common_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
<<<<<<< HEAD
                _common_components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_10__["CreateEventComponent"],
                _common_components_my_events_my_events_component__WEBPACK_IMPORTED_MODULE_11__["MyEventsComponent"],
                _common_components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
=======
<<<<<<< HEAD
                _common_components_my_events_my_events_component__WEBPACK_IMPORTED_MODULE_10__["MyEventsComponent"],
=======

                _common_components_my_events_my_events_component__WEBPACK_IMPORTED_MODULE_11__["MyEventsComponent"],

                _common_components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],

>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e
>>>>>>> be14d10a5cf80b0f2a76a36c477986aec4e98159
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_common_services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

<<<<<<< HEAD
=======
/***/ "./src/app/common/components/about/about.component.css":
/*!*************************************************************!*\
  !*** ./src/app/common/components/about/about.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; font-family: 'Noto Serif', serif; letter-spacing: 0px; font-size: 16px; color: #55595d; font-weight: 400; line-height: 32px; }\nh1, h2, h3, h4, h5, h6 { color: #113d71; margin: 0px 0px 12px 0px; font-family: 'Montserrat', sans-serif; font-weight: 400; line-height: 1; }\nh1 { font-size: 36px; }\nh2 { font-size: 26px; line-height: 38px; }\nh3 { font-size: 22px; line-height: 32px; }\nh4 { font-size: 20px; }\nh5 { font-size: 16px; line-height: 27px; }\nh6 { font-size: 12px; }\np { margin: 0 0 20px; line-height: 1.7; }\np:last-child { margin: 0px; }\nul, ol { font-family: 'Montserrat', sans-serif; }\na { text-decoration: none; color: #55595d; transition: all 0.3s; }\na:focus, a:hover { text-decoration: none; color: #c38d3f; }\n.content{padding-top:80px; padding-bottom:80px;}\n.mb40{margin-bottom:40px;}\n.team-block { }\n.team-img { margin-bottom: 20px; position: relative; }\n.team-img img { width: 100%; }\n.team-img img.border { border-color: #fff !important; }\n.social-media { position: absolute; bottom: 36px; opacity: 0; }\n.social-icon-box { margin-bottom: 5px; background-color: #193e6b; width: 46px; height: 46px; color: #ffffff; font-size: 16px; padding: 15px 19px 26px 16px; display: inline-block; line-height: 1.2; }\n.team-img:hover .social-media { opacity: 1; transition: 2s ease; }\n.team-block.active .social-media { opacity: 1; transition: 2s ease; }\nimg {\n    height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLG1DQUFtQyxFQUFFLGtDQUFrQyxFQUFFLGdDQUFnQyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUU7QUFDN00seUJBQXlCLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxxQ0FBcUMsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUU7QUFDNUksS0FBSyxlQUFlLEVBQUU7QUFDdEIsS0FBSyxlQUFlLEVBQUUsaUJBQWlCLEVBQUU7QUFDekMsS0FBSyxlQUFlLEVBQUUsaUJBQWlCLEVBQUU7QUFDekMsS0FBSyxlQUFlLEVBQUU7QUFDdEIsS0FBSyxlQUFlLEVBQUUsaUJBQWlCLEVBQUU7QUFDekMsS0FBSyxlQUFlLEVBQUU7QUFDdEIsSUFBSSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRTtBQUN4QyxlQUFlLFdBQVcsRUFBRTtBQUM1QixTQUFTLHFDQUFxQyxFQUFFO0FBQ2hELElBQUkscUJBQXFCLEVBQUUsY0FBYyxFQUEyRCxvQkFBb0IsRUFBRTtBQUMxSCxtQkFBbUIscUJBQXFCLEVBQUUsY0FBYyxFQUFFO0FBQzFELFNBQVMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFDL0MsTUFBTSxrQkFBa0IsQ0FBQztBQUV6QixjQUFjO0FBQ2QsWUFBWSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRTtBQUNyRCxnQkFBZ0IsV0FBVyxFQUFFO0FBQzdCLHVCQUF1Qiw2QkFBNkIsRUFBRTtBQUN0RCxnQkFBZ0Isa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRTtBQUM5RCxtQkFBbUIsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLDRCQUE0QixFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFO0FBQ3JNLGdDQUFnQyxVQUFVLEVBQUUsbUJBQW1CLEVBQUU7QUFDakUsbUNBQW1DLFVBQVUsRUFBRSxtQkFBbUIsRUFBRTtBQUVwRTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7IC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5OyBmb250LWZhbWlseTogJ05vdG8gU2VyaWYnLCBzZXJpZjsgbGV0dGVyLXNwYWNpbmc6IDBweDsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogIzU1NTk1ZDsgZm9udC13ZWlnaHQ6IDQwMDsgbGluZS1oZWlnaHQ6IDMycHg7IH1cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYgeyBjb2xvcjogIzExM2Q3MTsgbWFyZ2luOiAwcHggMHB4IDEycHggMHB4OyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogNDAwOyBsaW5lLWhlaWdodDogMTsgfVxuaDEgeyBmb250LXNpemU6IDM2cHg7IH1cbmgyIHsgZm9udC1zaXplOiAyNnB4OyBsaW5lLWhlaWdodDogMzhweDsgfVxuaDMgeyBmb250LXNpemU6IDIycHg7IGxpbmUtaGVpZ2h0OiAzMnB4OyB9XG5oNCB7IGZvbnQtc2l6ZTogMjBweDsgfVxuaDUgeyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAyN3B4OyB9XG5oNiB7IGZvbnQtc2l6ZTogMTJweDsgfVxucCB7IG1hcmdpbjogMCAwIDIwcHg7IGxpbmUtaGVpZ2h0OiAxLjc7IH1cbnA6bGFzdC1jaGlsZCB7IG1hcmdpbjogMHB4OyB9XG51bCwgb2wgeyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyB9XG5hIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzU1NTk1ZDsgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zczsgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zczsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IH1cbmE6Zm9jdXMsIGE6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiAjYzM4ZDNmOyB9XG4uY29udGVudHtwYWRkaW5nLXRvcDo4MHB4OyBwYWRkaW5nLWJvdHRvbTo4MHB4O31cbi5tYjQwe21hcmdpbi1ib3R0b206NDBweDt9XG5cbi50ZWFtLWJsb2NrIHsgfVxuLnRlYW0taW1nIHsgbWFyZ2luLWJvdHRvbTogMjBweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4udGVhbS1pbWcgaW1nIHsgd2lkdGg6IDEwMCU7IH1cbi50ZWFtLWltZyBpbWcuYm9yZGVyIHsgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cbi5zb2NpYWwtbWVkaWEgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMzZweDsgb3BhY2l0eTogMDsgfVxuLnNvY2lhbC1pY29uLWJveCB7IG1hcmdpbi1ib3R0b206IDVweDsgYmFja2dyb3VuZC1jb2xvcjogIzE5M2U2Yjsgd2lkdGg6IDQ2cHg7IGhlaWdodDogNDZweDsgY29sb3I6ICNmZmZmZmY7IGZvbnQtc2l6ZTogMTZweDsgcGFkZGluZzogMTVweCAxOXB4IDI2cHggMTZweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBsaW5lLWhlaWdodDogMS4yOyB9XG4udGVhbS1pbWc6aG92ZXIgLnNvY2lhbC1tZWRpYSB7IG9wYWNpdHk6IDE7IHRyYW5zaXRpb246IDJzIGVhc2U7IH1cbi50ZWFtLWJsb2NrLmFjdGl2ZSAuc29jaWFsLW1lZGlhIHsgb3BhY2l0eTogMTsgdHJhbnNpdGlvbjogMnMgZWFzZTsgfVxuXG5pbWcge1xuICAgIGhlaWdodDogMzUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/common/components/about/about.component.html":
/*!**************************************************************!*\
  !*** ./src/app/common/components/about/about.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.10/css/all.css\"\n  integrity=\"sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg\" crossorigin=\"anonymous\">\n<div class=\"content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb40 text-center\">\n        <h1 class=\"page-title\">Meet the founders of YumYum</h1>\n        <!-- /.section-title -->\n      </div>\n    </div>\n    <div class=\"row\">\n      <!-- team-block -->\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb30\">\n        <div data-aos=\"fade-up\" class=\"team-block\">\n          <div class=\"team-img\">\n            <a href=\"#\">\n              <img src=\"assets/images/moe.jpg\" alt=\"Moe\" class=\"img-fluid\">\n              <div class=\"social-media\">\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-facebook-f\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-twitter\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-google-plus-g\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-pinterest-p\"></i></a>\n              </div>\n            </a>\n          </div>\n          <div class=\"team-content\">\n            <h4>Mubarak Al Hmood</h4>\n          </div>\n        </div>\n      </div>\n      <!-- /.team-block -->\n      <!-- team-block -->\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb30\">\n        <div data-aos=\"fade-up\" class=\"team-block\">\n          <div class=\"team-img\">\n            <a href=\"#\">\n              <img src=\"assets/images/gino.jpeg\" alt=\"Gino\" class=\"img-fluid\">\n              <div class=\"social-media\">\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-facebook-f\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-twitter\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-google-plus-g\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-pinterest-p\"></i></a>\n              </div>\n            </a>\n          </div>\n          <div class=\"team-content\">\n            <h4>Eugene Benitez </h4>\n          </div>\n        </div>\n      </div>\n      <!-- /.team-block -->\n      <!-- team-block -->\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb30\">\n        <div data-aos=\"fade-up\" class=\"team-block\">\n          <div class=\"team-img\">\n            <a href=\"#\">\n              <img src=\"assets/images/brian.jpeg\" alt=\"Brian\" class=\"img-fluid\">\n              <div class=\"social-media\">\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-facebook-f\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-twitter\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-google-plus-g\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-pinterest-p\"></i></a>\n              </div>\n            </a>\n          </div>\n          <div class=\"team-content\">\n            <h4>Brian Kamikawa</h4>\n          </div>\n        </div>\n      </div>\n      <!-- /.team-block -->\n      <!-- team-block -->\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb30\">\n        <div data-aos=\"fade-up\" class=\"team-block\">\n          <div class=\"team-img\">\n            <a href=\"#\">\n              <img src=\"assets/images/andrew.jpeg\" alt=\"Andrew\" class=\"img-fluid\">\n              <div class=\"social-media\">\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-facebook-f\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-twitter\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-google-plus-g\"></i></a>\n                <br>\n                <a href=\"#\" class=\"social-icon-box\"><i class=\"fab fa-pinterest-p\"></i></a>\n              </div>\n            </a>\n          </div>\n          <div class=\"team-content\">\n            <h4>Andrew Quan</h4>\n          </div>\n        </div>\n        <!-- /.team-block -->\n      </div>\n\n    </div>\n    <div class=\"row\">\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/common/components/about/about.component.ts":
/*!************************************************************!*\
  !*** ./src/app/common/components/about/about.component.ts ***!
  \************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/common/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/common/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/common/components/create-event/create-event.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/common/components/create-event/create-event.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left {\n    display: inline-block;\n    width: 675px;\n}\n.right {\n    display: inline-block;\n    width: 675px;\n    margin-left: 30px;\n}\n.leftside {\n    display: inline-block;\n    width: 400px;\n}\n.link {\n    border: none;\n    background-color: white;\n    color: blue;\n    text-decoration: underline;\n}\n.underline {\n    border-bottom: 2px solid black;\n    border-top: 2px solid black;\n    text-align: center;\n\n}\n.form {\n    margin-left: 25px;\n    margin-right: 25px;\n}\n.table {\n    display: inline-block;\n    width: 240px;\n    text-align: center;\n}\n.add {\n    border-left: 2px solid black;\n    border-right: 2px solid black;\n    text-align: center;\n}\n.add1 {\n    text-align: center;\n}\n.add3 {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvY3JlYXRlLWV2ZW50L2NyZWF0ZS1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9jcmVhdGUtZXZlbnQvY3JlYXRlLWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2NzVweDtcbn1cbi5yaWdodCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2NzVweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmxlZnRzaWRlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuLmxpbmsge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi51bmRlcmxpbmUge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG4uZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuLnRhYmxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hZGQge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFkZDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hZGQzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/common/components/create-event/create-event.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/common/components/create-event/create-event.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div  style=\"text-align:center\"> \n      <h3>BIG BOY</h3>\n      <img src=\"/assets/images/andrew.jpg\" width=\"300\"><br>\n      <button class=\"link\" [routerLink]=\"['/events']\">My Events</button> \n    </div>  \n  </div>\n  <div class=\"col-6\">\n    <br><h4 class=\"underline\">Featured Restaurants</h4>\n    <div class=\"row\">\n      <div class=\"col add1\">\n        <h5>Upcoming</h5>\n        <h6>Hambones</h6>\n        <h6>Habuya</h6>\n      </div>\n      <div class=\"col add\">\n        <h5>Wish List</h5>\n        <h6>Stinking Rose</h6>\n        <h6>JR BBQ</h6>\n      </div>\n      <div class=\"col add3\">\n        <h5>Popular</h5>\n        <h6>placeholder</h6>\n        <h6>placeholder</h6>\n      </div>\n    </div><br>\n    \n    <h4 class=\"underline\">Create Event</h4>\n    <form class=\"form\" (submit)=\"createEvent()\">\n      <div class=\"form-group\">\n        <label for=\"restaurant_name\">Restaurant name</label>\n        <input type=\"restaurant_name\" class=\"form-control\" id=\"restaurant_name\" placeholder=\"Restaurant name\"\n          name=\"createEvent.restaurant_name\" [(ngModel)]=\"createEvent.restaurant_name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"date\">Date</label>\n        <input type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"Date\"\n          name=\"createEvent.date\" [(ngModel)]=\"createEvent.date\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"time\">Time</label>\n        <input type=\"time\" class=\"form-control\" id=\"time\" placeholder=\"datetime\" \n          name=\"createEvent.time\" [(ngModel)]=\"createEvent.time\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"address\">Street Address</label>\n          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Street Address\" \n            name=\"createEvent.address\" [(ngModel)]=\"createEvent.address\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"city\">City</label>\n          <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\" \n            name=\"createEvent.city\" [(ngModel)]=\"createEvent.city\">\n      </div>\n\n    \n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n  </div>\n  <div style=\"text-align:center\" class=\"col\">\n      <h4>My YumYum</h4><br>\n      <img src=\"/assets/images/innout.jpg\"   height=\"150\" width=\"150\"><br><br>\n      <img src=\"/assets/images/wingstop.jpg\"   height=\"150\" width=\"150\"><br><br>\n      <img src=\"/assets/images/blaze.jpg\"   height=\"150\" width=\"150\"><br><br>\n  </div>\n</div>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n"

/***/ }),

/***/ "./src/app/common/components/create-event/create-event.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/create-event/create-event.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/common/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(router, http) {
        this.router = router;
        this.http = http;
        this.create = {
            user: '',
            name: '',
            date: null,
            time: null,
            address: '',
            city: '',
            zipcode: null,
        };
    }
    CreateEventComponent.prototype.ngOnInit = function () {
    };
    CreateEventComponent.prototype.createEvent = function () {
        var _this = this;
        this.http.addObject(this.createEvent)
            .subscribe(function (data) { return _this.create = data; });
    };
    CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/common/components/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.css */ "./src/app/common/components/create-event/create-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e
/***/ "./src/app/common/components/dashboard/dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/common/components/dashboard/dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".left {\n    display: inline-block;\n    width: 675px;\n}\n.right {\n    display: inline-block;\n    width: 675px;\n    margin-left: 30px;\n}\n.leftside {\n    display: inline-block;\n    width: 400px;\n}\n.link {\n    border: none;\n    background-color: white;\n    color: blue;\n    text-decoration: underline;\n}\n.link2 {\n    border: none;\n    background-color: white;\n    color: blue;\n    font-size: 20px;\n}\n.underline {\n    border-bottom: 2px solid black;\n    border-top: 2px solid black;\n    text-align: center;\n}\n.form {\n    margin-left: 25px;\n    margin-right: 25px;\n}\n.table {\n    display: inline-block;\n    width: 240px;\n    text-align: center;\n}\n.add {\n    border-left: 2px solid black;\n    border-right: 2px solid black;\n    text-align: center;\n}\n.add1 {\n    text-align: center;\n}\n.add3 {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDY3NXB4O1xufVxuLnJpZ2h0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDY3NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ubGVmdHNpZGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDAwcHg7XG59XG4ubGluayB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmxpbmsyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnVuZGVybGluZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuLnRhYmxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hZGQge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFkZDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hZGQzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"
=======
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"
>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e

/***/ }),

/***/ "./src/app/common/components/dashboard/dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/common/components/dashboard/dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div  style=\"text-align:center\"> \n      <h3>BIG BOY</h3>\n      <img src=\"/assets/images/andrew.jpg\" width=\"300\"><br>\n      <button class=\"link\" [routerLink]=\"['/events']\">My Events</button> \n    </div>  \n  </div>\n  <div class=\"col-6\">\n    <br><h4 class=\"underline\">Featured Restaurants</h4>\n    <div class=\"row\">\n      <div class=\"col add1\">\n        <h5>Upcoming</h5>\n        <h6>Hambones</h6>\n        <h6>Habuya</h6>\n      </div>\n      <div class=\"col add\">\n        <h5>Wish List</h5>\n        <h6>Stinking Rose</h6>\n        <h6>JR BBQ</h6>\n      </div>\n      <div class=\"col add3\">\n        <h5>Popular</h5>\n        <h6>placeholder</h6>\n        <h6>placeholder</h6>\n      </div>\n    </div><br>\n    \n    \n    \n    <button class=\"underline link2 col\" (click)=\"form()\">Create Event</button>\n    <form class=\"form\" (submit)=\"createEvent()\">\n      <div *ngIf=\"createForm\">\n        <div class=\"form-group\">\n          <br><label for=\"restaurant_name\">Restaurant name</label>\n          <input type=\"restaurant_name\" class=\"form-control\" id=\"restaurant_name\" placeholder=\"Restaurant name\"\n            name=\"createEvent.restaurant_name\" [(ngModel)]=\"createEvent.restaurant_name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"date\">Date</label>\n          <input type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"Date\"\n            name=\"createEvent.date\" [(ngModel)]=\"createEvent.date\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"time\">Time</label>\n          <input type=\"time\" class=\"form-control\" id=\"time\" placeholder=\"datetime\" \n            name=\"createEvent.time\" [(ngModel)]=\"createEvent.time\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"address\">Street Address</label>\n            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Street Address\" \n              name=\"createEvent.address\" [(ngModel)]=\"createEvent.address\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"city\">City</label>\n            <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\" \n              name=\"createEvent.city\" [(ngModel)]=\"createEvent.city\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        <button class=\"btn btn-primary\" style=\"margin-left: 10px\" (click)=\"cancel()\">Cancel</button>\n      </div>\n    \n      \n    </form>\n  \n  </div>\n  <div style=\"text-align:center\" class=\"col\">\n      <h4>My YumYum</h4><br>\n      <img src=\"/assets/images/innout.jpg\"   height=\"150\" width=\"150\"><br><br>\n      <img src=\"/assets/images/wingstop.jpg\"   height=\"150\" width=\"150\"><br><br>\n      <img src=\"/assets/images/blaze.jpg\"   height=\"150\" width=\"150\"><br><br>\n  </div>\n  "
=======
module.exports = "<p>\n  dashboard works!\n</p>\n"
>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e

/***/ }),

/***/ "./src/app/common/components/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/common/components/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/common/services/http.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, http) {
        this.router = router;
        this.http = http;
<<<<<<< HEAD
        this.createForm = false;
        this.create = {
            user: '',
            name: '',
            date: null,
            time: null,
            address: '',
            city: '',
            zipcode: null,
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.form = function () {
        this.createForm = true;
    };
    DashboardComponent.prototype.cancel = function () {
        this.createForm = false;
    };
    DashboardComponent.prototype.createEvent = function () {
        var _this = this;
        this.http.addObject(this.createEvent)
            .subscribe(function (data) { return _this.create = data; });
=======
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.checkLoggedIn();
        console.log(localStorage);
    };
    DashboardComponent.prototype.checkLoggedIn = function () {
        if (localStorage.length == 0) {
            this.router.navigateByUrl('');
        }
>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/common/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/common/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/common/components/login-reg/login-reg.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/common/components/login-reg/login-reg.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2xvZ2luLXJlZy9sb2dpbi1yZWcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/common/components/login-reg/login-reg.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/common/components/login-reg/login-reg.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n\n      <h1>Registration:</h1>\n      <br>\n      <form (submit)=\"register()\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">First Name:</label>\n          <input type=\"first_name\" class=\"form-control\" id=\"exampleInputfirst_name1\" placeholder=\"first_name\"\n            name=\"createUser.first_name\" [(ngModel)]=\"createUser.first_name\">\n          <small style=\"color:red\">{{UserError.first_name}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Last Name:</label>\n          <input type=\"last_name\" class=\"form-control\" id=\"exampleInputlast_name1\" placeholder=\"last_name\"\n            name=\"createUser.last_name\" [(ngModel)]=\"createUser.last_name\">\n          <small style=\"color:red\">{{UserError.last_name}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email Address:</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n            placeholder=\"Enter email\" name=\"createUser.email\" [(ngModel)]=\"createUser.email\">\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          <small style=\"color:red\">{{UserError.email}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password:</label>\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\"\n            name=\"createUser.password\" [(ngModel)]=\"createUser.password\">\n          <small style=\"color:red\">{{UserError.password}}</small>\n          <br>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </form>\n\n    </div>\n\n\n    <div class=\"col\">\n      <h1>Login:</h1>\n      <br>\n      <small style=\"color:red\">{{loginError}}</small>\n      <form (submit)=\"login()\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\n            name=\"loginUser.email\" [(ngModel)]=\"loginUser.email\">\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"loginUser.password\"\n            [(ngModel)]=\"loginUser.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n      </form>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/components/login-reg/login-reg.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/common/components/login-reg/login-reg.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegComponent", function() { return LoginRegComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/common/services/http.service.ts");




var LoginRegComponent = /** @class */ (function () {
    function LoginRegComponent(router, http) {
        this.router = router;
        this.http = http;
        this.createUser = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
        this.loginUser = {
            email: '',
            password: '',
        };
        this.UserError = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
    }
    LoginRegComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    LoginRegComponent.prototype.register = function () {
        var _this = this;
        console.log(this.createUser);
        this.http.register(this.createUser)
            .subscribe(function (data) {
            _this.UserError = {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
            };
            if (!data['errors']) {
                _this.router.navigateByUrl('');
            }
            else {
                for (var k in data['errors']) {
                    _this.UserError[k] = data['errors'][k]['message'];
                }
            }
        });
    };
    LoginRegComponent.prototype.login = function () {
        var _this = this;
        console.log(this.loginUser);
        this.http.login(this.loginUser)
            .subscribe(function (data) {
            _this.returnData = data;
            if (_this.returnData.password) {
                console.log(data);
                console.log("Login success!");
                localStorage.setItem('user._id', _this.returnData._id);
                console.log(localStorage);
                _this.router.navigateByUrl('dashboard');
            }
            else {
                _this.loginError = "Invalid Login.";
                return console.log("Invalid Login");
            }
        });
    };
    LoginRegComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-reg',
            template: __webpack_require__(/*! ./login-reg.component.html */ "./src/app/common/components/login-reg/login-reg.component.html"),
            styles: [__webpack_require__(/*! ./login-reg.component.css */ "./src/app/common/components/login-reg/login-reg.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], LoginRegComponent);
    return LoginRegComponent;
}());



/***/ }),

/***/ "./src/app/common/components/my-events/my-events.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/common/components/my-events/my-events.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvbXktZXZlbnRzL215LWV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvbXktZXZlbnRzL215LWV2ZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/components/my-events/my-events.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/common/components/my-events/my-events.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <br><img src=\"/assets/images/andrew.jpg\" width=\"300\"><br>\n    <h3>Upcoming Events</h3>\n</div>"

/***/ }),

/***/ "./src/app/common/components/my-events/my-events.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/common/components/my-events/my-events.component.ts ***!
  \********************************************************************/
/*! exports provided: MyEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEventsComponent", function() { return MyEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/common/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MyEventsComponent = /** @class */ (function () {
    function MyEventsComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    MyEventsComponent.prototype.ngOnInit = function () {
    };
    MyEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-events',
            template: __webpack_require__(/*! ./my-events.component.html */ "./src/app/common/components/my-events/my-events.component.html"),
            styles: [__webpack_require__(/*! ./my-events.component.css */ "./src/app/common/components/my-events/my-events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], MyEventsComponent);
    return MyEventsComponent;
}());



/***/ }),

/***/ "./src/app/common/services/http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/http.service.ts ***!
  \*************************************************/
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
        var _this = this;
        this._http = _http;
        this.login = function (data) { return _this._http.post('/sessions/login/', data); };
        this.register = function (data) { return _this._http.post('/sessions', data); };
        this.getObjects = function () { return _this._http.get('/api/objects'); };
        this.getObject = function (id) { return _this._http.get('api/objects/' + id); };
        this.addObject = function (data) { return _this._http.post('api/objects/', data); };
        this.updateObject = function (id, data) { return _this._http.put('api/objects/' + id, data); };
        this.deleteObject = function (id) { return _this._http.delete('api/objects/' + id); };
    }
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
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

module.exports = __webpack_require__(/*! /Users/andrewquan/Desktop/FoodAppProj/foodapplication/public/src/main.ts */"./src/main.ts");


<<<<<<< HEAD

=======
>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e
/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map