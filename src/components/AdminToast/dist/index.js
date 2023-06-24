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
exports.__esModule = true;
var autobind_1 = require("../../decorators/autobind");
var base_component_1 = require("../base-component");
// Initialization for ES Users
var tw_elements_1 = require("tw-elements");
var ToastMessage = /** @class */ (function (_super) {
    __extends(ToastMessage, _super);
    // init Toast here!!!
    function ToastMessage(_type, _title, _message, _minutes) {
        if (_type === void 0) { _type = "primary"; }
        if (_title === void 0) { _title = ""; }
        if (_message === void 0) { _message = ""; }
        if (_minutes === void 0) { _minutes = ""; }
        var _this = _super.call(this, 'toast-wrapper') || this;
        _this._type = _type;
        _this._title = _title;
        _this._message = _message;
        _this._minutes = _minutes;
        tw_elements_1.initTE({ Toast: tw_elements_1.Toast });
        _this.hostEl.innerHTML = _this.component;
        console.log(_type, _title, _message, _minutes);
        _this.toastEl = document.getElementById("toast-" + _this._type);
        document.addEventListener('DOMContentLoaded', function () {
            _this.toastMsg = tw_elements_1.Toast.getInstance(_this.toastEl);
            // Toast.getInstance(this.toastEl).update({
            //     autohide: true,
            //     deplay: 1000,
            // })
            _this.toastMsg.hide();
            console.log(_this.toastMsg);
            _this.toastMsg._config = {
                deplay: 1000,
                autohide: true
            };
            // this.toastMsg.hide();
        });
        return _this;
    }
    ToastMessage.prototype.attach = function () {
        this.toastEl.addEventListener('hidden.te.toast', this.hiddenEventHandler);
        this.toastEl.addEventListener('shown.te.toast', this.showEventHandler);
    };
    ToastMessage.prototype.hiddenEventHandler = function () {
        console.log("hidden");
    };
    ToastMessage.prototype.showEventHandler = function () {
        console.log("show");
    };
    ToastMessage.prototype.show = function () {
        this.toastMsg._config = {
            deplay: 2000,
            autohide: true
        };
        console.log(this.toastMsg);
        this.toastMsg.show();
    };
    ToastMessage.prototype.hide = function () {
        this.toastMsg.hide();
    };
    ToastMessage.prototype.toggle = function () {
        this.hostEl.classList.toggle('hidden');
    };
    Object.defineProperty(ToastMessage.prototype, "component", {
        get: function () {
            return "\n        <div class=\"toasts-wrapper fixed top-20 right-4 z-[100]\">\n            <div class=\" pointer-events-auto mx-auto mb-4 w-96 max-w-full rounded-lg bg-primary-100 bg-clip-padding text-sm text-primary-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden\" id=\"toast-primary\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-te-autohide=\"false\" data-te-toast-init=\"\" data-te-toast-show=\"\">\n                <div class=\"flex items-center justify-between rounded-t-lg border-b-2 border-primary-200 bg-primary-100 bg-clip-padding px-4 pb-2 pt-2.5 text-primary-700\">\n                    <p class=\"toast-title flex items-center font-bold text-primary-700\">\n                        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"info-circle\" class=\"mr-2 h-4 w-4 fill-current\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n                            <path fill=\"currentColor\" d=\"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z\">\n                            </path>\n                        </svg>\n                       " + this._title + "\n                    </p>\n                    <div class=\"flex items-center\">\n                        <p class=\"text-xs text-primary-700 toast-minutes\">" + this._minutes + " ago</p>\n                        <button type=\"button\" id=\"close\" class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\" data-te-toast-dismiss=\"\" aria-label=\"Close\">\n                            <span class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&amp;.disabled]:pointer-events-none [&amp;.disabled]:select-none [&amp;.disabled]:opacity-25\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\"></path>\n                                </svg>\n                            </span>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"toast-message break-words rounded-b-lg bg-primary-100 px-4 py-4 text-primary-700\">\n                   " + this._message + "\n                </div>\n            </div>\n            <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-success-100 bg-clip-padding text-sm text-success-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden \" id=\"toast-success\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-te-autohide=\"false\" data-te-toast-init=\"\" data-te-toast-show=\"\">\n                <div class=\"flex items-center justify-between rounded-t-lg border-b-2 border-success/20 bg-success-100 bg-clip-padding px-4 pb-2 pt-2.5\">\n                    <p class=\"toast-title flex items-center font-bold text-success-700\">\n                        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"check-circle\" class=\"mr-2 h-4 w-4 fill-current\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n                            <path fill=\"currentColor\" d=\"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z\">\n                            </path>\n                        </svg>\n                        " + this._title + "\n                    </p>\n                    <div class=\"flex items-center\">\n                        <p class=\"text-xs text-success-700 toast-minutes\">" + this._minutes + " ago</p>\n                        <button type=\"button\" id=\"close\" class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\" data-te-toast-dismiss=\"\" aria-label=\"Close\">\n                            <span class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&amp;.disabled]:pointer-events-none [&amp;.disabled]:select-none [&amp;.disabled]:opacity-25\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\"></path>\n                                </svg>\n                            </span>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"toast-message break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700\">\n                    " + this._message + "\n                </div>\n            </div>\n            <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-warning-100 bg-clip-padding text-sm text-warning-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden\" id=\"toast-warning\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-te-autohide=\"false\" data-te-toast-init=\"\" data-te-toast-show=\"\">\n                <div class=\"flex items-center justify-between rounded-t-lg border-b-2 border-warning-200 bg-warning-100 bg-clip-padding px-4 pb-2 pt-2.5 text-warning-700\">\n                    <p class=\"toast-title flex items-center font-bold text-warning-700\">\n                        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"exclamation-triangle\" class=\"mr-2 h-4 w-4 fill-current\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\">\n                            <path fill=\"currentColor\" d=\"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z\">\n                            </path>\n                        </svg>\n                        " + this._title + "\n                    </p>\n                    <div class=\"flex items-center\">\n                        <p class=\"text-xs text-warning-700 opacity-90 toast-minutes\">" + this._minutes + " ago</p>\n                        <button type=\"button\" id=\"close\" class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\" data-te-toast-dismiss=\"\" aria-label=\"Close\">\n                            <span class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&amp;.disabled]:pointer-events-none [&amp;.disabled]:select-none [&amp;.disabled]:opacity-25\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\"></path>\n                                </svg>\n                            </span>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"toast-message break-words rounded-b-lg bg-warning-100 px-4 py-4 text-warning-700\">\n                " + this._message + "\n                </div>\n            </div>\n            <div class=\" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-danger-100 bg-clip-padding text-sm text-danger-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden\" id=\"toast-danger\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-te-autohide=\"false\" data-te-toast-init=\"\" data-te-toast-show=\"\">\n                <div class=\"flex items-center justify-between rounded-t-lg border-b-2 border-danger-200 bg-danger-300 bg-clip-padding px-4 pb-2 pt-2.5 text-danger-700\">\n                    <p class=\"toast-title flex items-center font-bold text-danger-700\">\n                        <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"times-circle\" class=\"mr-2 h-4 w-4 fill-current\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n                            <path fill=\"currentColor\" d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z\">\n                            </path>\n                        </svg>\n                        " + this._title + "\n                    </p>\n                    <div class=\"flex items-center\">\n                        <p class=\"text-xs text-danger-700 toast-minutes\">" + this._minutes + " ago</p>\n                        <button type=\"button\" id=\"close\" class=\"ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none\" data-te-toast-dismiss=\"\" aria-label=\"Close\">\n                            <span class=\"w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&amp;.disabled]:pointer-events-none [&amp;.disabled]:select-none [&amp;.disabled]:opacity-25\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-6 w-6\">\n                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\"></path>\n                                </svg>\n                            </span>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"toast-message break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700\">\n                " + this._message + "\n                </div>\n            </div>\n            </div>\n        ";
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        autobind_1.autobind
    ], ToastMessage.prototype, "hiddenEventHandler");
    return ToastMessage;
}(base_component_1["default"]));
exports["default"] = ToastMessage;
