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

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".companySection{\r\n    background: #fff; min-height: 92.5vh; overflow: hidden;\r\n}\r\n.headerImage{\r\n    min-height: 350px; height: auto;  width: 100%;  position: relative;  background-image: url(\"https://images.unsplash.com/photo-1493689485253-f07fcbfc731b?auto=format&fit=crop&w=1033&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D\");\r\n    background-position: center center;  background-repeat:  no-repeat; background-attachment: fixed;  background-size:  cover;\r\n}\r\n.companySection .header{ position: absolute; top: 0; left: 0;\r\n    min-height: 100%; height: 100%; background-color:rgba(32,26,22,.7); color: #fff; padding: 20px; overflow: hidden;}\r\n.companySection .header .logo{color: #222; margin-right: 30px;}\r\n.companySection .header .logo img{height: 120px; width: 120px;}\r\n.companySection .header h1{margin-top: 35px; margin-left: -20px;}\r\n.companySection .header p{clear: both; display: block; width: 100%; text-align: justify; line-height: 150%;}\r\n.companySection ul{ padding: 20px; list-style: none; margin-top: -30px;}\r\n.companySection ul li{display: block; font-size: 16px; line-height: 200%; font-weight: 600;}\r\n.companySection ul li i{color: #4052B5; position: relative; bottom: -5px;}\r\n.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow: none; }\r\n.mat-expansion-panel-header{padding-left: 0; font-size: 16px; line-height: 200%; font-weight: 600;}\r\n.title{padding: 20px;}\r\n\r\n\r\n\r\n.teamSection{\r\n    background: #fff; padding: 30px 10px 20px 10px; margin-top: -20px; border-top:1px dotted #E5E5E5;\r\n}\r\n.leftRs, .rightRs {  visibility: hidden;  }\r\n.ourtTeamContainer{margin-top: 40px; padding-bottom: 10px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageContent animated fadeIn\">\r\n  <section class=\"companySection myContainer\">\r\n    <div class=\"headerImage\">\r\n      <div class=\"header\">\r\n        <a routerLink=\"../\" class=\"animated fadeInLeft left-float logo\"><img src=\"assets/IMG/logo201.png\" alt=\"\"/></a>\r\n        <h1 class=\"left-float\">MeshRise Company</h1>\r\n        <p class=\"animated fadeInUp\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"title\"><h2>Company Values</h2><span class=\"borderSpan\"></span></div>\r\n    <ul class=\"animated fadeInUp\">\r\n      <li><i class=\"material-icons\">done</i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n      <li>\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header><mat-panel-title><i class=\"material-icons\">done</i> value title</mat-panel-title></mat-expansion-panel-header>\r\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </li>\r\n      <li><i class=\"material-icons\">done</i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n      <li>\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header><mat-panel-title><i class=\"material-icons\">done</i> value title</mat-panel-title></mat-expansion-panel-header>\r\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </li>\r\n      <li><i class=\"material-icons\">done</i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n    </ul>\r\n  </section>\r\n  <!--end about company section-->\r\n\r\n\r\n  <section class=\"teamSection myContainer\">\r\n    <h1 class=\"center-align largTitle\">Our Team</h1><span class=\"borderSpan center-block\"></span>\r\n    <ngx-carousel [inputs]=\"carouselOne\">\r\n      <ngx-item NgxCarouselItem *ngFor=\"let number of [0,1,2]\" style=\"margin-bottom: 0; padding-bottom: 0;\">\r\n        <div class=\"ourtTeamContainer row\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let number of [0,1,2]\">\r\n            <div class=\"dataCard center-block center-align\">\r\n              <img src=\"https://semantic-ui.com/images/avatar2/large/matthew.png\" alt=\"img\" class=\"transition\"/>\r\n              <h1 class=\"transition\">person name</h1>\r\n              <p class=\"transition\">Create a culture of feedback and coaching. Encourage peer coaching and</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ngx-item>\r\n      <button mat-icon-button NgxCarouselPrev class='leftRs'><mat-icon aria-label=\"prev icon\">keyboard_arrow_left</mat-icon></button>\r\n      <button mat-icon-button NgxCarouselNext class='rightRs'><mat-icon aria-label=\"next icon\">keyboard_arrow_right</mat-icon></button>\r\n    </ngx-carousel>\r\n  </section>\r\n  <!--end about tem section-->\r\n\r\n  <app-footer></app-footer>\r\n  <!--end footer-->\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () { this.carouselOne = __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].carouselOne; };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'https://feedback2grow.herokuapp.com/';
    AppSettings.carouselOne = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        slide: 1,
        speed: 400,
        interval: 4000,
        load: 2,
        touch: true,
        loop: true,
        custom: 'banner',
        point: {
            visible: true,
            pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            position: absolute;\n            width: 100%;\n            bottom: 20px;\n            left: 0;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 999px;\n            background: #FF9D76;\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s ease all;\n          }\n          .ngxcarouselPoint li.active {\n              background: red;\n              width: 10px;\n          }"
        }
    };
    AppSettings.scrollOptions = {
        position: 'right', alwaysVisible: false, gridBackground: 'transparent', barBackground: '#C9C9C9',
        barWidth: '10', barMargin: '0', gridMargin: '0', gridWidth: '5', scrollSensitivity: .2
    };
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mobilesidenNavBtn{position: fixed;top:8px; right: 20px; z-index: 999999999; color: #222; display: none}\r\nmat-sidenav {  width: 200px;  }\r\n\r\n\r\n/*mobile side menu*/\r\n.sideMenuUserCard{  display: -webkit-box;  display: -ms-flexbox;  display: flex;  -webkit-box-orient: vertical;  -webkit-box-direction: normal;  -ms-flex-direction: column;  flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center;  padding: 30px 10px;  border-bottom: 1px solid #dcdce0;\r\n}\r\n.sideMenuUserCard img{height: 120px; width: 120px; border-radius: 50%;}\r\n.sideMenuUserCard button, .sideMenuUserCard button:hover{background: #0747A6; color: #fff; margin-top: 10px;}\r\n.sideMenuList{list-style: none; padding: 0;}\r\n.sideMenuList li{ margin: 0; display: block; width: 95%;}\r\n.sideMenuList li a{width: 100%; text-align: left; padding-left: 10px;}\r\n.sideMenuList li a:hover{background: #E9E9E9; }\r\n.sideMenuList li a i{color: #888888;}\r\n.sideMenuList li a span{margin-top: 7px;}\r\n.sideMenuList li a.active{ border-right: 2px solid #0747A6;  color: #0747A6; font-weight: 600;}\r\n.sideMenuList li a i.active{color: #0747A6;}\r\n\r\n\r\n/*media*/\r\n@media only screen and (max-width : 800px) {\r\n    .myContainer{  margin-left: 0%; margin-right: 0%; }\r\n    #mobilesidenNavBtn{display: inline-block}\r\n    #toolbarSearchForm{display: none;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"app-container\">\r\n  <mat-sidenav #sidenav class=\"example-sidenav\">\r\n    <div class=\"sideMenuUserCard\">\r\n      <img src=\"assets/IMG/logo201.png\" alt=\"\" *ngIf=\"!currentUser.email\"/>\r\n      <img src=\"https://semantic-ui.com/images/avatar2/large/matthew.png\" alt=\"\" *ngIf=\"currentUser.email\"/>\r\n      <button mat-button class=\"center-block\" routerLink=\"../dash\" *ngIf=\"currentUser.firstName\">{{currentUser.firstName}}</button>\r\n    </div>\r\n    <ul class=\"sideMenuList\">\r\n      <li><a mat-button routerLink=\"../\" class=\"sideMenuList-Item\" (click)=\"sidenav.close()\"><i class=\"material-icons\">home</i> Home</a></li>\r\n      <li><a mat-button routerLink=\"../about\" class=\"sideMenuList-Item\" (click)=\"sidenav.close()\"><i class=\"material-icons\">help</i> About us</a></li>\r\n      <li><a mat-button class=\"sideMenuList-Item\" (click)=\"sidenav.close(); openContactUsModal()\"><i class=\"material-icons\">phone</i> Contact us</a></li>\r\n      <li><a mat-button class=\"sideMenuList-Item\" *ngIf=\"!currentUser.email\" (click)=\"sidenav.close(); openSignInModal()\"><i class=\"material-icons\">settings_power</i> signIn</a></li>\r\n      <li><a mat-button class=\"sideMenuList-Item\" *ngIf=\"!currentUser.email\" (click)=\"sidenav.close(); openSignUpModal()\"><i class=\"material-icons\">account_circle</i> SignUp</a></li>\r\n      <li><a mat-button class=\"sideMenuList-Item\" *ngIf=\"currentUser.email\" (click)=\"sidenav.close(); logOut()\"><i class=\"material-icons\">settings_power</i> logOut</a></li>\r\n    </ul>\r\n  </mat-sidenav>\r\n  <app-navbar [currentUser]=\"currentUser\" (updateUserStatus)=\"updateUser($event)\"></app-navbar>\r\n  <button mat-icon-button (click)=\"sidenav.open()\" id=\"mobilesidenNavBtn\">\r\n    <mat-icon aria-label=\"Example icon-button with a icon\"><i class=\"material-icons\">dehaze</i></mat-icon>\r\n  </button>\r\n  <router-outlet></router-outlet>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesh_rise_service__ = __webpack_require__("../../../../../src/app/mesh-rise.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(dialog, router, _meshRiseService) {
        this.dialog = dialog;
        this.router = router;
        this._meshRiseService = _meshRiseService;
        this.currentUser = {};
    }
    AppComponent.prototype.openSignInModal = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__["c" /* SignInModal */]);
        $(".mat-dialog-container").css({ "padding": "0px" });
    };
    AppComponent.prototype.openSignUpModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__["c" /* SignInModal */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'signIn') {
                _this.currentUser = JSON.parse(_this._meshRiseService.retrieve());
                _this.router.navigateByUrl('/dash');
            }
        });
        $(".mat-dialog-container").css({ "padding": "0px" });
    };
    AppComponent.prototype.openContactUsModal = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__["a" /* ContactUsModal */]);
        $(".mat-dialog-container").css({ "padding": "0px" });
    };
    AppComponent.prototype.updateUser = function (currentUser) {
        this.currentUser = JSON.parse(currentUser);
    };
    AppComponent.prototype.logOut = function () {
        localStorage.clear();
        this.currentUser = {};
        window.location.reload();
        this.router.navigateByUrl('');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__mesh_rise_service__["a" /* MeshRiseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__mesh_rise_service__["a" /* MeshRiseService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/dashboard/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["b" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["c" /* SignInModal */], __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["d" /* SignUpModal */], __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["a" /* ContactUsModal */], __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_17__dashboard_side_menu_side_menu_component__["a" /* SideMenuComponent */], __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["b" /* UserFormModal */], __WEBPACK_IMPORTED_MODULE_18__reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_6_ngx_carousel__["a" /* NgxCarouselModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__landing_landing_component__["a" /* LandingComponent */], pathMatch: 'full' },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */] },
                    { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_13__terms_terms_component__["a" /* TermsComponent */] },
                    { path: 'privacy', component: __WEBPACK_IMPORTED_MODULE_14__privacy_privacy_component__["a" /* PrivacyComponent */] },
                    { path: 'dash', component: __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */] },
                    { path: 'resetPassword', component: __WEBPACK_IMPORTED_MODULE_18__reset_password_reset_password_component__["a" /* ResetPasswordComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["c" /* SignInModal */], __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["d" /* SignUpModal */], __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["a" /* ContactUsModal */], __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["b" /* UserFormModal */]]
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
exports.push([module.i, ".app-content{ position: relative; margin-top: 55px;}\r\n.app-content > div{ top:56px; height: 92.5vh; overflow: hidden;}\r\n.app-content .main{margin-left: 200px; padding: 20px;}\r\n.app-content .sieMenu{position:fixed; left:0;  width:200px; border-right:1px solid #dcdce0;}\r\n\r\n\r\n.countDownContainer{margin: 30vh auto;}\r\n.countDown{max-width: 400px; width: 100%; margin: -10px auto;}\r\n.countDown > span{\r\n     border: 1px solid; width: 100px; height: 100px; border-radius: 50%; text-align: center; margin: 5px;\r\n     color: #4052B5; padding-top: 20px;\r\n    -webkit-transition: .6s all; -moz-transition: .6s all; -transition: .6s all;\r\n}\r\n.countDown > span:nth-child(4){\r\n    border: 1px solid #dcdce0; color: #FF2141;\r\n\r\n}\r\n.countDown > span span{display: block; font-size: 35px; }\r\n\r\n\r\n\r\n@media only screen and (max-width : 800px) {\r\n    .app-content .sieMenu{display: none;}\r\n    .app-content .main{margin-left: 0px;}\r\n}\r\n@media only screen and (max-width : 600px) {\r\n    .countDown > span{  width: 80px; height: 80px;  padding-top: 10px; }\r\n    .countDown > span span{font-size: 25px; }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\">\n  <div class=\"sieMenu\" id=\"chatList\"><app-side-menu (editProfileEvent)=\"openUserFormModal()\"></app-side-menu></div>\n  <div class=\"main transition\" id=\"mainContent\">\n    <div class=\"countDownContainer center-align\">\n      <h1>Will Be Ready first of Feb</h1>\n      <div  class=\"countDown flexCenterContainer transition animated zoomIn\">\n          <span><span id=\"days\"></span> d</span>\n          <span><span  id=\"hours\"></span> h</span>\n          <span><span  id=\"minutes\"></span> m</span>\n          <span><span  id=\"seconds\" class=\"animated zoomIn\"></span> s</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserFormModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesh_rise_service__ = __webpack_require__("../../../../../src/app/mesh-rise.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



var DashboardComponent = (function () {
    function DashboardComponent(dialog, _meshRiseService, router) {
        this.dialog = dialog;
        this._meshRiseService = _meshRiseService;
        this.router = router;
        this.user = { email: '', password: '', firstName: '', lastName: '', };
        this.currentUser = {};
        this.currentUser = JSON.parse(this._meshRiseService.retrieve());
        if (!this.currentUser.email) {
            this.router.navigateByUrl('');
        }
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.openUserFormModal = function () {
        this.dialog.open(UserFormModal, { data: this.user });
        $(".mat-dialog-container").css({ "padding": "0px" });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__mesh_rise_service__["a" /* MeshRiseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__mesh_rise_service__["a" /* MeshRiseService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());

var UserFormModal = (function () {
    function UserFormModal(dialogRef, userInfo, _meshRiseService, fb) {
        this.dialogRef = dialogRef;
        this.userInfo = userInfo;
        this._meshRiseService = _meshRiseService;
        this.hide = true;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](userInfo.email, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)]);
        this.passwordFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](userInfo.password, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern('.*[0-9].*')])]);
        this.userForm = fb.group({
            email: this.emailFormControl,
            password: this.passwordFormControl,
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](userInfo.firstName, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](userInfo.lastName, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
        });
    }
    UserFormModal.prototype.closeModal = function () { this.dialogRef.close(); };
    UserFormModal.prototype.updateProfile = function () {
        /*this._meshRiseService.signUp(this.userForm.value).subscribe(
            (result) => {},
            (err) => {swal('Oops...', 'Something went wrong!', 'error');},
            () => {swal('Good job!', 'update profile info!', 'success');;}
        );*/
    };
    UserFormModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-form-modal',
            template: __webpack_require__("../../../../../src/app/dashboard/userFormModal.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__mesh_rise_service__["a" /* MeshRiseService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__mesh_rise_service__["a" /* MeshRiseService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], UserFormModal);
    return UserFormModal;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/side-menu/side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sideMenuUserCard{\r\n   padding: 30px 10px;\r\n}\r\n.sideMenuUserCard img{height: 120px; width: 120px; border-radius: 50%;}\r\n\r\n.sideMenuUserCard button{position:relative; background: transparent; color: #0747A6; font-weight: 600; margin-top: 10px; }\r\n\r\n.sideMenuUserCard button .editIcon{ color: #EBEBEB;}\r\n\r\n.sideMenuUserCard button:hover .editIcon{ color: #0747A6;}\r\n\r\n\r\n.sideMenuList{list-style: none; padding: 0;}\r\n.sideMenuList li{ margin: 0; display: block; width: 95%;}\r\n.sideMenuList li a{width: 100%; text-align: left; padding-left: 10px;}\r\n.sideMenuList li a:hover{background: #E9E9E9; }\r\n.sideMenuList li a i{color: #888888;}\r\n.sideMenuList li a span{margin-top: 7px;}\r\n.sideMenuList li a.active{ border-right: 2px solid #0747A6;  color: #0747A6; font-weight: 600;}\r\n.sideMenuList li a i.active{color: #0747A6;}\r\n.ship{ background: red; color: #fff;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sideMenuUserCard center-align animated zoomIn\">\n  <img src=\"https://semantic-ui.com/images/avatar2/large/matthew.png\" alt=\"\" class=\"center-block\"/>\n  <button mat-button class=\"center-block\" (click)=\"editProfile()\">User Name <mat-icon class=\"transition editIcon\" aria-label=\"icon-button\">edit_mode</mat-icon></button>\n</div>\n<ul class=\"sideMenuList animated fadeInLeft\">\n  <li><a mat-button routerLink=\"../\"  class=\"sideMenuList-Item active\"><i class=\"material-icons\">home</i> Home</a></li>\n  <li><a mat-button class=\"sideMenuList-Item\"><i class=\"material-icons\">people</i> Item</a></li>\n  <li><a mat-button class=\"sideMenuList-Item\"><i class=\"material-icons\">folder</i> Item</a></li>\n  <li><a mat-button class=\"sideMenuList-Item\"><i class=\"material-icons\">explore</i> Item</a></li>\n  <li><a mat-button class=\"sideMenuList-Item\"><i class=\"material-icons\">lightbulb_outline</i> ToDo  <span class=\"right-float red ship\"> 10 </span></a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/dashboard/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
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

var SideMenuComponent = (function () {
    function SideMenuComponent() {
        this.editProfileEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SideMenuComponent.prototype.ngOnInit = function () { };
    SideMenuComponent.prototype.editProfile = function () { this.editProfileEvent.emit(); };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SideMenuComponent.prototype, "editProfileEvent", void 0);
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-menu',
            template: __webpack_require__("../../../../../src/app/dashboard/side-menu/side-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/userFormModal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DataForm small animated zoomIn\">\r\n    <div class=\"DataFormHeader\"><h1>edit Profile!</h1><span class=\"borderSpan\"></span></div>\r\n    <div class=\"DataFormBody\">\r\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"updateProfile()\">\r\n            <mat-form-field class=\"DataFormInput\">\r\n                <mat-icon matPrefix class=\"SignFormInputIcon\">person</mat-icon>\r\n                <input matInput placeholder=\"first Name\" name=\"firstName\" [formControl]=\"userForm.controls['firstName']\">\r\n                <mat-error *ngIf=\"userForm.controls['firstName'].hasError('required')\">first Name is <strong>required</strong></mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"DataFormInput\">\r\n                <input matInput placeholder=\"last Name\" name=\"lastName\" [formControl]=\"userForm.controls['lastName']\">\r\n                <mat-error *ngIf=\"userForm.controls['lastName'].hasError('required')\">last Name is <strong>required</strong></mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"DataFormInput\">\r\n                    <mat-icon matPrefix class=\"SignFormInputIcon\">email</mat-icon>\r\n                    <input matInput placeholder=\"Email\" name=\"email\" [formControl]=\"userForm.controls['email']\">\r\n                    <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</mat-error>\r\n                    <mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"DataFormInput\">\r\n                <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" [formControl]=\"userForm.controls['password']\">\r\n                <mat-icon matSuffix (click)=\"hide = !hide\" class=\"SignFormInputIcon\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n            </mat-form-field>\r\n            <div class=\"DataFormFooter\">\r\n                <button mat-button class=\"right-float\" color=\"primary\" [disabled]=\"!userForm.valid\" type=\"submit\"><i class=\"material-icons\">check</i> Save Changes</button>\r\n                <button mat-button color=\"accent\" type=\"button\" class=\"right-float\" (click)=\"closeModal()\"><i class=\"material-icons\">cancel</i> Cancel</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{ background: #262D32; padding: 0px; overflow: hidden;}\r\nfooter .footerLower{padding: 20px 10px 20px 10px;}\r\nfooter .footerLower a{color: #fff; font-size: 16px; font-weight: 600; margin-right: 20px;}\r\nfooter .footerLower a:hover{color: #FF4081;}\r\nfooter .footerLower a:last-child{margin-right: 0px;}\r\nfooter .footerLower img{display: block; margin: 0 auto;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"center-align animated fadeInUp\">\r\n  <div class=\"footerLower\">\r\n    <a routerLink=\"../\">© 2017 MeshRise.com</a>\r\n    <a routerLink=\"../terms\">Terms of service</a>\r\n    <a routerLink=\"../privacy\">Privacy</a>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landingSection{  height: 92.5vh; border-bottom: 1px solid #dcdce0;  }\r\n.transition{  -webkit-transition: .6s all; -moz-transition: .6s all; -transition: .6s all;  }\r\n.readMoreBtn{font-size: 18px; background:transparent; color:#FF4181; font-weight: 600; box-shadow: none; margin-bottom: 20px;}\r\n\r\n\r\n/*slider*/\r\n.carousleItem{  min-height:92.4vh;  background-position: center center;  background-repeat:  no-repeat;  background-size:  cover;  }\r\n.carousleItem >div{ position:absolute; color:#fff; background-color:rgba(32,26,22,.5); height:100%; width:100%;  padding:130px 0 0 100px;  }\r\n.carousleItem > div h1{font-size: 3vw;}\r\n.carousleItem > div p{position:relative; margin-top: -20px; max-width: 500px; width: 100%; font-size: 18px; line-height: 150%;}\r\n.carousleItem > div button, .contactUsSection button{min-width: 150px;  margin-top: 0px; padding: 5px; font-size: 16px; border-radius: 24px 24px 24px 0px; font-weight: 600;}\r\n.carousleItem > div button:hover{font-weight: 600;  border-radius: 0px;}\r\n.leftRs {\r\n    position: absolute;  margin: auto;  top: 0;  bottom: 0;  width: 50px;  height: 50px;  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n    border-radius: 999px;  left: 10px;  color: #fff;  visibility: hidden;\r\n}\r\n.rightRs {\r\n    position: absolute;  margin: auto;  top: 0;  bottom: 0;  width: 50px;  height: 50px;  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n    border-radius: 999px;  right: 10px;  color: #fff;  border: 1px solid #fff;  visibility: hidden;\r\n}\r\n.rightRs .CurosulIcon{font-size: 30px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*************** pricing plan style *********************/\r\n.package {  box-sizing: border-box;  max-width: 350px;  width: 100%;  height: 480px; border: 3px solid #e8e8e8;\r\n    border-radius: 7px;  padding: 24px;  text-align: center;  transition: margin-top 0.5s linear;\r\n    position: relative;  margin: 10px auto;\r\n}\r\n.package:hover .name{  font-size: 3.5rem;  }\r\n.package .name {color: #fff;  font-weight: 300;  font-size: 3rem;  transition: all 0.2s linear;  -webkit-transition: all 0.2s linear;  }\r\n.package .price {  margin-top: 7px;  font-weight: bold;  }\r\n.package .price::after {  content: \" / month per user\";  font-weight: normal;  }\r\n.package hr {  background-color: #dedede;  border: none;  height: 1px;  }\r\n.package .trial {\r\n    font-size: .9rem;  font-weight: 600;  padding: 2px 21px 2px 21px;  color: #33c4b6;  border: 1px solid #e4e4e4; display: inline-block;\r\n    border-radius: 15px;  background-color: white;  position: relative;  bottom: -20px;\r\n}\r\n.package ul {  list-style: none;  padding: 0;  text-align: left;  margin-top: 29px;  }\r\n.package ul li {  margin-bottom: 15px;  }\r\n.package .checkIcon {  font-family: \"FontAwesome\";  content: \"\\F00C\";  }\r\n.package ul li::before {  font-family: \"FontAwesome\";  content: \"\\F00C\";  font-size: 1.3rem;  color: #33c4b6;  margin-right: 3px;  }\r\n.brilliant {  border-color: #F44336;  }\r\n/* Triangle */\r\n.brilliant::before {\r\n    width: 0;  height: 0;  border-style: solid;  border-width: 64px 64px 0 0; border-color: #F44336 transparent transparent transparent;\r\n    position: absolute;  left: 0;  top: 0;  content: \"\";\r\n}\r\n.brilliant::after {\r\n    font-family: \"FontAwesome\";  content: \"\\F00C\";  color: white;  position: absolute;  left: 9px;  top: 6px;  text-shadow: 0 0 2px #37c5b6;  font-size: 1.4rem;\r\n}\r\n.packageFooter{position: absolute; bottom: 20px; left: 0; width: 100%;}\r\n.pricPackageButton{ padding: 3px; min-width: 150px; font-weight: 600; font-size: 16px;}\r\n.radiusButton{border-radius: 24px 24px 24px 0px; -webkit-transition: .6s all; -moz-transition: .6s all; -transition: .6s all;}\r\n.radiusButton:hover{border-radius:0px; font-weight: 600;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/****************************** md ******************************/\r\n@media only screen and (max-width : 960px) {\r\n    .carousleItem >div{ padding:130px 0 0 50px;  }\r\n    .carousleItem > div h1{font-size: 5vw;}\r\n}\r\n\r\n/****************************** sm ******************************/\r\n@media only screen and (max-width : 765px) {\r\n    .carousleItem >div{ padding:130px 0 0 20px;  }\r\n}\r\n\r\n/****************************** xs ******************************/\r\n@media only screen and (max-width : 600px) {\r\n    .landingSectionTitle h1 { font-size: 8vw;}\r\n    .carousleItem > div h1{font-size: 8vw;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageContent\">\r\n  <Section class=\"landingSection animated fadeIn\">\r\n    <ngx-carousel [inputs]=\"carouselOne\">\r\n      <ngx-item NgxCarouselItem>\r\n        <div class=\"carousleItem\" style=\"background-image: url('https://images.unsplash.com/photo-1493689485253-f07fcbfc731b?auto=format&fit=crop&w=1033&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');\">\r\n          <div>\r\n            <h1 class=\"animated fadeInLeft\">Best platform for co-workers</h1>\r\n            <p class=\"animated fadeInLeft landingHeaderLight\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>\r\n            <button mat-raised-button class=\"animated fadeInDown transition\" color=\"accent\" routerLink=\"../signUP\">Get Started</button>\r\n          </div>\r\n        </div>\r\n      </ngx-item>\r\n      <ngx-item NgxCarouselItem>\r\n        <div class=\"carousleItem\" style=\"background-image: url('https://images.unsplash.com/photo-1496389395181-e5fdd5c0315e?auto=format&fit=crop&w=1046&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');\">\r\n          <div>\r\n            <h1>Best platform for co-workers</h1>\r\n            <p class=\"landingHeaderLight\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>\r\n            <button mat-raised-button class=\"transition\" color=\"primary\" style=\"width: 200px;\" routerLink=\"../signUP\">browse Categories</button>\r\n          </div>\r\n        </div>\r\n      </ngx-item>\r\n      <ngx-item NgxCarouselItem>\r\n        <div class=\"carousleItem\" style=\"background-image: url('https://images.unsplash.com/photo-1418225162054-0f773a996f9e?auto=format&fit=crop&w=1058&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');\">\r\n          <div>\r\n            <h1>Best platform for co-workers</h1>\r\n            <p class=\"landingHeaderLight\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>\r\n          </div>\r\n        </div>\r\n      </ngx-item>\r\n      <button mat-icon-button NgxCarouselPrev class='leftRs'><mat-icon aria-label=\"prev icon\">keyboard_arrow_left</mat-icon></button>\r\n      <button mat-icon-button NgxCarouselNext class='rightRs'><mat-icon aria-label=\"next icon\">keyboard_arrow_right</mat-icon></button>\r\n    </ngx-carousel>\r\n  </Section>\r\n  <!--end slider section-->\r\n\r\n\r\n\r\n  <section class=\"dataSection white\" id=\"features\">\r\n    <div class=\"myContainer dataSectionSub row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n        <h1>Feature 1</h1><span class=\"borderSpan\"></span>\r\n        <p>Create your survey or select one existing template specific for your job </p>\r\n        <button mat-raised-button color=\"accent\" class=\"readMoreBtn\">read more..</button>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n        <img src=\"assets/IMG/img1.png\" align=\"img\" class=\"sectionImg center-block\"/>\r\n      </div>\r\n    </div>\r\n    <div class=\"myContainer dataSectionSub row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 first-lg first-md last-sm last-xs\">\r\n        <img src=\"assets/IMG/img2.png\" align=\"img\" class=\"sectionImg center-block\"/>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n        <h1>Feature 2</h1><span class=\"borderSpan\"></span>\r\n        <p>Ask you team members to participate in the survey transparently and positively</p>\r\n        <button mat-raised-button color=\"accent\" class=\"readMoreBtn\">read more..</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"myContainer dataSectionSub row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n        <h1>Feature 3</h1><span class=\"borderSpan\"></span>\r\n        <p>Analyse the survey feedback and get some recommendations to improve your skills </p>\r\n        <button mat-raised-button color=\"accent\" class=\"readMoreBtn\">read more..</button>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n        <img src=\"assets/IMG/img1.png\" align=\"img\" class=\"sectionImg center-block\"/>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!--end how it works section-->\r\n\r\n\r\n\r\n  <section class=\"dataSection black\" id=\"pricing\">\r\n    <h1 class=\"center-align largTitle\">choose your plan</h1><span class=\"borderSpan center-block\"></span>\r\n    <div class=\"myContainer row\" style=\"max-width: 810px; width: 100%; margin: 40px auto;\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class='package brilliant'>\r\n          <div class='name'>Free</div><div class='price'>$0</div>\r\n          <div class='trial'>Available for a month</div>\r\n          <hr>\r\n          <ul>\r\n            <li><strong>8</strong>team members</li>\r\n            <li><strong>6</strong>team playlists</li>\r\n            <li><strong>Unlimited</strong>public playlists</li>\r\n          </ul>\r\n          <div class=\"packageFooter center-align\">\r\n            <button mat-raised-button (click)=\"openSignUpModal()\" style=\"background: #E8E8E8; color: #4052B5;\" class=\"pricPackageButton radiusButton\" color=\"primary\">Get Started</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n        <div class='package '>\r\n          <div class='name'>enterprise</div><div class='price'>$50</div>\r\n          <div class='trial'>Free 30 day trial</div>\r\n          <hr>\r\n          <ul>\r\n            <li><strong>Unlimited</strong>team members</li>\r\n            <li><strong>Unlimited</strong>team playlists</li>\r\n            <li><strong>Unlimited</strong>public playlists</li>\r\n            <li>Team analytics</li>\r\n            <li>Send files</li>\r\n          </ul>\r\n          <div class=\"packageFooter flexCenterContainer\">\r\n            <button mat-raised-button class=\"pricPackageButton radiusButton\" (click)=\"openContactUsModal()\" color=\"warn\">contact us</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!--end pricing plans section-->\r\n\r\n\r\n\r\n  <app-footer></app-footer>\r\n  <!--end footer-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = (function () {
    function LandingComponent(dialog) {
        this.dialog = dialog;
    }
    LandingComponent.prototype.ngOnInit = function () { this.carouselOne = __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].carouselOne; };
    LandingComponent.prototype.openSignUpModal = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["d" /* SignUpModal */]);
        $(".mat-dialog-container").css({ "padding": "0px" });
    };
    LandingComponent.prototype.openContactUsModal = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* ContactUsModal */]);
        $(".mat-dialog-container").css({ "padding": "0px" });
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mesh-rise.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshRiseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeshRiseService = (function () {
    function MeshRiseService(http) {
        this.http = http;
        this.userTokenKey = 'current_user';
    }
    /******************************* auth ****************************/
    MeshRiseService.prototype.signIn = function (user) { return this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'users/signin', user).map(function (response) { return response.json(); }); };
    MeshRiseService.prototype.signUp = function (user) { return this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'users/signup', user).map(function (response) { return response.json(); }); };
    MeshRiseService.prototype.logOut = function (user) { return this.http.delete(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'users/logout').map(function (response) { return response.json(); }); };
    MeshRiseService.prototype.sendResetPasswordEmail = function (email) { return this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'users/forgot_password', email).map(function (response) { return response.json(); }); };
    MeshRiseService.prototype.resetPassword = function (user) { return this.http.put(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'users/reset_password', user).map(function (response) { return response.json(); }); };
    MeshRiseService.prototype.getCurrentUser = function () { return this.http.get(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'users/current_user').map(function (response) { return response.json(); }); };
    MeshRiseService.prototype.store = function (content) { localStorage.setItem(this.userTokenKey, JSON.stringify(content)); };
    MeshRiseService.prototype.retrieve = function () {
        var storedToken = localStorage.getItem(this.userTokenKey);
        if (!storedToken) {
            return "{}";
        }
        return storedToken;
    };
    MeshRiseService.prototype.clearLocalStorage = function () { localStorage.clear(); };
    MeshRiseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], MeshRiseService);
    return MeshRiseService;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/contactUsModal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DataForm small animated zoomIn\">\r\n    <div class=\"DataFormHeader\"><h1>Contact Us!</h1><span class=\"borderSpan\"></span></div>\r\n    <div class=\"DataFormBody\">\r\n        <mat-form-field class=\"DataFormInput\">\r\n            <mat-icon matPrefix class=\"SignFormInputIcon\">email</mat-icon>\r\n            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [(ngModel)]=\"contactUsObject.email\">\r\n            <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</mat-error>\r\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"DataFormInput\">\r\n            <mat-icon matPrefix class=\"SignFormInputIcon\">phone</mat-icon>\r\n            <input matInput placeholder=\"phone\" [(ngModel)]=\"contactUsObject.phone\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"DataFormInput\">\r\n            <mat-icon matSuffix class=\"SignFormInputIcon\">edit_mod</mat-icon>\r\n            <textarea matInput placeholder=\"Textarea\" class=\"DataFormInputArea\" style=\"resize: none;\" [(ngModel)]=\"contactUsObject.message\"></textarea>\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"DataFormFooter\">\r\n        <button mat-button class=\"right-float\" color=\"primary\" (click)=\" contactUs()\"><i class=\"material-icons\">send</i> send</button>\r\n        <button mat-button color=\"accent\" class=\"right-float\" (click)=\"closeModal()\"><i class=\"material-icons\">cancel</i> Cancel</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar{\r\n    position: fixed;  top:0;    background: #fff; z-index: 9999; min-height: 60px; height: 55px; color: #222;\r\n    padding: 10px 100px 0 100px;  border-radius: 0;  border-bottom: 1px solid #dcdce0;\r\n}\r\nmat-toolbar button.toolbarBtn{margin-top: -10px; margin-left: 10px; box-shadow: none;}\r\nmat-toolbar .logo{color: #222; margin-right: 30px;}\r\nmat-toolbar .logo img{height: 50px; width: 50px;}\r\n.example-spacer {  -webkit-box-flex: 1;  -ms-flex: 1 1 auto;  flex: 1 1 auto;  }\r\n.navLink{ margin-top: -10px; min-width: 50px; font-size: 15px;}\r\n.navLink.active{ color: red; font-weight: 600; background: #E0E0E0;}\r\n.radiusButton{border-radius: 24px 24px 24px 0px; -webkit-transition: .6s all; -moz-transition: .6s all; -transition: .6s all;}\r\n.radiusButton:hover{border-radius:0px; font-weight: 600;}\r\n\r\n\r\n.orLable{font-weight: 600; text-align: center; margin-bottom: 60px; margin-top: 30px; border-bottom:2px dotted #E5E5E5;  background: transparent; }\r\n.orLable span{background: #fff; position: relative; bottom: -10px; border: 1px solid #E5E5E5; padding: 5px 20px 5px 20px; }\r\n.SignFormInputIcon{color: #4052B5;}\r\n\r\n\r\n\r\n.toolbarUserMenu{ margin-top: -10px; padding-bottom: 5px; padding-right: 10px; margin-left: 15px; box-shadow: none; height: 55px; padding-top: 10px;}\r\n.toolbarUserMenu:hover{background: #0747A6;}\r\n.toolbarUserMenu img{height: 40px; width: 40px; border-radius: 50%; margin-top: -5px;}\r\n.toolbarSearchIcon{ font-weight: 600;}\r\n\r\n\r\n\r\n.resetpasswordIcon{color: #0747A6;}\r\n\r\n\r\n/********************* media ****************/\r\n@media only screen and (max-width : 1020px) {\r\n    #appToolbar{ padding: 10px 15px 0 10px; }\r\n}\r\n@media only screen and (max-width : 800px) {\r\n    .navLink{ display: none;}\r\n    #toolbarSearchForm, button.toolbarBtn, #navbarUserMenu, .toolbarUserMenu{display: none;}\r\n    #appToolbar{ padding: 0px 15px 0px 15px; }\r\n    mat-toolbar .logo{margin-top: 10px;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"appToolbar\">\r\n  <a routerLink=\"../\" class=\"animated fadeInLeft logo\"><img src=\"assets/IMG/logo201.png\" alt=\"\"/></a>\r\n  <a mat-button routerLink=\"../\" onclick=\"scrollToItem('#features')\" class=\"navLink animated fadeInDown\">features</a>\r\n  <a mat-button routerLink=\"../\" onclick=\"scrollToItem('#pricing')\" class=\"navLink animated fadeInDown\">PRICING</a>\r\n  <a mat-button class=\"navLink animated fadeInDown\" (click)=\"openContactUsModal()\">contact us</a>\r\n  <a mat-button routerLink=\"../about\" class=\"navLink animated fadeInDown\">ABOUT US</a>\r\n  <span class=\"example-spacer\"></span>\r\n  <button mat-raised-button *ngIf=\"!currentUser.email\" (click)=\"openSignInModal()\"  class=\"toolbarBtn animated fadeInRight radiusButton\" color=\"accent\">Sign IN</button>\r\n  <button mat-raised-button *ngIf=\"!currentUser.email\" (click)=\"openSignUpModal()\"  class=\"toolbarBtn animated fadeInRight radiusButton\" color=\"primary\">Sign UP</button>\r\n\r\n  <button mat-raised-button *ngIf=\"currentUser.email\" [matMenuTriggerFor]=\"userMenu\" class=\"toolbarUserMenu animated fadeInRight\" style=\"background: transparent;\">\r\n    <img src=\"https://semantic-ui.com/images/avatar2/large/matthew.png\" alt=\"\"/> {{currentUser.firstName}}\r\n  </button>\r\n  <mat-menu #userMenu=\"matMenu\">\r\n    <button mat-menu-item>dashBoard</button>\r\n    <button mat-menu-item (click)=\"logOut()\">LogOut</button>\r\n  </mat-menu>\r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SignInModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SignUpModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesh_rise_service__ = __webpack_require__("../../../../../src/app/mesh-rise.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var NavbarComponent = (function () {
    function NavbarComponent(dialog, _meshRiseService, router) {
        this.dialog = dialog;
        this._meshRiseService = _meshRiseService;
        this.router = router;
        this.updateUserStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(this._meshRiseService.retrieve());
        console.log("current user : ");
    };
    NavbarComponent.prototype.openSignInModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(SignInModal);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'signIn') {
                _this.currentUser = JSON.parse(_this._meshRiseService.retrieve());
                // console.log("current user : ");
                // console.log(this.currentUser);
                _this.updateUserStatus.emit(_this._meshRiseService.retrieve());
                // this.router.navigateByUrl('/dash');
            }
        });
        $(".mat-dialog-container").css({ "padding": "0px" });
    };
    NavbarComponent.prototype.openSignUpModal = function () {
        this.dialog.open(SignUpModal);
        $('.mat-dialog-container').css({ "padding": "0px" });
    };
    NavbarComponent.prototype.openContactUsModal = function () {
        this.dialog.open(ContactUsModal);
        $('.mat-dialog-container').css({ "padding": "0px" });
    };
    NavbarComponent.prototype.logOut = function () {
        localStorage.clear();
        this.currentUser = {};
        this.router.navigateByUrl('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "updateUserStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "currentUser", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__mesh_rise_service__["a" /* MeshRiseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__mesh_rise_service__["a" /* MeshRiseService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());

var SignInModal = (function () {
    function SignInModal(dialogRef, _meshRiseService, fb) {
        this.dialogRef = dialogRef;
        this._meshRiseService = _meshRiseService;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)]);
        this.passwordFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern('.*[0-9].*')])
        ]);
        this.hide = true;
        //reset password
        this.forgetPassword = false;
        this.resetPasswordEmail = "";
        this.signInObject = { email: '', password: '' };
        this.API_ENDPOINT = __WEBPACK_IMPORTED_MODULE_7__app_settings__["a" /* AppSettings */].API_ENDPOINT;
        this.signInForm = fb.group({ email: this.emailFormControl, password: this.passwordFormControl });
    }
    SignInModal.prototype.closeModal = function () { this.dialogRef.close(); };
    SignInModal.prototype.signIn = function () {
        var _this = this;
        this._meshRiseService.signIn(this.signInForm.value).subscribe(function (result) {
            _this._meshRiseService.store(result.user);
        }, function (err) { console.error(err); __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Oops...', 'Something went wrong!', 'error'); }, function () {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Good job!', 'sign In!', 'success');
            _this.dialogRef.close('signIn');
        });
    };
    SignInModal.prototype.sendResetPasswordEmail = function () {
        var _this = this;
        this._meshRiseService.sendResetPasswordEmail({ email: this.resetPasswordEmail }).subscribe(function (result) { }, function (err) { console.error(err); __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Oops...', 'Something went wrong!', 'error'); }, function () {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Good job!', 'please check your email to complete the reset password process!', 'success');
            _this.dialogRef.close();
        });
    };
    SignInModal.prototype.validateEmail = function (event) {
        this.validEmail = EMAIL_REGEX.test(event.target.value);
    };
    SignInModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sign-in-modal',
            template: __webpack_require__("../../../../../src/app/navbar/signInModal.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__mesh_rise_service__["a" /* MeshRiseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_4__mesh_rise_service__["a" /* MeshRiseService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], SignInModal);
    return SignInModal;
}());

var SignUpModal = (function () {
    function SignUpModal(dialogRef, _meshRiseService, fb) {
        this.dialogRef = dialogRef;
        this._meshRiseService = _meshRiseService;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)]);
        this.passwordFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern('.*[0-9].*')])
        ]);
        this.hide = true;
        this.API_ENDPOINT = __WEBPACK_IMPORTED_MODULE_7__app_settings__["a" /* AppSettings */].API_ENDPOINT;
        this.signUpForm = fb.group({
            email: this.emailFormControl,
            password: this.passwordFormControl,
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]),
        });
    }
    SignUpModal.prototype.closeModal = function () { this.dialogRef.close(); };
    SignUpModal.prototype.signUp = function () {
        this._meshRiseService.signUp(this.signUpForm.value).subscribe(function (result) { }, function (err) { __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Oops...', 'Something went wrong!', 'error'); }, function () { __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Good job!', 'sign up!', 'success'); ; });
    };
    SignUpModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sign-up-modal',
            template: __webpack_require__("../../../../../src/app/navbar/signUpModal.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__mesh_rise_service__["a" /* MeshRiseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_4__mesh_rise_service__["a" /* MeshRiseService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], SignUpModal);
    return SignUpModal;
}());

var ContactUsModal = (function () {
    function ContactUsModal(dialogRef) {
        this.dialogRef = dialogRef;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)]);
        this.contactUsObject = { email: '', phone: '', message: '' };
    }
    ContactUsModal.prototype.closeModal = function () { this.dialogRef.close(); };
    ContactUsModal.prototype.contactUs = function () { };
    ContactUsModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sign-up-modal',
            template: __webpack_require__("../../../../../src/app/navbar/contactUsModal.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */]])
    ], ContactUsModal);
    return ContactUsModal;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/signInModal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DataForm small animated zoomIn\" *ngIf=\"!forgetPassword\">\r\n    <div class=\"DataFormHeader\"><h1>Sign In Here!</h1><span class=\"borderSpan\"></span></div>\r\n    <div class=\"DataFormBody\">\r\n        <form [formGroup]=\"signInForm\">\r\n            <mat-form-field class=\"DataFormInput\">\r\n                <mat-icon matPrefix class=\"SignFormInputIcon\">email</mat-icon>\r\n                <input matInput placeholder=\"Email\" name=\"email\" [formControl]=\"signInForm.controls['email']\">\r\n                <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</mat-error>\r\n                <mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"DataFormInput\">\r\n                <input matInput placeholder=\"Enter your password\" name=\"password\" [formControl]=\"signInForm.controls['password']\"\r\n                       [type]=\"hide ? 'password' : 'text'\" >\r\n                <mat-icon matSuffix (click)=\"hide = !hide\" class=\"SignFormInputIcon\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                <mat-error *ngIf=\"passwordFormControl.invalid\">Passwords must be at least 5 chars long</mat-error>\r\n            </mat-form-field>\r\n            <button mat-button color=\"primary\" type=\"button\" (click)=\"forgetPassword=true;\">forget your password?</button>\r\n\r\n            <div class=\"orLable\"><span>OR</span></div>\r\n            <ul class=\"socialLinksList center-block transition\">\r\n                <li class=\"transition\">\r\n                    <a mat-fab  matTooltip=\"Facebook\" href=\"{{API_ENDPOINT}}auth/facebook\">\r\n                        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"transition\">\r\n                    <a mat-fab  matTooltip=\"twitter\" href=\"{{API_ENDPOINT}}auth/google\">\r\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"transition\">\r\n                    <a mat-fab  matTooltip=\"linked in\" href=\"{{API_ENDPOINT}}auth/linkedin\">\r\n                        <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"transition\">\r\n                    <a mat-fab  matTooltip=\"google+\" href=\"{{API_ENDPOINT}}auth/google\">\r\n                        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"DataFormFooter\">\r\n                <button mat-button class=\"right-float\" [disabled]=\"!signInForm.valid\" type=\"button\" (click)=\"signIn()\" color=\"primary\"><i class=\"material-icons\">lock_open</i> sign In</button>\r\n                <button mat-button color=\"accent\" class=\"right-float\" type=\"button\" (click)=\"closeModal()\"><i class=\"material-icons\">cancel</i> Cancel</button>\r\n            </div>\r\n        </form>\r\n\r\n<!--        <mat-form-field class=\"DataFormInput\">\r\n            <mat-icon matPrefix class=\"SignFormInputIcon\">email</mat-icon>\r\n            <input matInput placeholder=\"Email\" [(ngModel)]=\"signInObject.email\" name=\"email\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"DataFormInput\">\r\n            <input matInput placeholder=\"Enter your password\" [(ngModel)]=\"signInObject.password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\" >\r\n            <mat-icon matSuffix (click)=\"hide = !hide\" class=\"SignFormInputIcon\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n        </mat-form-field>\r\n        <button mat-button color=\"primary\" type=\"button\" (click)=\"forgetPassword=true;\">forget your password?</button>-->\r\n    <!--</div>\r\n    <div class=\"orLable\"><span>OR</span></div>\r\n    <ul class=\"socialLinksList center-block transition\">\r\n        <li class=\"transition\">\r\n            <a mat-fab  matTooltip=\"Facebook\" href=\"{{API_ENDPOINT}}auth/facebook\">\r\n                <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"transition\">\r\n            <a mat-fab  matTooltip=\"twitter\" href=\"{{API_ENDPOINT}}auth/google\">\r\n                <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"transition\">\r\n            <a mat-fab  matTooltip=\"linked in\" href=\"{{API_ENDPOINT}}auth/linkedin\">\r\n                <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"transition\">\r\n            <a mat-fab  matTooltip=\"google+\" href=\"{{API_ENDPOINT}}auth/google\">\r\n                <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"DataFormFooter\">\r\n        <button mat-button class=\"right-float\" type=\"button\" (click)=\"signIn()\" color=\"primary\"><i class=\"material-icons\">lock_open</i> sign In</button>\r\n        <button mat-button color=\"accent\" class=\"right-float\" type=\"button\" (click)=\"closeModal()\"><i class=\"material-icons\">cancel</i> Cancel</button>\r\n    </div>-->\r\n</div>\r\n</div>\r\n<!--end sign up form-->\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"DataForm small animated zoomIn\" *ngIf=\"forgetPassword\">\r\n    <div class=\"DataFormHeader\"><h2><i class=\"material-icons resetpasswordIcon\">lock_outline</i> reset password</h2><span class=\"borderSpan\"></span></div>\r\n    <div class=\"DataFormBody\">\r\n        <mat-form-field class=\"DataFormInput\">\r\n            <mat-icon matPrefix class=\"SignFormInputIcon\">email</mat-icon>\r\n            <input matInput placeholder=\"your Email\" name=\"email\" [formControl]=\"emailFormControl\" [(ngModel)]=\"resetPasswordEmail\">\r\n            <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</mat-error>\r\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error>\r\n        </mat-form-field>\r\n        <button mat-button color=\"primary\" type=\"button\" [disabled]=\"true\">you will receive reset password link at this email</button>\r\n    </div>\r\n    <div class=\"DataFormFooter\">\r\n        <button mat-button class=\"right-float\" type=\"button\" (click)=\"sendResetPasswordEmail()\" color=\"primary\">\r\n            <i class=\"material-icons\">check</i> send</button>\r\n        <button mat-button color=\"accent\" class=\"right-float\" type=\"button\" (click)=\"closeModal()\"><i class=\"material-icons\">cancel</i> Cancel</button>\r\n        <button mat-button color=\"accent\" class=\"left-float\" type=\"button\" (click)=\"forgetPassword=false\"><i class=\"material-icons\">keyboard_arrow_left</i> back</button>\r\n    </div>\r\n</div>\r\n<!--end reset password form-->\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/signUpModal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DataForm small animated zoomIn\">\r\n    <div class=\"DataFormHeader\"><h1>Sign Up Here!</h1><span class=\"borderSpan\"></span></div>\r\n    <div class=\"DataFormBody\">\r\n        <form [formGroup]=\"signUpForm\">\r\n            <mat-form-field class=\"DataFormInput\">\r\n                <mat-icon matPrefix class=\"SignFormInputIcon\">person</mat-icon>\r\n                <input matInput placeholder=\"first Name\" name=\"firstName\" [formControl]=\"signUpForm.controls['firstName']\">\r\n                <mat-error *ngIf=\"signUpForm.controls['firstName'].hasError('required')\">first Name is <strong>required</strong></mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"DataFormInput\">\r\n                <input matInput placeholder=\"last Name\" name=\"lastName\" [formControl]=\"signUpForm.controls['lastName']\">\r\n                <mat-error *ngIf=\"signUpForm.controls['lastName'].hasError('required')\">last Name is <strong>required</strong></mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"DataFormInput\">\r\n                    <mat-icon matPrefix class=\"SignFormInputIcon\">email</mat-icon>\r\n                    <input matInput placeholder=\"Email\" name=\"email\" [formControl]=\"signUpForm.controls['email']\">\r\n                    <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</mat-error>\r\n                    <mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"DataFormInput\">\r\n                <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" [formControl]=\"signUpForm.controls['password']\">\r\n                <mat-icon matSuffix (click)=\"hide = !hide\" class=\"SignFormInputIcon\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n            </mat-form-field>\r\n\r\n            <div class=\"orLable\"><span>OR</span></div>\r\n            <ul class=\"socialLinksList center-block transition\">\r\n                <li class=\"transition\">\r\n                    <a mat-fab  matTooltip=\"Facebook\" href=\"{{API_ENDPOINT}}auth/facebook\">\r\n                        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"transition\">\r\n                    <a mat-fab  matTooltip=\"twitter\" href=\"{{API_ENDPOINT}}auth/google\">\r\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"transition\">\r\n                    <a mat-fab  matTooltip=\"linked in\" href=\"{{API_ENDPOINT}}auth/linkedin\">\r\n                        <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </li>\r\n                <li class=\"transition\">\r\n                    <a mat-fab  matTooltip=\"google+\" href=\"{{API_ENDPOINT}}auth/google\">\r\n                        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"DataFormFooter\">\r\n                <button mat-button class=\"right-float\" color=\"primary\" (click)=\"signUp()\" [disabled]=\"!signUpForm.valid\" type=\"button\"><i class=\"material-icons\">check</i> sign Up</button>\r\n                <button mat-button color=\"accent\" class=\"right-float\" type=\"button\" (click)=\"closeModal()\"><i class=\"material-icons\">cancel</i> Cancel</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".termsSection{padding: 20px;}\r\n\r\n.header{ position: relative; overflow: hidden;}\r\n.header .logo{color: #222; margin-right: 30px;}\r\n.header .logo img{height: 120px; width: 120px;}\r\n.header h1{margin-top: 35px; margin-left: -20px;}\r\n.header h1 span{position: relative; display: block; font-size: 13px; font-weight: 200;}\r\n\r\nul{ padding: 20px; list-style: none; margin-top: -30px;}\r\nul li{display: block; font-size: 16px; line-height: 200%; font-weight: 600;}\r\nul li a{color: #8E9396;}\r\nul li a:hover{color: #4052B5;}\r\n\r\nul li i{color: #4052B5; position: relative; bottom: -5px;}\r\n.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow: none; }\r\n.mat-expansion-panel-header{padding-left: 0; font-size: 16px; line-height: 200%; font-weight: 600;}\r\n.title{padding: 20px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageContent animated fadeIn\">\r\n  <section class=\"myContainer white termsSection\">\r\n    <div class=\"header\">\r\n      <a routerLink=\"../\" class=\"animated fadeInLeft left-float logo\"><img src=\"assets/IMG/logo201.png\" alt=\"\"/></a>\r\n      <h1 class=\"left-float\">MeshRise privacy policy <span>(Last modified: december 25, 2017)</span></h1>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"textItem col-lg-3 col-md-4 col-sm-5 col-xs-12\">\r\n        <ul class=\"animated fadeInUp\">\r\n          <li *ngFor=\"let number of [0,1,2,3,4,5,6,7,8,9,10]; let i=index\">\r\n            <button mat-button (click)=\"policyScrollToItem(i)\"><i class=\"material-icons\">done</i> Lorem Ipsum title {{i}}</button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-9 col-md-8 col-sm-7 col-xs-12\">\r\n        <div class=\"textItem animated fadeInDown\" id=\"p{{i}}\" *ngFor=\"let number of [0,1,2,3,4,5,6,7,8,9,10]; let i=index\">\r\n          <h3>Lorem Ipsum title {{i}}</h3>\r\n          <p>{{text}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"textItem animated fadeInDown\">\r\n      <h3>Lorem Ipsum title</h3>\r\n      <ul class=\"animated fadeInUp\">\r\n        <li>\r\n          <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header><mat-panel-title><i class=\"material-icons\">done</i> value title</mat-panel-title></mat-expansion-panel-header>\r\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </li>\r\n        <li>\r\n          <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header><mat-panel-title><i class=\"material-icons\">done</i> value title</mat-panel-title></mat-expansion-panel-header>\r\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </li>\r\n        <li><i class=\"material-icons\">done</i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
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

var PrivacyComponent = (function () {
    function PrivacyComponent() {
        this.text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
            "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
            "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic " +
            "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing " +
            "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        this.sectionID = '';
    }
    PrivacyComponent.prototype.ngOnInit = function () { };
    PrivacyComponent.prototype.policyScrollToItem = function (index) {
        this.sectionID = "#p" + index;
        $('.pageContent').animate({ scrollTop: $(this.sectionID).offset().top }, 2000);
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-privacy',
            template: __webpack_require__("../../../../../src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-content{ position: relative; margin-top: 55px;}\r\n.resetPasswordFormInputIcon{color: #4052B5;}\r\n.resetPasswordForm{margin: 15vh auto; border: 1px solid #dcdce0;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\" style=\"padding: 10px;\">\n  token : {{resetPass.authToken}}\n  <div class=\"DataForm resetPasswordForm small animated zoomIn\">\n    <div class=\"DataFormHeader\"><h2><i class=\"material-icons resetPasswordFormInputIcon\">lock_outline</i> reset password</h2><span class=\"borderSpan\"></span></div>\n    <div class=\"DataFormBody\">\n      <mat-form-field class=\"DataFormInput\">\n        <mat-icon matPrefix class=\"resetPasswordFormInputIcon\">email</mat-icon>\n        <input matInput placeholder=\"your Email\" name=\"email\" [formControl]=\"emailFormControl\" [(ngModel)]=\"resetPass.email\">\n        <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"DataFormInput\">\n        <input matInput placeholder=\"Enter new password\" [(ngModel)]=\"resetPass.password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\" >\n        <mat-icon matSuffix (click)=\"hide = !hide\" class=\"resetPasswordFormInputIcon\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      </mat-form-field>\n    </div>\n    <div class=\"DataFormFooter\">\n      <button mat-button class=\"right-float\" type=\"button\" (click)=\"resetPassword()\" color=\"primary\"><i class=\"material-icons\">check</i> save</button>\n      <button mat-button color=\"accent\" class=\"right-float\" type=\"button\" (click)=\"cancel()\"><i class=\"material-icons\">cancel</i> Cancel</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mesh_rise_service__ = __webpack_require__("../../../../../src/app/mesh-rise.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(route, router, _meshRiseService) {
        this.route = route;
        this.router = router;
        this._meshRiseService = _meshRiseService;
        this.resetPass = { email: '', password: '', authToken: '' };
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)]);
        this.hide = true;
        this.validToken = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            _this.resetPass.authToken = params['authToken'];
        }, function (err) { }, function () { });
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    ResetPasswordComponent.prototype.cancel = function () { this.router.navigate(['../']); };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this._meshRiseService.resetPassword(this.resetPass).subscribe(function (result) { }, function (err) { console.error(err); __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Oops...', 'Something went wrong! maybe invalid Token', 'error'); }, function () {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Good job!', 'reset Password Success', 'success');
            _this.router.navigate(['../']);
        });
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset-password',
            template: __webpack_require__("../../../../../src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__mesh_rise_service__["a" /* MeshRiseService */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/terms/terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".termsSection{padding: 20px;}\r\n\r\n.header{ position: relative; overflow: hidden;}\r\n.header .logo{color: #222; margin-right: 30px;}\r\n.header .logo img{height: 120px; width: 120px;}\r\n.header h1{margin-top: 35px; margin-left: -20px;}\r\n.header h1 span{position: relative; display: block; font-size: 13px; font-weight: 200;}\r\n\r\nul{ padding: 20px; list-style: none; margin-top: -30px;}\r\nul li{display: block; font-size: 16px; line-height: 200%; font-weight: 600;}\r\nul li i{color: #4052B5; position: relative; bottom: -5px;}\r\n.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow: none; }\r\n.mat-expansion-panel-header{padding-left: 0; font-size: 16px; line-height: 200%; font-weight: 600;}\r\n.title{padding: 20px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageContent animated fadeIn\">\r\n  <section class=\"myContainer white termsSection\">\r\n    <div class=\"header\">\r\n      <a routerLink=\"../\" class=\"animated fadeInLeft left-float logo\"><img src=\"assets/IMG/logo201.png\" alt=\"\"/></a>\r\n      <h1 class=\"left-float\">MeshRise Terms of services <span>(Last modified: december 25, 2017)</span></h1>\r\n    </div>\r\n    <div class=\"textItem animated fadeInDown\" *ngFor=\"let number of [0,1,2,3,4,5,6,7,8,9,10]\">\r\n      <h3>Lorem Ipsum title</h3>\r\n      <p>{{text}}</p>\r\n    </div>\r\n    <div class=\"textItem animated fadeInDown\">\r\n      <h3>Lorem Ipsum title</h3>\r\n      <ul class=\"animated fadeInUp\">\r\n        <li><i class=\"material-icons\">done</i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n        <li>\r\n          <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header><mat-panel-title><i class=\"material-icons\">done</i> value title</mat-panel-title></mat-expansion-panel-header>\r\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </li>\r\n        <li><i class=\"material-icons\">done</i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n        <li>\r\n          <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header><mat-panel-title><i class=\"material-icons\">done</i> value title</mat-panel-title></mat-expansion-panel-header>\r\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </li>\r\n        <li><i class=\"material-icons\">done</i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
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

var TermsComponent = (function () {
    function TermsComponent() {
        this.text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
            "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
            "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic " +
            "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing " +
            "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    }
    TermsComponent.prototype.ngOnInit = function () { };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-terms',
            template: __webpack_require__("../../../../../src/app/terms/terms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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