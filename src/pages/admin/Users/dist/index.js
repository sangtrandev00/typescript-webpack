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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var userApi_1 = require("../../../api/userApi");
// import Component from "../../../components/base-component";
var backend_domain_1 = require("../../../constant/backend-domain");
var datatables_net_dt_1 = require("datatables.net-dt");
var AdminComponent_1 = require("../AdminComponent");
var ModalForm_1 = require("./components/ModalForm");
var autobind_1 = require("../../../decorators/autobind");
var templateHTML = "\n<!-- Main content wrapper -->\n<main class=\"p-4 md:ml-64 h-auto pt-20\">\n    <!-- Start block -->\n    <section class=\"bg-gray-50 dark:bg-gray-900 antialiased\">\n        <div class=\"mx-auto max-w-screen-xl px-4 lg:px-12\">\n            <!-- Start coding here -->\n            <div class=\"bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden\">\n                <div\n                    class=\"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4\">\n                    <div class=\"w-full md:w-1/2\">\n                        <form class=\"flex items-center\">\n                            <label for=\"simple-search\" class=\"sr-only\">Search</label>\n                            <div class=\"relative w-full\">\n                                <div\n                                    class=\"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none\">\n                                    <svg aria-hidden=\"true\" class=\"w-5 h-5 text-gray-500 dark:text-gray-400\"\n                                        fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                                        xmlns=\"http://www.w3.org/2000/svg\">\n                                        <path fill-rule=\"evenodd\"\n                                            d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\"\n                                            clip-rule=\"evenodd\" />\n                                    </svg>\n                                </div>\n                                <input type=\"text\" id=\"simple-search\"\n                                    class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500\"\n                                    placeholder=\"Search\" required=\"\">\n                            </div>\n                        </form>\n                    </div>\n                    <div\n                        class=\"w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0\">\n                        <button type=\"button\" id=\"UserModalButton\" data-modal-target=\"UserModal\"\n                            data-modal-toggle=\"UserModal\"\n                            class=\"flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800\">\n                            <svg class=\"h-3.5 w-3.5 mr-2\" fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                                xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n                                <path clip-rule=\"evenodd\" fill-rule=\"evenodd\"\n                                    d=\"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z\" />\n                            </svg>\n                            Add User\n                        </button>\n                        <div class=\"flex items-center space-x-3 w-full md:w-auto\">\n                            <button id=\"actionsDropdownButton\" data-dropdown-toggle=\"actionsDropdown\"\n                                class=\"w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700\"\n                                type=\"button\">\n                                <svg class=\"-ml-1 mr-1.5 w-5 h-5\" fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                                    xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n                                    <path clip-rule=\"evenodd\" fill-rule=\"evenodd\"\n                                        d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" />\n                                </svg>\n                                Actions\n                            </button>\n                            <div id=\"actionsDropdown\"\n                                class=\"hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600\">\n                                <ul class=\"py-1 text-sm text-gray-700 dark:text-gray-200\"\n                                    aria-labelledby=\"actionsDropdownButton\">\n                                    <li>\n                                        <a href=\"#\"\n                                            class=\"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Mass\n                                            Edit</a>\n                                    </li>\n                                </ul>\n                                <div class=\"py-1\">\n                                    <a href=\"#\"\n                                        class=\"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white\">Delete\n                                        all</a>\n                                </div>\n                            </div>\n                            <button id=\"filterDropdownButton\" data-dropdown-toggle=\"filterDropdown\"\n                                class=\"w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700\"\n                                type=\"button\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"\n                                    class=\"h-4 w-4 mr-2 text-gray-400\" viewbox=\"0 0 20 20\"\n                                    fill=\"currentColor\">\n                                    <path fill-rule=\"evenodd\"\n                                        d=\"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z\"\n                                        clip-rule=\"evenodd\" />\n                                </svg>\n                                Filter\n                                <svg class=\"-mr-1 ml-1.5 w-5 h-5\" fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                                    xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n                                    <path clip-rule=\"evenodd\" fill-rule=\"evenodd\"\n                                        d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" />\n                                </svg>\n                            </button>\n                            <div id=\"filterDropdown\"\n                                class=\"z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700\">\n                                <h6 class=\"mb-3 text-sm font-medium text-gray-900 dark:text-white\">Category\n                                </h6>\n                                <ul class=\"space-y-2 text-sm\" aria-labelledby=\"filterDropdownButton\">\n                                    <li class=\"flex items-center\">\n                                        <input id=\"apple\" type=\"checkbox\" value=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"apple\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Apple\n                                            (56)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"fitbit\" type=\"checkbox\" value=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"fitbit\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Fitbit\n                                            (56)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"dell\" type=\"checkbox\" value=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"dell\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Dell\n                                            (56)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"asus\" type=\"checkbox\" value=\"\" checked=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"asus\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Asus\n                                            (97)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"logitech\" type=\"checkbox\" value=\"\" checked=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"logitech\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Logitech\n                                            (97)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"msi\" type=\"checkbox\" value=\"\" checked=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"msi\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">MSI\n                                            (97)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"bosch\" type=\"checkbox\" value=\"\" checked=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"bosch\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Bosch\n                                            (176)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"sony\" type=\"checkbox\" value=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"sony\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Sony\n                                            (234)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"samsung\" type=\"checkbox\" value=\"\" checked=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"samsung\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Samsung\n                                            (76)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"canon\" type=\"checkbox\" value=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"canon\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Canon\n                                            (49)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"microsoft\" type=\"checkbox\" value=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"microsoft\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Microsoft\n                                            (45)</label>\n                                    </li>\n                                    <li class=\"flex items-center\">\n                                        <input id=\"razor\" type=\"checkbox\" value=\"\"\n                                            class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                        <label for=\"razor\"\n                                            class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Razor\n                                            (49)</label>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div id=\"display-users\" class=\"overflow-x-auto\">\n                    <table id=\"table-users\"\n                        class=\"w-full text-sm text-left text-gray-500 dark:text-gray-400\">\n                        <thead\n                            class=\"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\">\n                            <tr>\n                                <th scope=\"col\" class=\"px-4 py-4\">#ID</th>\n                                <th scope=\"col\" class=\"px-4 py-4\">User Name</th>\n                                <th scope=\"col\" class=\"px-4 py-4\">Avatar</th>\n                                <th scope=\"col\" class=\"px-4 py-4\">Provider Id</th>\n                                <th scope=\"col\" class=\"px-4 py-4\">Email</th>\n                                <th scope=\"col\" class=\"px-4 py-4\">Phone</th>\n                                <th scope=\"col\" class=\"px-4 py-3\">Address</th>\n                                <th scope=\"col\" class=\"px-4 py-3\">Role</th>\n                                <th scope=\"col\" class=\"px-4 py-3\">Payment</th>\n                                <th scope=\"col\" class=\"px-4 py-3\">\n                                    Actions\n                                </th>\n                            </tr>\n                        </thead>\n                        \n                    </table>\n                </div>\n\n            </div>\n        </div>\n    </section>\n    <!-- End block -->\n    <!-- Create/Edit modal -->\n    <div id=\"UserModal\" tabindex=\"-1\" aria-hidden=\"true\"\n        class=\"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full\">\n        \n    </div>\n\n    <!-- Delete modal -->\n    <div id=\"deleteModal\" tabindex=\"-1\" aria-hidden=\"true\"\n        class=\"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full\">\n        <div class=\"relative p-4 w-full max-w-md max-h-full\">\n            <!-- Modal content -->\n            <div class=\"relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5\">\n                <button type=\"button\"\n                    class=\"text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\"\n                    data-modal-toggle=\"deleteModal\">\n                    <svg aria-hidden=\"true\" class=\"w-5 h-5\" fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                        xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\"\n                            d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\"\n                            clip-rule=\"evenodd\" />\n                    </svg>\n                    <span class=\"sr-only\">Close modal</span>\n                </button>\n                <svg class=\"text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto\" aria-hidden=\"true\"\n                    fill=\"currentColor\" viewbox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\"\n                        d=\"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z\"\n                        clip-rule=\"evenodd\" />\n                </svg>\n                <p class=\"mb-4 text-gray-500 dark:text-gray-300\">Are you sure you want to delete this item?\n                </p>\n                <div class=\"flex justify-center items-center space-x-4\">\n                    <button data-modal-toggle=\"deleteModal\" type=\"button\"\n                        class=\"py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\">No,\n                        cancel</button>\n                    <button id=\"delete-user-btn\" type=\"submit\"\n                        class=\"py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900\">Yes,\n                        I'm sure</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <button class=\"hidden\" type=\"button\" id=\"updateUserBtn\" data-modal-target=\"updateUserModal\"\n        data-modal-toggle=\"updateUserModal\">Update Product Modal Button</button>\n    <button class=\"hidden\" type=\"button\" id=\"deleteUserBtn\" data-modal-target=\"deleteModal\"\n        data-modal-toggle=\"deleteModal\">Update Product Modal Button</button>\n\n    <div class=\"toasts-wrapper fixed top-20 right-4\">\n        <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-primary-100 bg-clip-padding text-sm text-primary-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden\"\n            id=\"toast-primary-el\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n            data-te-autohide=\"false\" data-te-toast-init data-te-toast-show>\n            <div\n                class=\"flex items-center justify-between rounded-t-lg border-b-2 border-primary-200 bg-primary-100 bg-clip-padding px-4 pb-2 pt-2.5 text-primary-700\">\n                <p class=\"toast-title flex items-center font-bold text-primary-700\">\n                    <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"info-circle\"\n                        class=\"mr-2 h-4 w-4 fill-current\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"\n                        viewBox=\"0 0 512 512\">\n                        <path fill=\"currentColor\"\n                            d=\"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z\">\n                        </path>\n                    </svg>\n                    MDBootstrap\n                </p>\n                <div class=\"flex items-center\">\n                    <p class=\"text-xs text-primary-700 toast-minutes\">11 mins ago</p>\n                    <button type=\"button\"\n                        class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\"\n                        data-te-toast-dismiss aria-label=\"Close\">\n                        <span\n                            class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                    d=\"M6 18L18 6M6 6l12 12\" />\n                            </svg>\n                        </span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"toast-message break-words rounded-b-lg bg-primary-100 px-4 py-4 text-primary-700\">\n                Hello, world! This is a toast message.\n            </div>\n        </div>\n        <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-success-100 bg-clip-padding text-sm text-success-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden \"\n            id=\"toast-success-el\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n            data-te-autohide=\"false\" data-te-toast-init data-te-toast-show>\n            <div\n                class=\"flex items-center justify-between rounded-t-lg border-b-2 border-success/20 bg-success-100 bg-clip-padding px-4 pb-2 pt-2.5\">\n                <p class=\"toast-title flex items-center font-bold text-success-700\">\n                    <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"check-circle\"\n                        class=\"mr-2 h-4 w-4 fill-current\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"\n                        viewBox=\"0 0 512 512\">\n                        <path fill=\"currentColor\"\n                            d=\"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z\">\n                        </path>\n                    </svg>\n                    MDBootstrap\n                </p>\n                <div class=\"flex items-center\">\n                    <p class=\"text-xs text-success-700 toast-minutes\">11 mins ago</p>\n                    <button type=\"button\"\n                        class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\"\n                        data-te-toast-dismiss aria-label=\"Close\">\n                        <span\n                            class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                    d=\"M6 18L18 6M6 6l12 12\" />\n                            </svg>\n                        </span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"toast-message break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700\">\n                Hello, world! This is a toast message.\n            </div>\n        </div>\n        <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-warning-100 bg-clip-padding text-sm text-warning-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden\"\n            id=\"toast-warning-el\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n            data-te-autohide=\"false\" data-te-toast-init data-te-toast-show>\n            <div\n                class=\"flex items-center justify-between rounded-t-lg border-b-2 border-warning-200 bg-warning-100 bg-clip-padding px-4 pb-2 pt-2.5 text-warning-700\">\n                <p class=\"toast-title flex items-center font-bold text-warning-700\">\n                    <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\"\n                        data-icon=\"exclamation-triangle\" class=\"mr-2 h-4 w-4 fill-current\" role=\"img\"\n                        xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\">\n                        <path fill=\"currentColor\"\n                            d=\"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z\">\n                        </path>\n                    </svg>\n                    MDBootstrap\n                </p>\n                <div class=\"flex items-center\">\n                    <p class=\"text-xs text-warning-700 opacity-90 toast-minutes\">11 mins ago</p>\n                    <button type=\"button\"\n                        class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\"\n                        data-te-toast-dismiss aria-label=\"Close\">\n                        <span\n                            class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                    d=\"M6 18L18 6M6 6l12 12\" />\n                            </svg>\n                        </span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"toast-message break-words rounded-b-lg bg-warning-100 px-4 py-4 text-warning-700\">\n                Hello, world! This is a toast message.\n            </div>\n        </div>\n        <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-danger-100 bg-clip-padding text-sm text-danger-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden\"\n            id=\"toast-danger-el\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n            data-te-autohide=\"false\" data-te-toast-init data-te-toast-show>\n            <div\n                class=\"flex items-center justify-between rounded-t-lg border-b-2 border-danger-200 bg-danger-300 bg-clip-padding px-4 pb-2 pt-2.5 text-danger-700\">\n                <p class=\"toast-title flex items-center font-bold text-danger-700\">\n                    <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"times-circle\"\n                        class=\"mr-2 h-4 w-4 fill-current\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"\n                        viewBox=\"0 0 512 512\">\n                        <path fill=\"currentColor\"\n                            d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z\">\n                        </path>\n                    </svg>\n                    MDBootstrap\n                </p>\n                <div class=\"flex items-center\">\n                    <p class=\"text-xs text-danger-700 toast-minutes\">11 mins ago</p>\n                    <button type=\"button\"\n                        class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\"\n                        data-te-toast-dismiss aria-label=\"Close\">\n                        <span\n                            class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                    d=\"M6 18L18 6M6 6l12 12\" />\n                            </svg>\n                        </span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"toast-message break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700\">\n                Hello, world! This is a toast message.\n            </div>\n        </div>\n    </div>\n</main>\n";
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        var _this = _super.call(this, 'user', 'table-users', 'UserModal', 'toast-success', 'UserModalButton', 'closeModalForm', 'closeToast', 'deleteUserBtn', 'delete-user-btn', 'add-user-form') || this;
        _this.tableEl.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
        return _this;
    }
    Users.prototype.render = function () {
        var _this = this;
        var renderUsersList = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, users, tableRows, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, userApi_1["default"].getAll()];
                    case 1:
                        response = _a.sent();
                        users = response.data.users;
                        tableRows = users.map(function (user) {
                            var _id = user._id, name = user.name, avatar = user.avatar, email = user.email, phone = user.phone, address = user.address, role = user.role, payment = user.payment, providerId = user.providerId;
                            var avatarHtml;
                            if (avatar === null || avatar === void 0 ? void 0 : avatar.startsWith("http")) {
                                avatarHtml = "<img class=\"h-12 w-12 object-cover\" src=\"" + avatar + "\" alt=\"" + name + "\" />";
                            }
                            else {
                                avatarHtml = "<img class=\"h-12 w-12 object-cover\" src=\"" + backend_domain_1.BACKEND_URL + "/" + avatar + "\" alt=\"" + name + "\" />";
                            }
                            return [
                                "<p class=\"truncate-id\">" + _id + "</p>",
                                "<p class=\"truncate-text\">" + (name || "") + "</p>",
                                avatarHtml,
                                providerId || "",
                                email || "",
                                phone || "",
                                "<p class=\"truncate-text\">" + (address || "") + "</p>",
                                role || "client",
                                payment,
                                "\n                  <div class=\"flex space-x-2 w-10 h-full\">\n                    <button class=\"update-modal-trigger\" user-id=\"" + _id + "\" type=\"button\">\n                      <i class=\"update-modal-trigger fa-solid fa-pen-to-square text-primary-700\"></i>\n                      Edit\n                    </button>\n                    <button class=\"delete-modal-trigger\" user-id=\"" + _id + "\" type=\"button\">\n                      <i class=\"delete-modal-trigger fa-solid fa-delete-left text-red-600\"></i>\n                      Delete\n                    </button>\n                  \n                  </div>\n                  ",
                            ];
                        });
                        this.clearTableData();
                        this.dataTable = new datatables_net_dt_1["default"]("#table-users", {
                            data: tableRows,
                            columns: [
                                { title: "ID" },
                                { title: "User Name" },
                                { title: "Avatar" },
                                { title: "ProviderId" },
                                { title: "Email" },
                                { title: "Phone" },
                                { title: "Address" },
                                { title: "Role" },
                                { title: "Payment" },
                                { title: "Actions" },
                            ]
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        renderUsersList();
    };
    Users.prototype.submitHandler = function (e) {
        var _this = this;
        e.preventDefault();
        var UserForm = e.target;
        var typeForm = UserForm.getAttribute('id');
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var elements, avatarImage, name, email, phone, address, password, role, formData, response, oldAvatar, message, error_2;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        elements = (UserForm).elements;
                        if (elements["avatar"]) {
                            avatarImage = (_a = elements["avatar"].files) === null || _a === void 0 ? void 0 : _a[0];
                        }
                        name = elements["name"].value;
                        email = elements["email"].value;
                        phone = elements["phone"].value;
                        address = elements["address"].value;
                        password = elements["password"].value;
                        role = elements["role"].value;
                        formData = new FormData();
                        formData.append("name", name);
                        formData.append("email", email);
                        formData.append("phone", phone);
                        formData.append("address", address);
                        formData.append("password", password);
                        formData.append("role", role);
                        if (avatarImage) {
                            formData.append("avatar", avatarImage);
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        response = void 0;
                        if (!(typeForm === "update-user-form")) return [3 /*break*/, 3];
                        oldAvatar = elements['oldAvatar'].value;
                        formData.append("oldAvatar", oldAvatar);
                        return [4 /*yield*/, userApi_1["default"].update(formData, this._currentId)];
                    case 2:
                        // Update cate call API
                        response = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, userApi_1["default"].add(formData)];
                    case 4:
                        // Add cate Call API
                        response = _b.sent();
                        _b.label = 5;
                    case 5:
                        console.log(response.data);
                        message = response.data.message;
                        // Handle add toast here!!
                        this.render();
                        this.closeFormModal();
                        this.showToast('success', 'Success', message);
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); })();
    };
    Users.prototype.deleteHandler = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var response, _a, message, userId, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, userApi_1["default"]["delete"](this._currentId)];
                    case 1:
                        response = _b.sent();
                        _a = response.data, message = _a.message, userId = _a.userId;
                        this.render();
                        this.toggleDeleteModal();
                        this.showToast('warning', "Delete #id: " + userId, message);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    };
    Users.prototype.addHandler = function () {
        new ModalForm_1["default"]('add');
        this.showModal('add');
    };
    Users.prototype.editHandler = function () {
        var _this = this;
        new ModalForm_1["default"]('update');
        this.showModal('update');
        var UserForm = document.getElementById('update-user-form');
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var response, user, name, avatar, email, phone, address, password, role, elements, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, userApi_1["default"].getById(this._currentId)];
                    case 1:
                        response = _a.sent();
                        user = response.data.user;
                        name = user.name, avatar = user.avatar, email = user.email, phone = user.phone, address = user.address, password = user.password, role = user.role;
                        elements = UserForm.elements;
                        elements["name"].value = name;
                        elements["oldAvatar"].value = avatar;
                        elements["email"].value = email;
                        elements["phone"].value = phone;
                        elements["address"].value = address;
                        elements["password"].value = password;
                        elements["role"].value = role;
                        console.log(role);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    };
    Object.defineProperty(Users.prototype, "component", {
        get: function () {
            return templateHTML;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        autobind_1.autobind
    ], Users.prototype, "submitHandler");
    __decorate([
        autobind_1.autobind
    ], Users.prototype, "deleteHandler");
    __decorate([
        autobind_1.autobind
    ], Users.prototype, "addHandler");
    __decorate([
        autobind_1.autobind
    ], Users.prototype, "editHandler");
    return Users;
}(AdminComponent_1["default"]));
exports["default"] = Users;
