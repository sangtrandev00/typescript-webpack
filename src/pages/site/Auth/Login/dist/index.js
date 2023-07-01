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
var Input_1 = require("../components/Input");
var Button_1 = require("../components/Button");
var DecorBackground_1 = require("../components/DecorBackground");
var base_component_1 = require("../../../../components/base-component");
var autobind_1 = require("../../../../decorators/autobind");
var authApi_1 = require("../../../../api/authApi");
var router_1 = require("../../../../router/router");
var Auth_1 = require("../../Auth");
var auth_1 = require("firebase/auth");
var firebase_config_1 = require("../../../../firebase/firebase-config");
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../../../firebase/firebase-config";
// import AuthApi from "../../../../api/authApi";
var EmailInput = new Input_1["default"]('email', 'email', 'email', 'Email Address', "", "Email address");
var PasswordInput = new Input_1["default"]('password', 'password', 'password', 'Password', "", "Password");
var ButtonEl = new Button_1["default"]('submit', "LOGIN");
var DecorBackgroundEl = new DecorBackground_1["default"]("https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp", "Login Background");
var templateHTML = "\n<div id=\"login-content \">\n<section class=\"mt-8\">\n    <div class=\"h-full pb-10\">\n        <!-- Left column container with background-->\n        <div\n            class=\"g-6 flex h-full flex-wrap items-center justify-center lg:justify-between shadow border p-10\">\n            " + DecorBackgroundEl.render() + "\n\n            <!-- Right column container -->\n            <div class=\"mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12\">\n                <form id=\"login-form\" action=\"\" method=\"\">\n                    <!--Sign in section-->\n                    <div\n                        class=\"flex flex-row items-center justify-center lg:justify-start flex-wrap text-center\">\n                        <p class=\"mr-4 text-lg w-full\">Sign in with</p>\n\n                        <!-- Facebook login -->\n                        <div id=\"facebook-signin-btn\"\n                            class=\"fb-login-button w-full rounded-lg my-3 text-center\" data-width=\"100\"\n                            data-size=\"large\" data-button-type=\"\" data-layout=\"rounded\"\n                            data-use-continue-as=\"false\" data-scope=\"public_profile,email\"\n                            data-onlogin=\"checkLoginState()\"></div>\n\n                        <!-- Google -->\n                        <button id=\"google-signin-btn\" type=\"button\" data-te-ripple-init\n                            data-te-ripple-color=\"light\"\n                            class=\"text-center mx-auto bg-[#C7544B] text-white px-1 py-1 w-[240px] rounded-[2rem] text-lg flex- justify-between\">\n                            <!-- Google icon -->\n                            <i class=\"fa-brands fa-google me-2\"></i> <span>Login With Google</span>\n                        </button>\n\n                    </div>\n\n                    <!-- Separator between social media sign in and email/password sign in -->\n                    <div\n                        class=\"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300\">\n                        <p class=\"mx-4 mb-0 text-center font-semibold dark:text-white\">\n                            Or\n                        </p>\n                    </div>\n\n                    <!-- Email input -->\n                    " + EmailInput.render() + "\n\n                    <!-- Password input -->\n                    " + PasswordInput.render() + "\n\n                    <div class=\"mb-6 flex items-center justify-between\">\n                        <!-- Remember me checkbox -->\n                        <div class=\"mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]\">\n                            <input\n                                class=\"relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-slate-600 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-slate-600 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]\"\n                                type=\"checkbox\" value=\"\" id=\"exampleCheck2\" />\n                            <label class=\"inline-block pl-[0.15rem] hover:cursor-pointer\"\n                                for=\"exampleCheck2\">\n                                Remember me\n                            </label>\n                        </div>\n\n                        <!--Forgot password link-->\n                        <a id=\"navigateForgot\" href=\"./forgot\">Forgot password?</a>\n                    </div>\n\n                    <!-- Login button -->\n                    <div class=\"text-center lg:text-left\">\n                       " + ButtonEl.render() + "\n\n                        <!-- Register link -->\n                        <p class=\"mb-0 mt-2 pt-1 text-sm font-semibold\">\n                            Don't have an account?\n                            <a id=\"linkRegister\" href=\"./signup\"\n                                class=\"text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700\">Register</a>\n                        </p>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n</div>\n";
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this, 'main') || this;
        _this.hostEl.innerHTML = templateHTML;
        _this.loginFormEl = document.getElementById('login-form');
        _this.linkRegisterEl = document.getElementById('linkRegister');
        _this.linkForgotEl = document.getElementById('navigateForgot');
        _this.googleSignInBtn = document.getElementById('google-signin-btn');
        _this.attach();
        return _this;
    }
    Login.prototype.attach = function () {
        this.loginFormEl.addEventListener('submit', this.loginHandler);
        this.linkRegisterEl.addEventListener('click', this.navigateHandler);
        this.linkForgotEl.addEventListener('click', this.navigateHandler);
        this.googleSignInBtn.addEventListener('click', this.signInWithGoogle);
    };
    Login.prototype.loginHandler = function (e) {
        var _this = this;
        e.preventDefault();
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var formEls, email, password, user, authResponse, _a, token, userId, expiryDate, userAuth, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formEls = e.target;
                        email = formEls["email"].value;
                        password = formEls["password"].value;
                        user = {
                            email: email,
                            password: password
                        };
                        return [4 /*yield*/, authApi_1["default"].login(user)];
                    case 1:
                        authResponse = _b.sent();
                        _a = authResponse.data, token = _a.token, userId = _a.userId;
                        expiryDate = new Date(Date.now() + 60 * 60 * 1000);
                        localStorage.setItem("userId", userId);
                        localStorage.setItem("token", token);
                        localStorage.setItem("expiryDate", expiryDate.toString());
                        history.pushState(null, '', "/");
                        new router_1["default"]();
                        userAuth = new Auth_1["default"]();
                        userAuth.login();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    };
    Login.prototype.signInWithGoogle = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var provider, _a, providerId, user, idTokenResult, displayName, email, avatar, authResponse, result, response_1, response, _b, token, userId, expiryDate, userAuth, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        provider = new auth_1.GoogleAuthProvider();
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, auth_1.signInWithPopup(firebase_config_1.auth, provider)];
                    case 2:
                        _a = _c.sent(), providerId = _a.providerId, user = _a.user;
                        return [4 /*yield*/, user.getIdTokenResult()];
                    case 3:
                        idTokenResult = _c.sent();
                        console.log(idTokenResult.token);
                        console.log(user, providerId);
                        displayName = user.displayName, email = user.email, avatar = user.photoURL;
                        return [4 /*yield*/, authApi_1["default"].checkExisingUser({ email: email, providerId: providerId })];
                    case 4:
                        authResponse = _c.sent();
                        result = authResponse.data.result;
                        if (!(result === "not found")) return [3 /*break*/, 6];
                        return [4 /*yield*/, authApi_1["default"].signup({
                                providerId: providerId,
                                name: displayName,
                                email: email,
                                avatar: avatar,
                                password: "google.com",
                                role: "client"
                            })];
                    case 5:
                        response_1 = _c.sent();
                        console.log(response_1);
                        _c.label = 6;
                    case 6: return [4 /*yield*/, authApi_1["default"].googleLogin({ token: idTokenResult.token })];
                    case 7:
                        response = _c.sent();
                        _b = response.data, token = _b.token, userId = _b.userId;
                        expiryDate = new Date(Date.now() + 60 * 60 * 1000);
                        localStorage.setItem("userId", userId);
                        localStorage.setItem("token", token);
                        localStorage.setItem("expiryDate", expiryDate.toString());
                        userAuth = new Auth_1["default"]();
                        userAuth.login();
                        history.pushState(null, '', "/");
                        new router_1["default"]();
                        return [3 /*break*/, 9];
                    case 8:
                        error_2 = _c.sent();
                        // Handle errors
                        //   const errorCode = error?.code;
                        //   const errorMessage = error?.message;
                        //   console.log("Error:", errorCode, errorMessage);
                        console.log(error_2);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        }); })();
    };
    ;
    Login.prototype.automateLogout = function () {
        var now = new Date();
        var expiryDate = localStorage.getItem("expiryDate");
        if (now > new Date(expiryDate)) {
            localStorage.removeItem("expiryDate");
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
        }
    };
    Login.prototype.navigateHandler = function (e) {
        e.preventDefault();
        var linkEl = e.target;
        var targetLink = linkEl.getAttribute("href");
        if (linkEl && targetLink === "./signup") {
            history.pushState(null, "", targetLink);
        }
        else if (linkEl && targetLink === "./forgot") {
            history.pushState(null, "", targetLink);
        }
        new router_1["default"]();
    };
    __decorate([
        autobind_1.autobind
    ], Login.prototype, "loginHandler");
    __decorate([
        autobind_1.autobind
    ], Login.prototype, "signInWithGoogle");
    __decorate([
        autobind_1.autobind
    ], Login.prototype, "navigateHandler");
    return Login;
}(base_component_1["default"]));
exports["default"] = Login;
