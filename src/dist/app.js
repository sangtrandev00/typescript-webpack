"use strict";
exports.__esModule = true;
require("flowbite");
var tw_elements_1 = require("tw-elements");
var Footer_1 = require("./components/layout/Footer");
var Header_1 = require("./components/layout/Header");
var TopHeader_1 = require("./components/layout/TopHeader");
var router_1 = require("./router/router");
var AdminHeader_1 = require("./components/layout/AdminHeader");
var AdminSideBar_1 = require("./components/layout/AdminSideBar");
var adminRouter_1 = require("./router/adminRouter");
var AdminModal_1 = require("./components/AdminModal");
var App = /** @class */ (function () {
    function App() {
        this.siteAppEl = document.getElementById('app');
        this.adminAppEl = document.getElementById('admin-app');
        this._token = localStorage.getItem("token");
        this._userId = localStorage.getItem("userId");
        this.modalWrapperEl = document.getElementById('modal-wrapper');
        this.loginHeaderBtnEl = document.getElementById('loginHeaderBtn');
        this.userAuthenticateEl = document.getElementById('userAuthenticate');
        var url = new URL(location.href);
        var pathName = url.pathname;
        console.log(pathName);
        console.log(pathName.startsWith("/admin"));
        if (pathName.startsWith("/admin")) {
            this.initAdmin();
        }
        else {
            this.initSite();
        }
        tw_elements_1.initTE({ Modal: tw_elements_1.Modal, Ripple: tw_elements_1.Ripple, Toast: tw_elements_1.Toast, Tab: tw_elements_1.Tab, Carousel: tw_elements_1.Carousel, Sidenav: tw_elements_1.Sidenav, Collapse: tw_elements_1.Collapse, Dropdown: tw_elements_1.Dropdown, Select: tw_elements_1.Select, Input: tw_elements_1.Input }, true);
    }
    // // Function to attach event listener
    App.prototype.initCart = function () {
        if (!localStorage.getItem("cart")) {
            var cart = {
                cartList: [],
                totalPrice: 0
            };
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        if (!sessionStorage.getItem("views")) {
            var views = {};
            sessionStorage.setItem("views", JSON.stringify(views));
        }
    };
    // initAuth() {
    //     (async () => {
    //         if (this._token) {
    //             const response = await ShopApi.getUserById(this._userId || "");
    //             const { user } = response.data;
    //           if(!user) return;
    //             const isCorrectedToken = this._token === user.loginToken;
    //             const isExpired = new Date(user.loginTokenExpiration).getTime() - Date.now() < 0;
    //             const isAuthenticated = this._token && isCorrectedToken && !isExpired;
    //             if (isAuthenticated) {
    //               this.userAuthenticateEl.classList.remove("hidden");
    //               this.loginHeaderBtnEl.classList.add("hidden");
    //             }
    //           }
    //     })()
    // }
    App.prototype.initSite = function () {
        this.adminAppEl.remove();
        this.initCart();
        // this.initAuth();
        new TopHeader_1["default"]();
        new Header_1["default"]();
        new router_1["default"](); // Router content here!!!
        new Footer_1["default"]();
        window.onpopstate = function () { return new router_1["default"](); };
    };
    App.prototype.initAdmin = function () {
        this.siteAppEl.remove();
        // Init adminHeader
        new AdminHeader_1["default"]();
        new AdminSideBar_1["default"]();
        new adminRouter_1["default"]();
        new AdminModal_1["default"]();
        // Init adminSideBar
        // Init Admin content
    };
    return App;
}());
exports["default"] = App;
new App();
