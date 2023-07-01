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
var base_component_1 = require("../../components/base-component");
var autobind_1 = require("../../decorators/autobind");
var AdminToast_1 = require("../../components/AdminToast");
var helper_1 = require("../../util/helper");
var templateHTML = "\n";
var AdminBaseComponent = /** @class */ (function (_super) {
    __extends(AdminBaseComponent, _super);
    function AdminBaseComponent(_type, _tableElId, _modalFormId, _toastId, _createBtnId, _closeFormModalBtnId, _closeToastBtnId, _triggerModalDeleteBtnId, _deleteConfirmBtnId, _formId) {
        var _this = _super.call(this, 'admin-content') || this;
        _this._type = _type;
        _this._tableElId = _tableElId;
        _this._modalFormId = _modalFormId;
        _this._toastId = _toastId;
        _this._createBtnId = _createBtnId;
        _this._closeFormModalBtnId = _closeFormModalBtnId;
        _this._closeToastBtnId = _closeToastBtnId;
        _this._triggerModalDeleteBtnId = _triggerModalDeleteBtnId;
        _this._deleteConfirmBtnId = _deleteConfirmBtnId;
        _this._formId = _formId;
        _this._currentId = "";
        _this.hostEl.innerHTML = _this.component;
        _this.clearTableData();
        _this.render();
        _this.tableEl = document.getElementById(_this._tableElId);
        _this.modalFormEl = document.getElementById(_this._modalFormId);
        _this.toastMsgEl = document.getElementById(_this._toastId);
        _this.createBtn = document.getElementById(_this._createBtnId);
        _this.closeFormModalBtn = document.getElementById(_this._closeFormModalBtnId);
        _this.closeDeleteModalBtn = document.getElementById("closeDeleteModal");
        _this.closeToastBtn = document.getElementById(_this._closeToastBtnId);
        _this.triggerModalDeleteBtn = document.getElementById(_this._triggerModalDeleteBtnId);
        _this.deleteConfirmBtn = document.getElementById(_this._deleteConfirmBtnId);
        _this.FormEl = document.getElementById(_this._formId);
        _this.deleteModalEl = document.getElementById('deleteModal');
        _this.modal = new flowbite_1.Modal(_this.modalFormEl);
        _this.toastMsg = new AdminToast_1["default"]();
        _this.attach();
        return _this;
    }
    AdminBaseComponent.prototype.render = function () {
    };
    AdminBaseComponent.prototype.attach = function () {
        // this.FormEl.addEventListener('submit', this.submitHandler);
        this.tableEl.addEventListener('click', this.clickHandler);
        console.log(this.createBtn);
        if (this.createBtn) {
            this.createBtn.addEventListener('click', this.addHandler);
        }
        console.log(this.deleteConfirmBtn);
        this.deleteConfirmBtn.addEventListener('click', this.deleteHandler);
        this.closeDeleteModalBtn.addEventListener('click', this.hideDeleteModal);
        // this.closeFormModalBtn.addEventListener('click', this.closeFormModal);
    };
    AdminBaseComponent.prototype.clickHandler = function (e) {
        e.preventDefault();
        var targetEl = e.target;
        var btnEl = targetEl.closest('button');
        console.log(btnEl);
        if (btnEl) {
            this._currentId = btnEl === null || btnEl === void 0 ? void 0 : btnEl.getAttribute(this._type + "-id");
        }
        console.log(this._currentId);
        // Edit
        if (targetEl &&
            targetEl.matches("button, button i") &&
            targetEl.classList.contains("update-modal-trigger")) {
            this.editHandler();
        }
        // Delete
        if (targetEl &&
            targetEl.classList.contains("delete-modal-trigger") &&
            targetEl.matches("button, button i")) {
            this.showDeleteModal();
        }
    };
    ;
    AdminBaseComponent.prototype.showDeleteModal = function () {
        // const deleteModalEl = document.getElementById('deleteModal');
        this.deleteModal = new flowbite_1.Modal(this.deleteModalEl);
        this.deleteModal.show();
    };
    ;
    AdminBaseComponent.prototype.hideDeleteModal = function () {
        var _a;
        console.log("hide modal clicked!");
        // this.deleteModal = new Modal(this.deleteModalEl);
        (_a = this.deleteModal) === null || _a === void 0 ? void 0 : _a.hide();
    };
    AdminBaseComponent.prototype.clearInputs = function () {
    };
    AdminBaseComponent.prototype.clearTableData = function () {
        if (this.dataTable) {
            this.dataTable.destroy();
        }
    };
    AdminBaseComponent.prototype.showModal = function (type) {
        // type = add/update
        var typeCapitalized = helper_1["default"].capitalize(this._type);
        console.log(typeCapitalized);
        this.modalFormEl = document.getElementById(typeCapitalized + "Modal");
        this.modal = new flowbite_1.Modal(this.modalFormEl);
        this.modal.show();
        this.closeFormModalBtn = document.getElementById('closeModalForm');
        this.closeFormModalBtn.addEventListener('click', this.hideModal);
        var formElId = "";
        if (this._type === "category") {
            formElId = type + "-cate-form";
        }
        else if (this._type === "product") {
            formElId = type + "-product-form";
        }
        else {
            formElId = type + "-" + this._type + "-form";
        }
        this.FormEl = document.getElementById(formElId); // update-product/cate-form
        this.FormEl.addEventListener('submit', this.submitHandler);
    };
    AdminBaseComponent.prototype.showToast = function (type, title, message, minutes) {
        if (type === void 0) { type = "primary"; }
        if (title === void 0) { title = "Add " + this._type; }
        if (message === void 0) { message = "Add " + this._type + " Successfully!"; }
        if (minutes === void 0) { minutes = '1 minutes'; }
        console.log(type, title, message, minutes);
        this.toastMsg = new AdminToast_1["default"](type, title, message, minutes);
        this.closeToastBtn = document.getElementById('closeToast');
        console.log(this.closeToastBtn);
        this.closeToastBtn.addEventListener('click', this.hideToast);
        this.toastMsg.show();
    };
    AdminBaseComponent.prototype.hideModal = function () {
        this.modal.hide();
    };
    AdminBaseComponent.prototype.hideToast = function () {
        console.log(this.toastMsg);
        console.log(this);
        console.log("hide toast successfully!");
        this.toastMsg.hide();
    };
    AdminBaseComponent.prototype.closeFormModal = function () {
        this.modal.hide();
    };
    Object.defineProperty(AdminBaseComponent.prototype, "component", {
        get: function () {
            return templateHTML;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        autobind_1.autobind
    ], AdminBaseComponent.prototype, "clickHandler");
    __decorate([
        autobind_1.autobind
    ], AdminBaseComponent.prototype, "hideDeleteModal");
    __decorate([
        autobind_1.autobind
    ], AdminBaseComponent.prototype, "showToast");
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
