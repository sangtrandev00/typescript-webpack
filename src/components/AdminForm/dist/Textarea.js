"use strict";
exports.__esModule = true;
var Textarea = /** @class */ (function () {
    function Textarea(_classSize, _id, _label, _name, _placeholder, _rows) {
        this._classSize = _classSize;
        this._id = _id;
        this._label = _label;
        this._name = _name;
        this._placeholder = _placeholder;
        this._rows = _rows;
    }
    Object.defineProperty(Textarea.prototype, "component", {
        get: function () {
            return "\n        <div class=\"" + this._classSize + "\">\n            <label for=\"" + this._id + "\"\n                class=\"block mb-2 text-sm font-medium text-gray-900 dark:text-white\">\n                " + this._label + "\n            </label>\n            <textarea\n                id=\"" + this._id + "\" name=\"" + this._name + "\" rows=\"" + this._rows + "\"\n                class=\"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500\"\n                placeholder=\"" + this._placeholder + "\"></textarea>\n        </div>\n        ";
        },
        enumerable: false,
        configurable: true
    });
    return Textarea;
}());
exports["default"] = Textarea;
