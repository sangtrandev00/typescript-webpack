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
exports.Form = void 0;
var Button_1 = require("../../../../components/AdminForm/Button");
var File_1 = require("../../../../components/AdminForm/File");
var Input_1 = require("../../../../components/AdminForm/Input");
var Textarea_1 = require("../../../../components/AdminForm/Textarea");
var base_component_1 = require("../../../../components/base-component");
var Form = /** @class */ (function () {
    function Form(_id, _type) {
        this._id = _id;
        this._type = _type;
        this.CateNameInput = new Input_1["default"]('col-span-2', 'name', 'Tên danh mục', 'text', 'name', 'Tên danh mục');
        this.CateImageInput = new File_1["default"]('col-span-2', 'cateImage', 'Hình ảnh', 'file', 'cateImage', "image/png, image/jpeg");
        this.CateDesc = new Textarea_1["default"]('col-span-2', 'description', 'Description', 'description', 'Description', 4);
        this.CateOldImages = new Input_1["default"]('col-span-2 hidden', 'oldImage', 'Hình ảnh', 'hidden', 'oldImage', "old image");
        this.SubmitBtn = new Button_1["default"](this._type + "-cate-btn", "Save", 'submit');
    }
    Object.defineProperty(Form.prototype, "component", {
        get: function () {
            return "\n        <form action=\"#\" id=\"" + this._id + "\">\n                        <div class=\"grid gap-4 mb-4 sm:grid-cols-2\">\n                            " + this.CateNameInput.component + "\n                           " + this.CateImageInput.component + "\n                           " + this.CateOldImages.component + "\n                           " + this.CateDesc.component + "\n                        </div>\n                        " + this.SubmitBtn.component + "\n        </form>\n        ";
        },
        enumerable: false,
        configurable: true
    });
    return Form;
}());
exports.Form = Form;
var ModalForm = /** @class */ (function (_super) {
    __extends(ModalForm, _super);
    function ModalForm(_type) {
        var _this = _super.call(this, 'CategoryModal') || this;
        _this._type = _type;
        _this.hostEl.innerHTML = _this.component;
        console.log(_this.hostEl);
        return _this;
    }
    Object.defineProperty(ModalForm.prototype, "component", {
        get: function () {
            return "\n        <div class=\"relative p-4 w-full max-w-2xl max-h-full\">\n            <!-- Modal content -->\n            <div class=\"relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5\">\n                <!-- Modal header -->\n\n                <div\n                    class=\"flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600\">\n                    <h3 class=\"text-lg font-semibold text-gray-900 dark:text-white capitalize\">" + this._type + " Category</h3>\n                    <button type=\"button\" id=\"closeModalForm\"\n                        class=\"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\"\n                        data-modal-target=\"CategoryModal\" data-modal-toggle=\"CategoryModal\">\n                        <svg aria-hidden=\"true\" class=\"w-5 h-5\" fill=\"currentColor\" viewbox=\"0 0 20 20\"\n                            xmlns=\"http://www.w3.org/2000/svg\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\"\n                                clip-rule=\"evenodd\" />\n                        </svg>\n                        <span class=\"sr-only\">Close modal</span>\n                    </button>\n                </div>\n                <!-- Modal body -->\n                " + (new Form(this._type + "-\n                -form", "" + this._type)).component + "\n\n            </div>\n        </div>\n        ";
        },
        enumerable: false,
        configurable: true
    });
    return ModalForm;
}(base_component_1["default"]));
exports["default"] = ModalForm;
