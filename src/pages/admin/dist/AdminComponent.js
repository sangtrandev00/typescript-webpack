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
exports.__esModule = true;
var flowbite_1 = require("flowbite");
// import ToastMessage from "../../../components/AdminToast";
var AdminToast_1 = require("../../components/AdminToast");
var base_component_1 = require("../../components/base-component");
var autobind_1 = require("../../decorators/autobind");
var templateHTML = "\n";
var AdminBaseComponent = /** @class */ (function (_super) {
    __extends(AdminBaseComponent, _super);
    function AdminBaseComponent() {
        var _this = _super.call(this, 'admin-content') || this;
        _this._currentId = "";
        _this.hostEl.innerHTML = templateHTML;
        _this.render();
        _this.tableEl = document.getElementById('table-categories');
        _this.modalFormEl = document.getElementById('createCategoryModal');
        _this.toastMsgEl = document.getElementById('toast-success');
        _this.createBtn = document.getElementById("createCategoryModalButton");
        _this.closeFormModalBtn = document.getElementById('closeModalForm');
        _this.closeToastBtn = document.getElementById('closeToast');
        _this.triggerModalDeleteBtn = document.getElementById('deleteCategoryBtn');
        _this.deleteConfirmBtn = document.getElementById('delete-cate-btn');
        _this.cateForm = document.getElementById('add-cate-form');
        _this.modal = new flowbite_1.Modal(_this.modalFormEl);
        _this.toastMsg = new AdminToast_1["default"]();
        _this.attach();
        return _this;
    }
    AdminBaseComponent.prototype.clearInputs = function () {
    };
    AdminBaseComponent.prototype.clearTableData = function () {
        if (this.categoriesTable) {
            this.categoriesTable.destroy();
        }
    };
    AdminBaseComponent.prototype.showModal = function (type) {
        this.modalFormEl = document.getElementById('CategoryModal');
        this.modal = new flowbite_1.Modal(this.modalFormEl);
        this.modal.show();
        this.closeFormModalBtn = document.getElementById('closeModalForm');
        this.closeFormModalBtn.addEventListener('click', this.hideModal);
        this.cateForm = document.getElementById(type + "-cate-form");
        this.cateForm.addEventListener('submit', this.submitHandler);
    };
    AdminBaseComponent.prototype.showToast = function (type, title, message, minutes) {
        if (type === void 0) { type = "primary"; }
        if (title === void 0) { title = 'Add Category'; }
        if (message === void 0) { message = 'Add Category Successfully!'; }
        if (minutes === void 0) { minutes = '1 minutes'; }
        console.log(type, title, message, minutes);
        this.toastMsg = new AdminToast_1["default"](type, title, message, minutes);
        this.closeToastBtn = document.getElementById('closeToast');
        this.closeToastBtn.addEventListener('click', this.hideToast);
        this.toastMsg.show();
    };
    AdminBaseComponent.prototype.hideModal = function () {
        this.modal.hide();
    };
    AdminBaseComponent.prototype.hideToast = function () {
        console.log(this.toastMsg);
        this.toastMsg.hide();
    };
    AdminBaseComponent.prototype.closeFormModal = function () {
        this.modal.hide();
    };
    __decorate([
        autobind_1.autobind
    ], AdminBaseComponent.prototype, "hideModal");
    __decorate([
        autobind_1.autobind
    ], AdminBaseComponent.prototype, "hideToast");
    __decorate([
        autobind_1.autobind
    ], AdminBaseComponent.prototype, "closeFormModal");
    return AdminBaseComponent;
}(base_component_1["default"]));
exports["default"] = AdminBaseComponent;
