"use strict";
exports.__esModule = true;
var ActionBtn = /** @class */ (function () {
    function ActionBtn(btnClass, attrType, attributeId, buttonType, iconClass, text) {
        if (buttonType === void 0) { buttonType = "button"; }
        this.btnClass = btnClass;
        this.attrType = attrType;
        this.attributeId = attributeId;
        this.buttonType = buttonType;
        this.iconClass = iconClass;
        this.text = text;
        // static instance: ProductItem = new ProductItem('', '', 0, 0, '');
        this._newPrice = 0;
    }
    Object.defineProperty(ActionBtn.prototype, "component", {
        get: function () {
            return "\n        <button class=\"" + this.btnClass + "\" " + this.attrType + "-id=\"" + this.attributeId + "\" type=\"" + this.buttonType + "\">\n            <i class=\"" + this.btnClass + " " + this.iconClass + "\"></i>\n           " + this.text + "\n        </button>\n        ";
        },
        enumerable: false,
        configurable: true
    });
    return ActionBtn;
}());
exports["default"] = ActionBtn;
