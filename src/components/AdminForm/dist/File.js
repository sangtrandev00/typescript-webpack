"use strict";
exports.__esModule = true;
var FileInput = /** @class */ (function () {
    function FileInput(_classSize, _id, _label, _type, _name, _accept, _multiple) {
        if (_type === void 0) { _type = "file"; }
        if (_multiple === void 0) { _multiple = false; }
        this._classSize = _classSize;
        this._id = _id;
        this._label = _label;
        this._type = _type;
        this._name = _name;
        this._accept = _accept;
        this._multiple = _multiple;
    }
    Object.defineProperty(FileInput.prototype, "component", {
        get: function () {
            return "\n        <div class=\"" + this._classSize + "\">\n            <label for=" + this._id + " class=\"block mb-2 text-sm font-medium text-gray-900 dark:text-white\" for=\"cateImage\">" + this._label + " </label>\n            <input name=\"" + this._name + "\" id=\"" + this._id + "\" accept=\"" + this._accept + "\" class=\"block w-full mb-5 text-sm text-primary-900 border border-gray-300 rounded-lg cursor-pointer bg-primary-50 dark:text-primary-400 focus:outline-none dark:bg-primary-700 dark:border-gray-600 dark:placeholder-primary-400\"  type=\"" + this._type + "\" " + (this._multiple ? "multiple" : "") + ">\n        </div>\n        ";
        },
        enumerable: false,
        configurable: true
    });
    return FileInput;
}());
exports["default"] = FileInput;
