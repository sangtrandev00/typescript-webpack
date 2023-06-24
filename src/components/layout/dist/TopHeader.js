"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var router_1 = require("../../router/router");
var base_component_1 = require("../base-component");
var templateHTML = "\n<nav class=\"before:flex-no-wrap fixed z-20 left-0 right-0 top-0 flex items-center justify-between bg-slate-300 text-white py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 xl:px-20 mx-auto\"\ndata-te-navbar-ref>\n\n<div class=\"flex w-full flex-wrap items-center justify-between px-3 container\">\n    <!-- Hamburger button for mobile view -->\n    <button\n        class=\"block border-0 bg-transparent px-2 text-neutral-800 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden\"\n        type=\"button\" data-te-collapse-init data-te-target=\"#navbarSupportedContent1\"\n        aria-controls=\"navbarSupportedContent1\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <!-- Hamburger icon -->\n        <span class=\"[&>svg]:w-7\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"\n                class=\"h-7 w-7\">\n                <path fill-rule=\"evenodd\"\n                    d=\"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z\"\n                    clip-rule=\"evenodd\" />\n            </svg>\n        </span>\n    </button>\n\n    <!-- Collapsible navigation container -->\n    <div class=\"!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto justify-between\"\n        id=\"navbarSupportedContent1\" data-te-collapse-item>\n\n        <!-- Left navigation links -->\n        <ul class=\"list-style-none mr-auto flex flex-col pl-0 lg:flex-row w-full \" data-te-navbar-nav-ref>\n            <li class=\"mb-4 lg:mb-0 lg:pr-2\" data-te-nav-item-ref>\n                <!-- Dashboard link -->\n\n                <a class=\"text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400\"\n                    href=\"phone:0937988510\" data-te-nav-link-ref>Phone: 0937988510</a>\n            </li>\n            <!-- Team link -->\n\n            <li class=\"mb-4 lg:mb-0 lg:pr-2\" data-te-nav-item-ref>\n                <a class=\"text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400\"\n                    href=\"#\" data-te-nav-link-ref>Email: techspace@gmail.com</a>\n            </li>\n            <li>\n\n                <a id=\"userName\"  class=\"text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400\"\n                href=\"#\" data-te-nav-link-ref></a>\n            </li>\n        </ul>\n    </div>\n\n    <!-- Right elements -->\n    <div class=\"relative flex items-center\">\n        <!-- Cart Icon -->\n        <a id=\"viewCartBtn\" class=\"relative mr-4 text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400\"\n            href=\"./view-cart.html\">\n            <span class=\"[&>svg]:w-5\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"\n                    class=\"h-5 w-5\">\n                    <path\n                        d=\"M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z\" />\n                </svg>\n            </span>\n\n            <span id=\"numberCartItems\" class=\"absolute -top-4 -right-3 z-10 rounded-full text-red-700 font-medium bg-slate-100 w-6 h-6 text-center\">\n            12\n            </span>\n\n        </a>\n\n        <!-- Container with two dropdown menus -->\n        <div class=\"relative\" data-te-dropdown-ref>\n            <!-- First dropdown trigger -->\n            <a class=\"hidden-arrow mr-4 flex items-center text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400\"\n                href=\"./wishlist.html\">\n                <i class=\"fa-regular fa-heart\"></i>\n            </a>\n           \n        </div>\n\n        <!-- Second dropdown container -->\n        <div class=\"relative\" data-te-dropdown-ref>\n            <!-- Second dropdown trigger -->\n            <a id=\"userAuthenticate\" class=\"hidden items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none\"\n                href=\"#\" role=\"button\" data-te-dropdown-toggle-ref\n                aria-expanded=\"false\">\n                <!-- User avatar -->\n                <img id=\"userAvatar\" src=\"https://tecdn.b-cdn.net/img/new/avatars/2.jpg\" class=\"rounded-full\"\n                    style=\"height: 25px; width: 25px\" alt=\"\" loading=\"lazy\" />\n            </a>\n            <!-- Second dropdown menu -->\n            <ul class=\"absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block\"\n                aria-labelledby=\"userAuthenticate\" data-te-dropdown-menu-ref>\n                <!-- Second dropdown menu items -->\n                <li>\n                    <a class=\"block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30\"\n                        href=\"#\" data-te-dropdown-item-ref>Account</a>\n                </li>\n                <li>\n                    <a class=\"block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30\"\n                        href=\"#\" data-te-dropdown-item-ref>History orders</a>\n                </li>\n                <li>\n                    <a id=\"logoutBtn\" class=\"block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30\"\n                        href=\"./logout.html\" data-te-dropdown-item-ref>Logout</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n</nav>\n";
var TopHeader = /** @class */ (function (_super) {
    __extends(TopHeader, _super);
    function TopHeader() {
        var _this = _super.call(this, 'top-header') || this;
        _this.render();
        _this.hostEl.innerHTML = templateHTML;
        _this.viewCartBtnEl = document.getElementById("viewCartBtn");
        _this.attach();
        return _this;
    }
    TopHeader.prototype.render = function () {
        console.log("Top header rendered!");
    };
    TopHeader.prototype.attach = function () {
        this.hostEl.addEventListener('click', this.navigateHandler);
        this.viewCartBtnEl.addEventListener('click', this.viewCartHandler);
    };
    TopHeader.prototype.navigateHandler = function (e) {
        e.preventDefault();
        console.log(e.target);
    };
    TopHeader.prototype.viewCartHandler = function (e) {
        e.preventDefault();
        history.pushState({}, "", "./cart");
        new router_1["default"]();
    };
    return TopHeader;
}(base_component_1["default"]));
exports["default"] = TopHeader;
