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
var Input_1 = require("../components/Input");
var Button_1 = require("../components/Button");
var base_component_1 = require("../../../../components/base-component");
var EmailInput = new Input_1["default"]("email", "email", "Email Address", "", "Email Address");
var ButtonEl = new Button_1["default"]("submit", "RESET");
var templateHTML = "\n<div id=\"forgot-content\">\n<section class=\"h-screen\">\n    <div class=\"h-full\">\n        <!-- Left column container with background-->\n        <div\n            class=\"g-6 flex h-full flex-wrap items-center justify-center lg:justify-between shadow-md border-2 px-10\">\n            <div class=\"shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12\">\n                <img src=\"https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp\"\n                    class=\"w-full\" alt=\"Sample image\" />\n            </div>\n\n            <!-- Right column container -->\n            <div class=\"mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12\">\n                <form id=\"reset-form\">\n                    <!--Sign in section-->\n                    <div class=\"flex flex-row items-center justify-center lg:justify-start\">\n                        <p class=\"mb-4 mr-4 text-lg\">Enter Email to reset password!</p>\n\n                    </div>\n\n                    <!-- Email input -->\n                   " + EmailInput.render() + "\n\n                    <!-- Login button -->\n                    <div class=\"text-center lg:text-left\">\n                        " + ButtonEl.render() + "\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n</div>\n\n";
var Reset = /** @class */ (function (_super) {
    __extends(Reset, _super);
    function Reset() {
        var _this = _super.call(this, 'main') || this;
        _this.hostEl.innerHTML = templateHTML;
        return _this;
    }
    return Reset;
}(base_component_1["default"]));
exports["default"] = Reset;
