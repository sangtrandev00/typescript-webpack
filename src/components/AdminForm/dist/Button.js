"use strict";
exports.__esModule = true;
var Button = /** @class */ (function () {
    function Button(_id, _label, _type) {
        this._id = _id;
        this._label = _label;
        this._type = _type;
    }
    Object.defineProperty(Button.prototype, "component", {
        get: function () {
            return "\n        <button id=\"" + this._id + "\" type=\"" + this._type + "\"\n        class=\"text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800\">\n            <svg class=\"mr-1 -ml-1 w-6 h-6\" fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\"\n                    d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\"\n                    clip-rule=\"evenodd\" />\n            </svg>\n           " + this._label + "\n        </button>\n        ";
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}());
exports["default"] = Button;
