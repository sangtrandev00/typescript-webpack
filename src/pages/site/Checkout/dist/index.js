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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
// import ProductsApi from "../../../api/productsApi";
var productsApi_1 = require("../../../api/productsApi");
var shopApi_1 = require("../../../api/shopApi");
var userApi_1 = require("../../../api/userApi");
var base_component_1 = require("../../../components/base-component");
var backend_domain_1 = require("../../../constant/backend-domain");
var autobind_1 = require("../../../decorators/autobind");
var router_1 = require("../../../router/router");
var helper_1 = require("../../../util/helper");
var templateHTML = "\n<div class=\"checkout-content py-12\">\n<div class=\"grid sm:px-10 lg:grid-cols-2 shadow-md border\">\n    <div class=\"px-4 pt-8\">\n        <p class=\"text-xl font-medium\">Order Summary</p>\n        <p class=\"text-gray-400\">Check your items. And select a suitable shipping method.</p>\n        <div id=\"view-cart\" class=\"mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6\">\n            <div class=\"flex flex-col rounded-lg bg-white sm:flex-row\">\n                <img class=\"m-2 h-24 w-28 rounded-md border object-cover object-center\"\n                    src=\"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60\"\n                    alt=\"\" />\n                <div class=\"flex w-full flex-col px-4 py-4\">\n                    <span class=\"font-semibold\">Nike Air Max Pro 8888 - Super Light</span>\n                    <span class=\"float-right text-gray-400\">42EU - 8.5US</span>\n                    <p class=\"text-lg font-bold\">$138.99</p>\n                </div>\n            </div>\n            <div class=\"flex flex-col rounded-lg bg-white sm:flex-row\">\n                <img class=\"m-2 h-24 w-28 rounded-md border object-cover object-center\"\n                    src=\"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60\"\n                    alt=\"\" />\n                <div class=\"flex w-full flex-col px-4 py-4\">\n                    <span class=\"font-semibold\">Nike Air Max Pro 8888 - Super Light</span>\n                    <span class=\"float-right text-gray-400\">42EU - 8.5US</span>\n                    <p class=\"mt-auto text-lg font-bold\">$238.99</p>\n                </div>\n            </div>\n        </div>\n\n        <p class=\"mt-8 text-lg font-medium\">Checkout Methods</p>\n        <form class=\"mt-5 grid gap-6\">\n            <div class=\"relative\">\n                <input class=\"peer hidden\" id=\"checkoutMethod1\" type=\"radio\" name=\"radio\" checked />\n                <span\n                    class=\"peer-checked:border-slate-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-slate-300 bg-white\"></span>\n                <label\n                    class=\"peer-checked:border-2 peer-checked:border-slate-700 peer-checked:bg-slate-50 flex cursor-pointer select-none rounded-lg border border-slate-300 p-4\"\n                    for=\"checkoutMethod1\">\n                    <img class=\"w-14 object-contain\" src=\"/images/naorrAeygcJzX0SyNI4Y0.png\" alt=\"\" />\n                    <div class=\"ml-5\">\n                        <span class=\"mt-2 font-semibold\">At Home (COD )</span>\n                        <p class=\"text-slate-500 text-sm leading-6\">Delivery: 2-4 Days</p>\n                    </div>\n                </label>\n            </div>\n            <div class=\"relative\">\n                <input class=\"peer hidden\" id=\"checkoutMethod2\" type=\"radio\" name=\"radio\" checked />\n                <span\n                    class=\"peer-checked:border-slate-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-slate-300 bg-white\"></span>\n                <label\n                    class=\"peer-checked:border-2 peer-checked:border-slate-700 peer-checked:bg-slate-50 flex cursor-pointer select-none rounded-lg border border-slate-300 p-4\"\n                    for=\"checkoutMethod2\">\n                    <img class=\"w-14 object-contain\" src=\"/images/oG8xsl3xsOkwkMsrLGKM4.png\" alt=\"\" />\n                    <div class=\"ml-5\">\n                        <span class=\"mt-2 font-semibold\">VNPay</span>\n                        <p class=\"text-slate-500 text-sm leading-6\">Delivery: 2-4 Days</p>\n                    </div>\n                </label>\n            </div>\n        </form>\n    </div>\n    <div class=\"mt-10 bg-slate-50 px-4 pt-8 lg:mt-0\">\n        <form action=\"\" method=\"post\" id=\"order-form\">\n            <p class=\"text-xl font-medium\">Payment Details</p>\n            <p class=\"text-gray-400\">Complete your order by providing your payment details.</p>\n            <div class=\"\">\n                <label for=\"email\" class=\"mt-4 mb-2 block text-sm font-medium\">Email</label>\n                <div class=\"relative\">\n                    <input type=\"text\" id=\"email\" name=\"email\"\n                        class=\"w-full rounded-md border border-slate-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500\"\n                        placeholder=\"your.email@gmail.com\" />\n                    <div\n                        class=\"pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-4 w-4 text-gray-400\" fill=\"none\"\n                            viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                d=\"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207\" />\n                        </svg>\n                    </div>\n                </div>\n                <label for=\"fullName\" class=\"mt-4 mb-2 block text-sm font-medium\">Full Name</label>\n                <div class=\"relative\">\n                    <input type=\"text\" id=\"fullName\" name=\"fullName\"\n                        class=\"w-full rounded-md border border-slate-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500\"\n                        placeholder=\"Your full name here\" />\n                    <div\n                        class=\"pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-4 w-4 text-gray-400\" fill=\"none\"\n                            viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                d=\"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z\" />\n                        </svg>\n                    </div>\n                </div>\n                <label for=\"phone\" class=\"mt-4 mb-2 block text-sm font-medium\">Phone Number</label>\n                <div class=\"flex\">\n                    <div class=\"relative w-full flex-shrink-0\">\n                        <input type=\"text\" id=\"phone\" name=\"phone\"\n                            class=\"w-full rounded-md border border-slate-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500\"\n                            placeholder=\"Ex: 093898852432\" />\n                        <div\n                            class=\"pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3\">\n                            <i class=\"fa-solid fa-phone\"></i>\n                        </div>\n                    </div>\n\n                </div>\n                <label for=\"billing-address\" class=\"mt-4 mb-2 block text-sm font-medium\">Billing\n                    Address</label>\n\n                <!-- Radio options -->\n                <div class=\"mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] default-shipping-el hidden\">\n                    <input\n                        class=\"relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]\"\n                        type=\"radio\" name=\"shippingRadioInput\" id=\"radioDefault01\" checked />\n                    <label class=\"mt-px inline-block pl-[0.15rem] hover:cursor-pointer mb-3\"\n                        for=\"radioDefault01\">\n                        Default Shipping Addresss\n                    </label>\n                </div>\n\n                <input id=\"default-shipping-input\"\n                    class=\"default-shipping-input hidden rounded-md border border-slate-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 w-full mb-3\"\n                    type=\"text\" value=\"HELLO First options\">\n\n                <div class=\"new-shipping-el mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]\">\n                    <input\n                        class=\"relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]\"\n                        type=\"radio\" name=\"shippingRadioInput\" id=\"radioDefault02\" />\n                    <label class=\"mt-px inline-block pl-[0.15rem] hover:cursor-pointer mb-3\"\n                        for=\"radioDefault02\">\n                        New Shipping Address\n                    </label>\n                </div>\n\n\n                <div class=\"new-shipping-address-select-el flex\"\n                    class=\"flex flex-col sm:flex-row gap-2 items-center\">\n                    <div class=\"relative flex-shrink-0 sm:w-1/3\">\n                        <select id=\"selectProvince\" data-te-select-init data-te-select-filter=\"true\">\n                            <option value=\"default\">Province</option>\n\n                        </select>\n                    </div>\n                    <div class=\"sm:w-1/3\">\n                        <select id=\"selectDistrict\" data-te-select-init data-te-select-filter=\"true\">\n                            <option value=\"0\">District</option>\n\n                        </select>\n\n                    </div>\n                    <div class=\"sm:w-1/3\">\n                        <select id=\"selectWard\" data-te-select-init data-te-select-filter=\"true\">\n                            <option value=\"0\">Ward</option>\n\n                        </select>\n\n                    </div>\n                </div>\n                <label for=\"Note\" class=\"mt-4 mb-2 block font-medium\">Your Note:\n                </label>\n\n                <div class=\"relative mb-3\" >\n                    <textarea name=\"note\"\n                        class=\"peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-slate-200 focus:border-blue-500 shadow-sm\"\n                        id=\"Note\" rows=\"3\" placeholder=\"Your message\"></textarea>\n                    <label for=\"Note\"\n                        class=\"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary\">Take\n                        some note to Admin</label>\n                </div>\n                <!-- Total -->\n                <div class=\"mt-6 border-t border-b py-2\">\n                    <div class=\"flex items-center justify-between\">\n                        <p class=\"text-sm font-medium text-gray-900\">Subtotal</p>\n                        <p class=\"font-semibold text-gray-900\" id=\"subtotal\">$399.00</p>\n                    </div>\n                    <div class=\"flex items-center justify-between\">\n                        <p class=\"text-sm font-medium text-gray-900\">Shipping</p>\n                        <p class=\"font-semibold text-gray-900\">$8.00</p>\n                    </div>\n                </div>\n                <div class=\"mt-6 flex items-center justify-between\">\n                    <p class=\"text-sm font-medium text-gray-900\">Total</p>\n                    <p class=\"text-2xl font-semibold text-gray-900\" id=\"allTotal\">$408.00</p>\n                </div>\n            </div>\n            <button type=\"submit\"\n                class=\"mt-4 mb-8 w-full rounded-md bg-slate-900 px-6 py-3 font-medium text-white\">Place\n                Order</button>\n\n        </form>\n    </div>\n</div>\n\n</div>\n\n";
var Checkout = /** @class */ (function (_super) {
    __extends(Checkout, _super);
    function Checkout() {
        var _a;
        var _this = _super.call(this, "main") || this;
        _this.cartList = [];
        _this.hostEl.innerHTML = templateHTML;
        _this.selectProvinceEl = document.getElementById("selectProvince");
        _this.selectDistrictEl = document.getElementById("selectDistrict");
        _this.selectWardEl = document.getElementById("selectWard");
        _this.defaultShippingEl = document.querySelector(".default-shipping-el");
        _this.defaultShippingInput = document.querySelector(".default-shipping-input");
        _this.newShippingAddressRadioInput = document.getElementById("radioDefault02");
        console.log(_this.newShippingAddressRadioInput);
        _this.defaultShippingAddressRadioInput = document.getElementById("radioDefault01");
        _this.viewCartEl = document.getElementById("view-cart");
        _this.newShippingAddressEl = document.querySelector(".new-shipping-el");
        _this.newShippingSelectAddressEl = document.querySelector(".new-shipping-address-select-el");
        _this.checkoutMethod1 = document.getElementById("checkoutMethod1");
        _this.checkoutMethod2 = document.getElementById("checkoutMethod2");
        _this.orderFormEl = document.getElementById("order-form");
        var localCart = localStorage.getItem("cart");
        if (localCart) {
            _this.cart = JSON.parse(localCart);
            _this.cartList = (_a = _this.cart) === null || _a === void 0 ? void 0 : _a.cartList;
        }
        _this.userId = localStorage.getItem("userId");
        _this.renderOrder();
        _this.attach();
        return _this;
    }
    Checkout.prototype.attach = function () {
        this.orderFormEl.addEventListener("submit", this.createOrder);
    };
    Checkout.prototype.renderOrder = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var totalPrice, allTotal, response, user, email, name, address, phone;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewCartEl.innerHTML = "";
                        helper_1["default"].listCartHandler(this.cartList || [], this.viewCartEl, this.insertCart);
                        totalPrice = helper_1["default"].calcTotalAndLengthOfCart(this.cartList || []).totalPrice;
                        allTotal = totalPrice + 8;
                        helper_1["default"].textContent("subtotal", "$" + totalPrice.toFixed(2));
                        helper_1["default"].textContent("allTotal", "$" + allTotal.toFixed(2));
                        if (!this.userId) {
                            this.newShippingAddressRadioInput.checked = true;
                            return [2 /*return*/];
                        }
                        this.defaultShippingEl.classList.remove("hidden");
                        this.defaultShippingInput.classList.remove("hidden");
                        // newShippingAddressEl.classList.add("hidden");
                        this.newShippingSelectAddressEl.classList.add("hidden");
                        if (!this.userId) return [3 /*break*/, 2];
                        return [4 /*yield*/, userApi_1["default"].getById(this.userId)];
                    case 1:
                        response = _a.sent();
                        user = response.data.user;
                        email = user.email, name = user.name, address = user.address, phone = user.phone;
                        if (email) {
                            helper_1["default"].inputValue("email", email);
                        }
                        if (name) {
                            helper_1["default"].inputValue("fullName", name);
                        }
                        if (phone) {
                            helper_1["default"].inputValue("phone", phone);
                        }
                        if (address) {
                            helper_1["default"].inputValue("default-shipping-input", address);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); })();
    };
    ;
    Checkout.prototype.insertCart = function (prodId, name, thumbnail, cateName, qty, price, totalItem) {
        console.log(cateName);
        var cartItemHtml = "\n              <div prod-id=" + prodId + " class=\"flex flex-col rounded-lg bg-white sm:flex-row\">\n                  <img class=\"m-2 h-24 w-28 rounded-md border object-cover object-center\"\n                      src=\"" + backend_domain_1.BACKEND_URL + "/" + thumbnail + "\"\n                      alt=\"" + name + "\" />\n                  <div class=\"flex w-full flex-col px-4 py-4\">\n                      <span class=\"font-semibold\">" + name + "</span>\n                      <span class=\"float-right text-gray-400\">Qty: " + qty + ", Price/item: $" + price + "</span>\n                      <p class=\"text-lg font-bold\">Total item: $" + totalItem + "</p>\n                  </div>\n              </div>\n            ";
        return cartItemHtml;
    };
    ;
    Checkout.prototype.createOrder = function (e) {
        var _this = this;
        e.preventDefault();
        var formEl = e.target;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var currFormEles, inputSelectShippings, addressShipping, email, fullName, phone, note, paymentMethod, user, localCart, cart, products, promisesProducts, productsList, order, response, _id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currFormEles = formEl.elements;
                        console.log(currFormEles);
                        inputSelectShippings = __spreadArrays(document.querySelectorAll("input[data-te-select-input-ref]"));
                        addressShipping = "";
                        if (this.newShippingAddressRadioInput.checked) {
                            addressShipping = inputSelectShippings.map(function (input) { return input.value; }).join(", ");
                        }
                        else if (this.defaultShippingAddressRadioInput.checked) {
                            addressShipping = this.defaultShippingInput.value;
                        }
                        email = currFormEles["email"].value;
                        fullName = currFormEles["fullName"].value;
                        phone = currFormEles["phone"].value;
                        note = currFormEles["note"].value;
                        paymentMethod = "COD";
                        if (this.checkoutMethod1.checked) {
                            paymentMethod = "COD";
                        }
                        else if (this.checkoutMethod2.checked) {
                            paymentMethod = "VNPAY";
                        }
                        user = {
                            email: email,
                            fullName: fullName,
                            phone: phone,
                            shippingAddress: addressShipping
                        };
                        localCart = localStorage.getItem("cart");
                        if (!localCart)
                            return [2 /*return*/];
                        cart = JSON.parse(localCart);
                        products = {
                            items: [],
                            totalPrice: 0
                        };
                        promisesProducts = cart.cartList.map(function (cartItem) { return __awaiter(_this, void 0, void 0, function () {
                            var prodId, qty, productResponse, _a, name, oldPrice, discount, thumbnail, productItem, error_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        prodId = cartItem.prodId, qty = cartItem.qty;
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, productsApi_1["default"].getById(prodId)];
                                    case 2:
                                        productResponse = _b.sent();
                                        _a = productResponse.data.product, name = _a.name, oldPrice = _a.oldPrice, discount = _a.discount, thumbnail = _a.thumbnail;
                                        productItem = {
                                            prodId: prodId,
                                            qty: qty
                                        };
                                        productItem.name = name;
                                        productItem.price = oldPrice * (1 - discount / 100);
                                        productItem.image = thumbnail;
                                        return [2 /*return*/, productItem];
                                    case 3:
                                        error_1 = _b.sent();
                                        console.log(error_1);
                                        return [2 /*return*/, undefined];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        products.totalPrice = cart.cartList.reduce(function (acc, cartItem) {
                            return acc + (cartItem.qty || 0) * (cartItem.price || 0);
                        }, 0);
                        return [4 /*yield*/, Promise.all(promisesProducts)];
                    case 1:
                        productsList = _a.sent();
                        products.items = productsList;
                        order = {
                            paymentMethod: paymentMethod,
                            note: note,
                            user: user,
                            products: products
                        };
                        return [4 /*yield*/, shopApi_1["default"].createOrder(order)];
                    case 2:
                        response = _a.sent();
                        _id = response.data.order._id;
                        // Clear cart
                        localStorage.removeItem("cart");
                        // Minus stockQty at databasae
                        history.pushState(null, "", "./order-completed?id=" + _id);
                        new router_1["default"]();
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    ;
    __decorate([
        autobind_1.autobind
    ], Checkout.prototype, "createOrder");
    return Checkout;
}(base_component_1["default"]));
exports["default"] = Checkout;
