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
var adminRouter_1 = require("../../../router/adminRouter");
var base_component_1 = require("../../base-component");
var templateHTML = "\n    <aside\n    class=\"fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700\"\n    aria-label=\"Sidenav\" id=\"drawer-navigation\">\n    <div class=\"overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800\">\n        <form action=\"#\" method=\"GET\" class=\"md:hidden mb-2\">\n            <label for=\"sidebar-search\" class=\"sr-only\">Search</label>\n            <div class=\"relative\">\n                <div class=\"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none\">\n                    <svg class=\"w-5 h-5 text-gray-500 dark:text-gray-400\" fill=\"currentColor\"\n                        viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                            d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\">\n                        </path>\n                    </svg>\n                </div>\n                <input type=\"text\" name=\"search\" id=\"sidebar-search\"\n                    class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500\"\n                    placeholder=\"Search\" />\n            </div>\n        </form>\n        <ul class=\"space-y-2\" id=\"navigate-sidebar\">\n            <li>\n                <a id=\"overview-btn\" href=\"/admin\"\n                    class=\"flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group\">\n                    <svg aria-hidden=\"true\"\n                        class=\"w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white\"\n                        fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z\"></path>\n                        <path d=\"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z\"></path>\n                    </svg>\n                    <span class=\"ml-3\">Overview</span>\n                </a>\n            </li>\n        \n            <li>\n                <button type=\"button\"\n                    class=\"flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700\"\n                    aria-controls=\"dropdown-list\" data-collapse-toggle=\"dropdown-list\" aria-expanded=\"true\">\n                    <svg aria-hidden=\"true\"\n                        class=\"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white\"\n                        fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\"\n                            d=\"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z\"\n                            clip-rule=\"evenodd\"></path>\n                    </svg>\n                    <span class=\"flex-1 ml-3 text-left whitespace-nowrap\">Menu</span>\n                    <svg aria-hidden=\"true\" class=\"w-6 h-6\" fill=\"currentColor\" viewBox=\"0 0 20 20\"\n                        xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\"\n                            d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\"\n                            clip-rule=\"evenodd\"></path>\n                    </svg>\n                </button>\n                <ul id=\"dropdown-list\" class=\"py-2 space-y-2\">\n                    <li>\n                        <a href=\"/admin-products\"\n                            class=\"flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700\">Products</a>\n                    </li>\n                    <li>\n                        <a href=\"/admin-categories\"\n                            class=\"flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700\">Categories</a>\n                    </li>\n                    <li>\n                        <a href=\"/admin-users\"\n                            class=\"flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700\">Users</a>\n                    </li>\n                    <li>\n                        <a href=\"/admin-orders\"\n                            class=\"flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700\">Orders</a>\n                    </li>\n                </ul>\n            </li>\n        \n            \n        </ul>\n        \n    </div>\n\n    </aside>\n";
var AdminSidebar = /** @class */ (function (_super) {
    __extends(AdminSidebar, _super);
    function AdminSidebar() {
        var _this = _super.call(this, 'admin-sidebar') || this;
        _this.hostEl.innerHTML = templateHTML;
        _this.dropdownListEl = document.getElementById('navigate-sidebar');
        _this.overviewBtnEl = document.getElementById('overview-btn');
        _this.attach();
        return _this;
    }
    AdminSidebar.prototype.attach = function () {
        this.dropdownListEl.addEventListener('click', this.navigateHandler);
    };
    AdminSidebar.prototype.navigateHandler = function (e) {
        e.preventDefault();
        var linkEl = e.target;
        if (linkEl && linkEl.nodeName === 'A') {
            var route = linkEl.getAttribute('href');
            history.pushState({}, '', route);
            new adminRouter_1["default"]();
        }
    };
    return AdminSidebar;
}(base_component_1["default"]));
exports["default"] = AdminSidebar;
