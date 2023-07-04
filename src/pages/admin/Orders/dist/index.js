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
var orderApi_1 = require("../../../api/orderApi");
var autobind_1 = require("../../../decorators/autobind");
var base_component_1 = require("../../../components/base-component");
var flowbite_1 = require("flowbite");
var helper_1 = require("../../../util/helper");
var backend_domain_1 = require("../../../constant/backend-domain");
var Order_1 = require("../../../interface/Order");
var Utilites_1 = require("./components/Utilites");
var AdminToast_1 = require("../../../components/AdminToast");
var templateHTML = "\n<!-- Main content wrapper -->\n            <main class=\"p-4 md:ml-64 h-auto pt-20\">\n                <!-- Start block -->\n                <section class=\"bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased\">\n                    <div class=\"mx-auto max-w-screen-xl px-4 lg:px-12\">\n                        <!-- Start coding here -->\n                        <div id=\"display-order\"\n                            class=\"bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden\">\n                            <div class=\"overflow-x-auto\">\n                                <table id=\"table-orders\"\n                                    class=\"w-full text-sm text-left text-gray-500 dark:text-gray-400\">\n                                    <thead\n                                        class=\"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\">\n                                        <tr>\n                                            <th scope=\"col\" class=\"px-4 py-4\">#ID</th>\n                                            <th scope=\"col\" class=\"px-4 py-4\">Customer</th>\n                                            <th scope=\"col\" class=\"px-4 py-4\">Total($)</th>\n                                            <th scope=\"col\" class=\"px-4 py-3\">Status</th>\n                                            <th scope=\"col\" class=\"px-4 py-3\">Payment method</th>\n                                            <th scope=\"col\" class=\"px-4 py-3\">Date order</th>\n                                            <th scope=\"col\" class=\"px-4 py-3\">Qty (items)</th>\n                                            <th scope=\"col\" class=\"px-4 py-3\">Action</th>\n                                            <th scope=\"col\" class=\"px-4 py-3\">\n                                                <span class=\"sr-only\">Actions</span>\n                                            </th>\n                                        </tr>\n                                    </thead>\n                                </table>\n                            </div>\n\n                        </div>\n                    </div>\n                </section>\n                <!-- End block -->\n\n               " + Utilites_1["default"].component + "\n                <div class=\"toasts-wrapper fixed top-20 right-4\">\n                    <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-primary-100 bg-clip-padding text-sm text-primary-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden\"\n                        id=\"toast-primary-el\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n                        data-te-autohide=\"false\" data-te-toast-init data-te-toast-show>\n                        <div\n                            class=\"flex items-center justify-between rounded-t-lg border-b-2 border-primary-200 bg-primary-100 bg-clip-padding px-4 pb-2 pt-2.5 text-primary-700\">\n                            <p class=\"toast-title flex items-center font-bold text-primary-700\">\n                                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"info-circle\"\n                                    class=\"mr-2 h-4 w-4 fill-current\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"\n                                    viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z\">\n                                    </path>\n                                </svg>\n                                MDBootstrap\n                            </p>\n                            <div class=\"flex items-center\">\n                                <p class=\"text-xs text-primary-700 toast-minutes\">11 mins ago</p>\n                                <button type=\"button\"\n                                    class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\"\n                                    data-te-toast-dismiss aria-label=\"Close\">\n                                    <span\n                                        class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25\">\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                            stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                d=\"M6 18L18 6M6 6l12 12\" />\n                                        </svg>\n                                    </span>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"toast-message break-words rounded-b-lg bg-primary-100 px-4 py-4 text-primary-700\">\n                            Hello, world! This is a toast message.\n                        </div>\n                    </div>\n                    <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-success-100 bg-clip-padding text-sm text-success-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden \"\n                        id=\"toast-success-el\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n                        data-te-autohide=\"false\" data-te-toast-init data-te-toast-show>\n                        <div\n                            class=\"flex items-center justify-between rounded-t-lg border-b-2 border-success/20 bg-success-100 bg-clip-padding px-4 pb-2 pt-2.5\">\n                            <p class=\"toast-title flex items-center font-bold text-success-700\">\n                                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"check-circle\"\n                                    class=\"mr-2 h-4 w-4 fill-current\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"\n                                    viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z\">\n                                    </path>\n                                </svg>\n                                MDBootstrap\n                            </p>\n                            <div class=\"flex items-center\">\n                                <p class=\"text-xs text-success-700 toast-minutes\">11 mins ago</p>\n                                <button type=\"button\"\n                                    class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\"\n                                    data-te-toast-dismiss aria-label=\"Close\">\n                                    <span\n                                        class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25\">\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                            stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                d=\"M6 18L18 6M6 6l12 12\" />\n                                        </svg>\n                                    </span>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"toast-message break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700\">\n                            Hello, world! This is a toast message.\n                        </div>\n                    </div>\n                    <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-warning-100 bg-clip-padding text-sm text-warning-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden\"\n                        id=\"toast-warning-el\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n                        data-te-autohide=\"false\" data-te-toast-init data-te-toast-show>\n                        <div\n                            class=\"flex items-center justify-between rounded-t-lg border-b-2 border-warning-200 bg-warning-100 bg-clip-padding px-4 pb-2 pt-2.5 text-warning-700\">\n                            <p class=\"toast-title flex items-center font-bold text-warning-700\">\n                                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\"\n                                    data-icon=\"exclamation-triangle\" class=\"mr-2 h-4 w-4 fill-current\" role=\"img\"\n                                    xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z\">\n                                    </path>\n                                </svg>\n                                MDBootstrap\n                            </p>\n                            <div class=\"flex items-center\">\n                                <p class=\"text-xs text-warning-700 opacity-90 toast-minutes\">11 mins ago</p>\n                                <button type=\"button\"\n                                    class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\"\n                                    data-te-toast-dismiss aria-label=\"Close\">\n                                    <span\n                                        class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25\">\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                            stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                d=\"M6 18L18 6M6 6l12 12\" />\n                                        </svg>\n                                    </span>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"toast-message break-words rounded-b-lg bg-warning-100 px-4 py-4 text-warning-700\">\n                            Hello, world! This is a toast message.\n                        </div>\n                    </div>\n                    <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-danger-100 bg-clip-padding text-sm text-danger-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden\"\n                        id=\"toast-danger-el\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n                        data-te-autohide=\"false\" data-te-toast-init data-te-toast-show>\n                        <div\n                            class=\"flex items-center justify-between rounded-t-lg border-b-2 border-danger-200 bg-danger-300 bg-clip-padding px-4 pb-2 pt-2.5 text-danger-700\">\n                            <p class=\"toast-title flex items-center font-bold text-danger-700\">\n                                <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"times-circle\"\n                                    class=\"mr-2 h-4 w-4 fill-current\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"\n                                    viewBox=\"0 0 512 512\">\n                                    <path fill=\"currentColor\"\n                                        d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z\">\n                                    </path>\n                                </svg>\n                                MDBootstrap\n                            </p>\n                            <div class=\"flex items-center\">\n                                <p class=\"text-xs text-danger-700 toast-minutes\">11 mins ago</p>\n                                <button type=\"button\"\n                                    class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\"\n                                    data-te-toast-dismiss aria-label=\"Close\">\n                                    <span\n                                        class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25\">\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                            stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                d=\"M6 18L18 6M6 6l12 12\" />\n                                        </svg>\n                                    </span>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"toast-message break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700\">\n                            Hello, world! This is a toast message.\n                        </div>\n                    </div>\n                </div>\n            </main>\n";
var Orders = /** @class */ (function (_super) {
    __extends(Orders, _super);
    function Orders(hostElId) {
        if (hostElId === void 0) { hostElId = "admin-content"; }
        var _this = _super.call(this, hostElId) || this;
        _this._tableId = "table-orders";
        _this._currentOrderStatus = Order_1.OrderStatus.ALL;
        _this._currentId = "";
        _this.hostEl.innerHTML = _this.component || templateHTML;
        _this.hostEl.scrollIntoView({
            behavior: 'smooth',
            block: "center"
        });
        _this.render(Order_1.OrderStatus.ALL);
        _this.tableEl = document.getElementById(_this._tableId);
        _this.viewDetailTableCartEl = document.getElementById('view-detail-cart');
        _this.deleteConfirmBtn = document.getElementById('deleteOrderBtn');
        _this.closeModalBtn = document.getElementById('closeModalBtn');
        _this.closeDeleteModalBtn = document.getElementById('closeDeleteModal');
        _this.updateOrderForm = document.getElementById('update-order-form');
        _this.deleteModalEl = document.getElementById('deleteModal');
        _this.closeToastBtn = document.getElementById('closeToast');
        _this.attach();
        return _this;
    }
    Orders.prototype.attach = function () {
        this.tableEl.addEventListener('click', this.clickHandler);
        this.deleteConfirmBtn.addEventListener('click', this.deleteHandler);
        this.closeModalBtn.addEventListener('click', this.hideModal);
        this.updateOrderForm.addEventListener('submit', this.updateOrderHandler);
        this.closeDeleteModalBtn.addEventListener('click', this.hideDeleteModal);
    };
    Orders.prototype.render = function (orderStatus) {
        var _this = this;
        if (orderStatus === void 0) { orderStatus = Order_1.OrderStatus.ALL; }
        var renderOrderList = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, orders, filteredOrders, tableRows, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, orderApi_1["default"].getAll({})];
                    case 1:
                        response = _a.sent();
                        orders = response.data.orders;
                        filteredOrders = [];
                        orderStatus = this._currentOrderStatus;
                        if (orderStatus !== Order_1.OrderStatus.ALL) {
                            filteredOrders = orders.filter(function (order) { return orderStatus === order.status; });
                        }
                        else {
                            filteredOrders = orders;
                        }
                        tableRows = filteredOrders.map(function (order) {
                            var _id = order._id, paymentMethod = order.paymentMethod, status = order.status, fullName = order.user.fullName, _a = order.products, items = _a.items, totalPrice = _a.totalPrice, createdAt = order.createdAt;
                            var cartLength = items.reduce(function (acc, item) { return acc + ((item === null || item === void 0 ? void 0 : item.qty) || 0); }, 0);
                            return [
                                "<p class=\"truncate-id\">" + _id + "</p>",
                                fullName,
                                totalPrice.toFixed(2),
                                status,
                                paymentMethod,
                                "<p class=\"truncate-text\">" + createdAt + "</p>",
                                cartLength,
                                "\n                  <div class=\"flex space-x-2 w-30 h-full py-2 px-2\">\n                    <button class=\"update-modal-trigger\" order-id=\"" + _id + "\" type=\"button\">\n                      <i class=\"update-modal-trigger fa-solid fa-pen-to-square text-primary-700\"></i>\n                      Update\n                    </button>\n                    <button class=\"view-detail-modal-trigger\" order-id=\"" + _id + "\" type=\"button\">\n                    <i class=\"view-detail-modal-trigger fa-regular fa-eye text-secondary-700\"></i>\n                      View\n                    </button>\n                    <button class=\"delete-modal-trigger\" order-id=\"" + _id + "\" type=\"button\">\n                      <i class=\"delete-modal-trigger fa-solid fa-delete-left text-red-600\"></i>\n                      Delete\n                    </button>\n                   \n                  </div>\n                  \n                  ",
                            ];
                        });
                        this.clearTableData();
                        console.log("render at table: ", this._tableId);
                        this.dataTable = new datatables_net_dt_1["default"]("#" + this._tableId, {
                            data: tableRows,
                            columns: [
                                { title: "#ID" },
                                { title: "Customer" },
                                { title: "Total($)" },
                                { title: "Status" },
                                { title: "Payment method" },
                                { title: "Date order" },
                                { title: "Qty (items)" },
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
        renderOrderList();
    };
    Orders.prototype.clickHandler = function (e) {
        e.preventDefault();
        var targetEl = e.target;
        var btnEl = targetEl.closest('button');
        if (btnEl) {
            this._currentId = btnEl === null || btnEl === void 0 ? void 0 : btnEl.getAttribute("order-id");
        }
        // Edit
        if (targetEl &&
            targetEl.matches("button, button i") &&
            targetEl.classList.contains("update-modal-trigger")) {
            this.showModal('updateOrderModal');
            this.editHandler();
        }
        // View Detail
        if (targetEl && targetEl.classList.contains("view-detail-modal-trigger") && targetEl.matches("button, button i")) {
            this.viewDetail();
        }
        // Delete
        if (targetEl &&
            targetEl.classList.contains("delete-modal-trigger") &&
            targetEl.matches("button, button i")) {
            console.log("trigger delete modal!");
            this.showDeleteModal();
        }
    };
    Orders.prototype.deleteHandler = function () {
        var _this = this;
        console.log("id: ", this._currentId);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var response, _a, message, orderId, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, orderApi_1["default"]["delete"](this._currentId)];
                    case 1:
                        response = _b.sent();
                        // Remove out of DOM
                        console.log(response.data);
                        _a = response.data, message = _a.message, orderId = _a.orderId;
                        this.showToast('success', "Delete #id: " + orderId, message);
                        this.hideDeleteModal();
                        this.render();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    };
    Orders.prototype.editHandler = function () {
        var _this = this;
        console.log("edit handler: ", this._currentId);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var response, _a, _b, fullName, email, status, elements, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, orderApi_1["default"].getById(this._currentId)];
                    case 1:
                        response = _c.sent();
                        console.log("response: ", response);
                        _a = response.data.order, _b = _a.user, fullName = _b.fullName, email = _b.email, status = _a.status;
                        elements = this.updateOrderForm.elements;
                        console.log(elements["name"]);
                        console.log(elements["email"]);
                        console.log(elements["currStatus"]);
                        elements["name"].value = fullName;
                        elements["email"].value = email;
                        elements["currStatus"].value = status;
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _c.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    };
    Orders.prototype.updateOrderHandler = function (e) {
        var _this = this;
        e.preventDefault();
        var updateFormEl = e.target;
        console.log(updateFormEl);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var updatedOrderStatus, response, _a, orderId, message, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        updatedOrderStatus = updateFormEl.querySelector("select[name='category']").value;
                        return [4 /*yield*/, orderApi_1["default"].updateOrderStatus({ status: updatedOrderStatus }, this._currentId)];
                    case 1:
                        response = _b.sent();
                        console.log(response.data);
                        _a = response.data, orderId = _a.orderId, message = _a.message;
                        this.render(this._currentOrderStatus);
                        this.hideModal();
                        this.removeBackdrop();
                        this.showToast("success", "Update #id: " + orderId, message);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _b.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    };
    Orders.prototype.whichStatusOrder = function (status) {
        switch (status) {
            case "success":
                return Order_1.OrderStatus.SUCCESS;
            case "failed":
                return Order_1.OrderStatus.FAILED;
            case "shipping":
                return Order_1.OrderStatus.SHIPPING;
            case "confirmed":
                return Order_1.OrderStatus.CONFIRMED;
            case "unconfirmed":
                return Order_1.OrderStatus.UNCONFIRMED;
            default:
                return Order_1.OrderStatus.ALL;
        }
    };
    Orders.prototype.showModal = function (modalId) {
        this.modalEl = document.getElementById(modalId);
        // this.closeModalBtn = this.modalEl.querySelector('#closeModalBtn') as HTMLButtonElement;
        // this.closeModalBtn.addEventListener('click', this.hideModal);
        // console.log(this.closeModalBtn);
        // const OrderDetailModal = document.getElementById(`viewOrderDetailModal`) as HTMLDivElement;
        this.modal = new flowbite_1.Modal(this.modalEl);
        console.log(this.modal);
        this.modal.show();
    };
    Orders.prototype.showToast = function (type, title, message, minutes) {
        if (type === void 0) { type = "primary"; }
        if (title === void 0) { title = ""; }
        if (message === void 0) { message = "Add  Successfully!"; }
        if (minutes === void 0) { minutes = '1 minutes'; }
        this.toastMsg = new AdminToast_1["default"](type, title, message, minutes);
        console.log(document.getElementById("closeToast"));
        this.closeToastBtn = document.getElementById("closeToast");
        this.closeToastBtn.addEventListener('click', this.hideToast);
        this.toastMsg.show();
    };
    Orders.prototype.hideToast = function () {
        var _a;
        (_a = this.toastMsg) === null || _a === void 0 ? void 0 : _a.hide();
    };
    Orders.prototype.hideModal = function () {
        console.log(this.modal);
        this.modal.hide();
    };
    Orders.prototype.showDeleteModal = function () {
        this.deleteModal = new flowbite_1.Modal(this.deleteModalEl);
        console.log(this.deleteModal);
        console.log(this.deleteModal.show());
        this.deleteModal._isHidden = false;
        this.deleteModal.show();
    };
    Orders.prototype.hideDeleteModal = function () {
        var _a;
        (_a = this.deleteModal) === null || _a === void 0 ? void 0 : _a.hide();
        this.removeBackdrop();
    };
    Orders.prototype.viewDetail = function () {
        var _this = this;
        console.log("id: ", this._currentId);
        this.showModal("viewOrderDetailModal");
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var response, order, _id, _a, items, totalPrice, _b, phone, shippingAddress, email, fullName, shippingFee, createdAt, status, allTotal, error_5;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, orderApi_1["default"].getById(this._currentId)];
                    case 1:
                        response = _c.sent();
                        order = response.data.order;
                        _id = order._id, _a = order.products, items = _a.items, totalPrice = _a.totalPrice, _b = order.user, phone = _b.phone, shippingAddress = _b.shippingAddress, email = _b.email, fullName = _b.fullName, shippingFee = order.shippingFee, createdAt = order.createdAt, status = order.status;
                        allTotal = (totalPrice + shippingFee).toFixed(2);
                        this.viewDetailTableCartEl.innerHTML = "";
                        helper_1["default"].listCartHandler(items, this.viewDetailTableCartEl, this.insertCart);
                        helper_1["default"].textContent("orderId", _id);
                        helper_1["default"].textContent("createdAt", createdAt);
                        helper_1["default"].textContent("phone", phone);
                        helper_1["default"].textContent("email", email);
                        helper_1["default"].textContent("fullName", fullName);
                        helper_1["default"].textContent("status", status);
                        helper_1["default"].textContent("shippingAddress", shippingAddress);
                        // Helper.textContent('discountPercent', discount);
                        // Helper.textContent('discountMoney', phone);
                        helper_1["default"].textContent("shippingFee", "$" + shippingFee);
                        helper_1["default"].textContent("subtotal", "$" + totalPrice.toFixed(2));
                        helper_1["default"].textContent("allTotal", "$" + allTotal);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _c.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    };
    Orders.prototype.insertCart = function (prodId, name, thumbnail, cateName, qty, price, totalItem) {
        var cartItemHtml = "\n        <div\n        prod-id = " + prodId + "\n        class=\"flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full\">\n        <div class=\"-m-px w-40 md:w-32\">\n            <img class=\"hidden md:block\"\n                src=\"" + backend_domain_1.BACKEND_URL + "/" + thumbnail + "\"\n                alt=\"" + name + "\" />\n            <img class=\"md:hidden\"\n                src=\"" + backend_domain_1.BACKEND_URL + "/" + thumbnail + "\"\n                alt=\"" + name + "\" />\n        </div>\n        <div\n            class=\"flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8\">\n            <div\n                class=\"flex flex-col md:flex-shrink-0 justify-start items-start\">\n                <h3\n                    class=\"text-lg md:text-xl dark:text-white w-full font-semibold leading-6 md:leading-5 text-gray-800\">\n                    " + name + "</h3>\n                <div\n                    class=\"flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4\">\n                    <p\n                        class=\"text-sm leading-none dark:text-gray-300 text-gray-600\">\n                        Brand: <span class=\"text-gray-800 dark:text-white\">\n                            " + cateName + "</span></p>\n                    <p\n                        class=\"text-sm leading-none dark:text-gray-300 text-gray-600\">\n                        Quantity: <span class=\"text-gray-800 dark:text-white\">\n                            " + qty + "</span></p>\n                    <p\n                        class=\"text-sm leading-none dark:text-gray-300 text-gray-600\">\n                        Price/item: <span class=\"text-gray-800 dark:text-white\">\n                            $" + price + "</span></p>\n              \n  \n                </div>\n            </div>\n            <div class=\"flex mt-4 md:mt-0 md:justify-end items-center w-full\">\n                <p\n                    class=\"text-xl dark:text-white lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800\">\n                    $" + totalItem + "</p>\n            </div>\n        </div>\n      </div>\n      ";
        return cartItemHtml;
    };
    Orders.prototype.clearTableData = function () {
        if (this.dataTable) {
            this.dataTable.destroy();
        }
    };
    Orders.prototype.removeBackdrop = function () {
        var backdropEl = document.querySelector("div[modal-backdrop]");
        if (backdropEl) {
            backdropEl.remove();
        }
    };
    Object.defineProperty(Orders.prototype, "component", {
        get: function () {
            return templateHTML;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        autobind_1.autobind
    ], Orders.prototype, "clickHandler");
    __decorate([
        autobind_1.autobind
    ], Orders.prototype, "deleteHandler");
    __decorate([
        autobind_1.autobind
    ], Orders.prototype, "updateOrderHandler");
    __decorate([
        autobind_1.autobind
    ], Orders.prototype, "hideToast");
    __decorate([
        autobind_1.autobind
    ], Orders.prototype, "hideModal");
    __decorate([
        autobind_1.autobind
    ], Orders.prototype, "showDeleteModal");
    __decorate([
        autobind_1.autobind
    ], Orders.prototype, "hideDeleteModal");
    return Orders;
}(base_component_1["default"]));
exports["default"] = Orders;
