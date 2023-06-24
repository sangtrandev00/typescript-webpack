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
var base_component_1 = require("../../../../components/base-component");
var templateHTML = "\n    <div id=\"login-content\">\n    <section class=\"h-screen\">\n        <div class=\"h-full\">\n            <!-- Left column container with background-->\n            <div\n                class=\"g-6 flex h-full flex-wrap items-center justify-center lg:justify-between shadow-md border-2 px-10\">\n                <div class=\"shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12\">\n                    <img src=\"https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp\"\n                        class=\"w-full\" alt=\"Sample image\" />\n                </div>\n\n                <!-- Right column container -->\n                <div class=\"mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12\">\n                    <form id=\"reset-password-form\">\n                        <!--Sign in section-->\n                        <div class=\"flex flex-row items-center justify-center lg:justify-start\">\n                            <p class=\"mb-4 mr-4 text-lg\">Your new password</p>\n\n                        </div>\n\n                        <!-- Email input -->\n                        <div class=\"relative mb-6 border\" data-te-input-wrapper-init>\n                            <input type=\"password\" name=\"password\"\n                                class=\"peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0\"\n                                id=\"exampleFormControlInput2\" placeholder=\"your password\" />\n                            <label for=\"exampleFormControlInput2\"\n                                class=\"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary\">New\n                                Password\n                            </label>\n                        </div>\n\n                        <!-- Login button -->\n                        <div class=\"text-center lg:text-left\">\n                            <button type=\"submit\"\n                                class=\"inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]\"\n                                data-te-ripple-init data-te-ripple-color=\"light\">\n                                Update password\n                            </button>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </section>\n    </div>\n\n";
var ResetPass = /** @class */ (function (_super) {
    __extends(ResetPass, _super);
    function ResetPass() {
        var _this = _super.call(this, 'main') || this;
        _this.hostEl.innerHTML = templateHTML;
        return _this;
    }
    return ResetPass;
}(base_component_1["default"]));
exports["default"] = ResetPass;
