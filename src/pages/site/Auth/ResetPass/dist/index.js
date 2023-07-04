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
var base_component_1 = require("../../../../components/base-component");
var Input_1 = require("../components/Input");
var Button_1 = require("../components/Button");
var autobind_1 = require("../../../../decorators/autobind");
var authApi_1 = require("../../../../api/authApi");
var router_1 = require("../../../../router/router");
// @ts-ignore
var just_validate_1 = require("just-validate");
var ButtonEl = new Button_1["default"]("submit", "UPDATE");
var PasswordInput = new Input_1["default"]("password", "password", "password", "Password", "", "Password");
var templateHTML = "\n    <div id=\"login-content\">\n    <section class=\"h-screen\">\n        <div class=\"h-full\">\n            <!-- Left column container with background-->\n            <div\n                class=\"g-6 flex h-full flex-wrap items-center justify-center lg:justify-between shadow-md border-2 px-10\">\n                <div class=\"shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12\">\n                    <img src=\"https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp\"\n                        class=\"w-full\" alt=\"Sample image\" />\n                </div>\n\n                <!-- Right column container -->\n                <div class=\"mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12\">\n                    <form id=\"reset-password-form\">\n                        <!--Sign in section-->\n                        <div class=\"flex flex-row items-center justify-center lg:justify-start\">\n                            <p class=\"mb-4 mr-4 text-lg\">Your new password</p>\n\n                        </div>\n\n                        <!-- Email input -->\n                    " + PasswordInput.render() + "\n\n                        <!-- Login button -->\n                        <div class=\"text-center lg:text-left\">\n                         " + ButtonEl.render() + "\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </section>\n    </div>\n\n";
var ResetPass = /** @class */ (function (_super) {
    __extends(ResetPass, _super);
    function ResetPass() {
        var _this = _super.call(this, 'main') || this;
        _this.hostEl.innerHTML = templateHTML;
        _this.resetFormEl = document.getElementById("reset-password-form");
        _this.formValidator("reset-password-form");
        _this.attach();
        return _this;
    }
    ResetPass.prototype.attach = function () {
        this.resetFormEl.addEventListener('submit', this.createNewPasswordHandler);
    };
    ResetPass.prototype.createNewPasswordHandler = function (e) {
        var _this = this;
        e.preventDefault();
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var url, passwordToken, formEl, formEls, password, userId, response, redirectTimer_1, timeInterval_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = new URL(location.href);
                        passwordToken = url.searchParams.get("token");
                        formEl = e.target;
                        formEls = formEl.elements;
                        password = formEls["password"].value;
                        userId = JSON.parse(localStorage.getItem("user")).userId;
                        if (!this.validator.isValid)
                            return [2 /*return*/];
                        return [4 /*yield*/, authApi_1["default"].updatePassword({ password: password, passwordToken: passwordToken, userId: userId })];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            redirectTimer_1 = Date.now() + 5 * 1000;
                            alert("Chuy\u1EC3n trang sau 3s");
                            timeInterval_1 = setInterval(function () {
                                // Render to UI here!!! when have enough time!!!
                                console.log("Redirect after: ", Math.trunc((redirectTimer_1 - Date.now()) / 1000));
                                if (Math.trunc((redirectTimer_1 - Date.now()) / 1000) <= 0) {
                                    history.pushState(null, '', "/login");
                                    new router_1["default"]();
                                    clearInterval(timeInterval_1);
                                }
                            }, 1000);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    };
    ResetPass.prototype.formValidator = function (formId) {
        this.validator = new just_validate_1["default"]("#" + formId, {
            validateBeforeSubmitting: true
        });
        this.validator
            .addField("#password", [
            {
                rule: "required"
            },
            {
                rule: "strongPassword"
            }
        ]);
    };
    __decorate([
        autobind_1.autobind
    ], ResetPass.prototype, "createNewPasswordHandler");
    return ResetPass;
}(base_component_1["default"]));
exports["default"] = ResetPass;
