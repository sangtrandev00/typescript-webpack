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
var datatables_net_dt_1 = require("datatables.net-dt");
var categoriesApi_1 = require("../../../api/categoriesApi");
var backend_domain_1 = require("../../../constant/backend-domain");
var autobind_1 = require("../../../decorators/autobind");
var ActionButton_1 = require("../../../components/AdminForm/ActionButton");
// import ToastMessage from "../../../components/AdminToast";
var modalForm_1 = require("./components/modalForm");
var AdminComponent_1 = require("../AdminComponent");
//@ts-ignore
var just_validate_1 = require("just-validate");
var templateHTML = "\n<!-- Main content wrapper -->\n    <main class=\"p-4 md:ml-64 h-auto pt-20\">\n        <!-- Start block -->\n        <section class=\"bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased\">\n            <div class=\"mx-auto max-w-screen-xl px-4 lg:px-12\">\n                <!-- Start coding here -->\n                <div class=\"bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden\">\n                    <div\n                        class=\"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4\">\n                        <div class=\"w-full md:w-1/2\">\n                            <form class=\"flex items-center\">\n                                <label for=\"simple-search\" class=\"sr-only\">Search</label>\n                                <div class=\"relative w-full\">\n                                    <div\n                                        class=\"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none\">\n                                        <svg aria-hidden=\"true\" class=\"w-5 h-5 text-gray-500 dark:text-gray-400\"\n                                            fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                                            xmlns=\"http://www.w3.org/2000/svg\">\n                                            <path fill-rule=\"evenodd\"\n                                                d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\"\n                                                Type category name          clip-rule=\"evenodd\" />\n                                        </svg>\n                                    </div>\n                                    <input type=\"text\" id=\"simple-search\"\n                                        class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500\"\n                                        placeholder=\"Search\" required=\"\">\n                                </div>\n                            </form>\n                        </div>\n                        <div\n                            class=\"w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0\">\n                            <button type=\"button\" id=\"createCategoryModalButton\"\n                                data-modal-target=\"createCategoryModal\" data-modal-toggle=\"createCategoryModal\"\n                                class=\"flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800\">\n                                <svg class=\"h-3.5 w-3.5 mr-2\" fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                                    xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n                                    <path clip-rule=\"evenodd\" fill-rule=\"evenodd\"\n                                        d=\"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z\" />\n                                </svg>\n                                Add Category\n                            </button>\n                            <div class=\"flex items-center space-x-3 w-full md:w-auto\">\n                                <button id=\"actionsDropdownButton\" data-dropdown-toggle=\"actionsDropdown\"\n                                    class=\"w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700\"\n                                    type=\"button\">\n                                    <svg class=\"-ml-1 mr-1.5 w-5 h-5\" fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                                        xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n                                        <path clip-rule=\"evenodd\" fill-rule=\"evenodd\"\n                                            d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" />\n                                    </svg>\n                                    Actions\n                                </button>\n                                <div id=\"actionsDropdown\"\n                                    class=\"hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600\">\n                                    <ul class=\"py-1 text-sm text-gray-700 dark:text-gray-200\"\n                                        aria-labelledby=\"actionsDropdownButton\">\n                                        <li>\n                                            <a href=\"#\"\n                                                class=\"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Mass\n                                                Edit</a>\n                                        </li>\n                                    </ul>\n                                    <div class=\"py-1\">\n                                        <a href=\"#\"\n                                            class=\"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white\">Delete\n                                            all</a>\n                                    </div>\n                                </div>\n                                <button id=\"filterDropdownButton\" data-dropdown-toggle=\"filterDropdown\"\n                                    class=\"w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700\"\n                                    type=\"button\">\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"\n                                        class=\"h-4 w-4 mr-2 text-gray-400\" viewbox=\"0 0 20 20\"\n                                        fill=\"currentColor\">\n                                        <path fill-rule=\"evenodd\"\n                                            d=\"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z\"\n                                            clip-rule=\"evenodd\" />\n                                    </svg>\n                                    Filter\n                                    <svg class=\"-mr-1 ml-1.5 w-5 h-5\" fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                                        xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n                                        <path clip-rule=\"evenodd\" fill-rule=\"evenodd\"\n                                            d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" />\n                                    </svg>\n                                </button>\n                                <div id=\"filterDropdown\"\n                                    class=\"z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700\">\n                                    <h6 class=\"mb-3 text-sm font-medium text-gray-900 dark:text-white\">Category\n                                    </h6>\n                                    <ul class=\"space-y-2 text-sm\" aria-labelledby=\"filterDropdownButton\">\n                                        <li class=\"flex items-center\">\n                                            <input id=\"apple\" type=\"checkbox\" value=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"apple\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Apple\n                                                (56)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"fitbit\" type=\"checkbox\" value=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"fitbit\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Fitbit\n                                                (56)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"dell\" type=\"checkbox\" value=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"dell\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Dell\n                                                (56)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"asus\" type=\"checkbox\" value=\"\" checked=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"asus\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Asus\n                                                (97)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"logitech\" type=\"checkbox\" value=\"\" checked=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"logitech\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Logitech\n                                                (97)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"msi\" type=\"checkbox\" value=\"\" checked=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"msi\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">MSI\n                                                (97)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"bosch\" type=\"checkbox\" value=\"\" checked=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"bosch\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Bosch\n                                                (176)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"sony\" type=\"checkbox\" value=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"sony\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Sony\n                                                (234)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"samsung\" type=\"checkbox\" value=\"\" checked=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"samsung\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Samsung\n                                                (76)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"canon\" type=\"checkbox\" value=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"canon\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Canon\n                                                (49)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"microsoft\" type=\"checkbox\" value=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"microsoft\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Microsoft\n                                                (45)</label>\n                                        </li>\n                                        <li class=\"flex items-center\">\n                                            <input id=\"razor\" type=\"checkbox\" value=\"\"\n                                                class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500\">\n                                            <label for=\"razor\"\n                                                class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100\">Razor\n                                                (49)</label>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div id=\"display-categories\" class=\"overflow-x-auto\">\n                        <table id=\"table-categories\"\n                            class=\"w-full text-sm text-left text-gray-500 dark:text-gray-400\">\n                            <thead\n                                class=\"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\">\n                                <tr>\n                                    <th scope=\"col\" class=\"px-4 py-4\">ID</th>\n                                    <th scope=\"col\" class=\"px-4 py-4\">Category name</th>\n                                    <th scope=\"col\" class=\"px-4 py-3\">image</th>\n                                    <th scope=\"col\" class=\"px-4 py-3\">Description</th>\n                                    <th scope=\"col\" class=\"px-4 py-3\">Qty products</th>\n                                    <th scope=\"col\" class=\"px-4 py-3\">Action</th>\n                                    <th scope=\"col\" class=\"px-4 py-3\">\n                                        <span class=\"sr-only\">Actions</span>\n                                    </th>\n                                </tr>\n                            </thead>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- End block -->\n        <!-- Create/Edit modal -->\n        <div id=\"CategoryModal\" tabindex=\"-1\" aria-hidden=\"true\"\n            class=\"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[rgba(0,0,0,0.5)]\">\n            \n        </div>\n\n        <!-- Delete modal -->\n        <div id=\"deleteModal\" tabindex=\"-1\" aria-hidden=\"true\"\n            class=\"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[rgba(0,0,0,0.5)]\">\n            <div class=\"relative p-4 w-full max-w-md max-h-full\">\n                <!-- Modal content -->\n                <div class=\"relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5\">\n                    <button type=\"button\" id=\"closeDeleteModal\"\n                        class=\"text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\"\n                        data-modal-toggle=\"deleteModal\">\n                        <svg aria-hidden=\"true\" class=\"w-5 h-5\" fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                            xmlns=\"http://www.w3.org/2000/svg\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\"\n                                clip-rule=\"evenodd\" />\n                        </svg>\n                        <span class=\"sr-only\">Close modal</span>\n                    </button>\n                    <svg class=\"text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto\" aria-hidden=\"true\"\n                        fill=\"currentColor\" viewbox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\"\n                            d=\"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z\"\n                            clip-rule=\"evenodd\" />\n                    </svg>\n                    <p class=\"mb-4 text-gray-500 dark:text-gray-300\">Are you sure you want to delete this item?\n                    </p>\n                    <div class=\"flex justify-center items-center space-x-4\">\n                        <button data-modal-toggle=\"deleteModal\" type=\"button\"\n                            class=\"py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\">No,\n                            cancel</button>\n                        <button id=\"delete-cate-btn\" type=\"submit\"\n                            class=\"py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900\">Yes,\n                            I'm sure</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <button class=\"hidden\" type=\"button\" id=\"updateCategoryBtn\" data-modal-target=\"updateCategoryModal\"\n            data-modal-toggle=\"updateCategoryModal\">Update Product Modal Button</button>\n        <button class=\"hidden\" type=\"button\" id=\"deleteCategoryBtn\" data-modal-target=\"deleteModal\"\n            data-modal-toggle=\"deleteModal\">Update Product Modal Button</button>\n\n    </main>\n";
var Categories = /** @class */ (function (_super) {
    __extends(Categories, _super);
    function Categories() {
        return _super.call(this, 'category', 'table-categories', 'createCategoryModal', 'toast-success', 'createCategoryModalButton', 'closeModalForm', 'closeToast', 'deleteCategoryBtn', 'delete-cate-btn', 'add-cate-form') || this;
    }
    Categories.prototype.render = function () {
        var _this = this;
        var renderCategoriesList = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, categories, tableHtml, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, categoriesApi_1["default"].getAll()];
                    case 1:
                        response = _a.sent();
                        categories = response.data.categories;
                        tableHtml = categories.map(function (category) {
                            var _id = category._id, name = category.name, cateImage = category.cateImage, description = category.description;
                            var cateImageHtml = "<img class=\"w-10 h-10 object-cover\" src=\"" + backend_domain_1.BACKEND_URL + "/" + cateImage + "\" alt=\"" + name + "\" />";
                            var editBtn = (new ActionButton_1["default"]('update-modal-trigger', 'category', _id, 'button', 'fa-solid fa-pen-to-square text-primary-700', 'Edit')).component;
                            var deleteBtn = (new ActionButton_1["default"]('delete-modal-trigger', 'category', _id, 'button', 'fa-solid fa-delete-left text-red-600', '')).component;
                            return [
                                "<p class=\"truncate-id\">" + _id + "</p>",
                                name,
                                cateImageHtml,
                                description,
                                0,
                                "\n\n                  <div class=\"flex space-x-2 w-10 h-full\">\n                    " + editBtn + "\n                    " + deleteBtn + "\n                  </div>\n                  ",
                            ];
                        });
                        this.clearTableData();
                        this.dataTable = new datatables_net_dt_1["default"]("#table-categories", {
                            data: tableHtml,
                            columns: [
                                { title: "ID" },
                                { title: "Category name" },
                                { title: "image" },
                                { title: "Description" },
                                { title: "Qty products" },
                                { title: "Action" },
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
        renderCategoriesList();
    };
    Categories.prototype.submitHandler = function (e) {
        var _this = this;
        var _a;
        e.preventDefault();
        var CategoryForm = e.target;
        var typeForm = CategoryForm.getAttribute('id');
        var elements = (CategoryForm).elements;
        var cateImage;
        if (elements["cateImage"]) {
            cateImage = (_a = elements["cateImage"].files) === null || _a === void 0 ? void 0 : _a[0];
        }
        var name = elements["name"].value;
        var description = elements["description"].value;
        var formData = new FormData();
        formData.append("name", name);
        if (cateImage) {
            formData.append("cateImage", cateImage);
        }
        formData.append("description", description);
        if (!this.validator.isValid)
            return;
        // Add/update category logic
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var response, oldImage, message, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        response = void 0;
                        if (!(typeForm === "update-cate-form")) return [3 /*break*/, 2];
                        oldImage = elements['oldImage'].value;
                        formData.append("oldImage", oldImage);
                        return [4 /*yield*/, categoriesApi_1["default"].update(formData, this._currentId)];
                    case 1:
                        // Update cate call API
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, categoriesApi_1["default"].add(formData)];
                    case 3:
                        // Add cate Call API
                        response = _a.sent();
                        _a.label = 4;
                    case 4:
                        console.log(response.data);
                        message = response.data.message;
                        // Handle add toast here!!
                        this.render();
                        this.closeFormModal();
                        this.showToast('success', 'Success', message);
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        console.log(error_2);
                        this.validator.showErrors({
                            "#name": error_2.response.data.message
                        });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); })();
    };
    Categories.prototype.clearInputs = function () {
    };
    Categories.prototype.deleteHandler = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var response, _a, message, categoryId, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, categoriesApi_1["default"]["delete"](this._currentId)];
                    case 1:
                        response = _b.sent();
                        this.render();
                        this.hideDeleteModal();
                        _a = response.data, message = _a.message, categoryId = _a.categoryId;
                        this.showToast('success', "Delete #id: " + categoryId, message);
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
    Categories.prototype.addHandler = function () {
        new modalForm_1["default"]('add');
        this.showModal('add');
        this.formValidator('add-cate-form');
    };
    Categories.prototype.editHandler = function () {
        var _this = this;
        new modalForm_1["default"]('update');
        this.showModal('update');
        var CategoryForm = document.getElementById('update-cate-form');
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var response, category, name, description, cateImage, elements, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, categoriesApi_1["default"].getById(this._currentId)];
                    case 1:
                        response = _a.sent();
                        category = response.data.category;
                        name = category.name, description = category.description, cateImage = category.cateImage;
                        elements = CategoryForm.elements;
                        elements["name"].value = name;
                        elements["description"].textContent = description;
                        elements["oldImage"].value = cateImage;
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
        this.formValidator('update-cate-form');
        this.validator.removeField("#cateImage");
    };
    Categories.prototype.formValidator = function (formId) {
        this.validator = new just_validate_1["default"]("#" + formId, {
            validateBeforeSubmitting: true
        });
        this.validator
            .addField("#name", [
            {
                rule: "required"
            }, {
                rule: "minLength",
                value: 3
            }
        ])
            .addField("#cateImage", [
            {
                rule: "minFilesCount",
                value: 1,
                errorMessage: "At least 1 file is required"
            }
        ])
            .addField("#description", [
            {
                rule: "required"
            },
            {
                rule: "minLength",
                value: 3
            }
        ]);
    };
    Object.defineProperty(Categories.prototype, "component", {
        get: function () {
            return templateHTML;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        autobind_1.autobind
    ], Categories.prototype, "submitHandler");
    __decorate([
        autobind_1.autobind
    ], Categories.prototype, "deleteHandler");
    __decorate([
        autobind_1.autobind
    ], Categories.prototype, "addHandler");
    __decorate([
        autobind_1.autobind
    ], Categories.prototype, "editHandler");
    return Categories;
}(AdminComponent_1["default"]));
exports["default"] = Categories;
