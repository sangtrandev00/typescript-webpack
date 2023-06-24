"use strict";
exports.__esModule = true;
var Input = /** @class */ (function () {
    function Input(_classSize, _id, _label, _type, _name, _placeholder) {
        this._classSize = _classSize;
        this._id = _id;
        this._label = _label;
        this._type = _type;
        this._name = _name;
        this._placeholder = _placeholder;
    }
    Object.defineProperty(Input.prototype, "component", {
        get: function () {
            return "\n        <div class=" + this._classSize + ">\n            <label for=\"" + this._id + "\" class=\"block mb-2 text-sm font-medium text-gray-900 dark:text-white\">" + this._label + "</label>\n            <input type=\"" + this._type + "\" name=\"" + this._name + "\" id=\"" + this._id + "\" class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500\" placeholder=\"" + this._placeholder + "\" required=\"\">\n        </div>\n        ";
        },
        enumerable: false,
        configurable: true
    });
    return Input;
}());
exports["default"] = Input;
