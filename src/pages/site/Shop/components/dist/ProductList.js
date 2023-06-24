"use strict";
// Write a class component
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var shopApi_1 = require("../../../../api/shopApi");
var ProductList_1 = require("../../../../components/ProductList");
var autobind_1 = require("../../../../decorators/autobind");
var router_1 = require("../../../../router/router");
var ProductCard_1 = require("./ProductCard");
var ProductCardList = /** @class */ (function (_super) {
    __extends(ProductCardList, _super);
    function ProductCardList() {
        var _this = 
        // call super to extends from ProductItem class with arguments
        _super.call(this) || this;
        _this.hostEl = document.getElementById('product-list');
        _this.attach();
        return _this;
    }
    ProductCardList.prototype.load = function () {
        var _this = this;
        var loadList = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, products, _i, products_1, product, _id, name, oldPrice, discount, thumbnail, prodItem;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, shopApi_1["default"].getProducts({ _limit: this.numOfProds })];
                    case 1:
                        response = _b.sent();
                        products = response.data.products;
                        this.hostEl.innerHTML = "";
                        for (_i = 0, products_1 = products; _i < products_1.length; _i++) {
                            product = products_1[_i];
                            _id = product._id, name = product.name, oldPrice = product.oldPrice, discount = product.discount, thumbnail = product.thumbnail;
                            prodItem = new ProductCard_1["default"](_id, name, oldPrice, discount, thumbnail);
                            (_a = this.hostEl) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', prodItem.component);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        loadList();
    };
    ProductCardList.prototype.attach = function () {
        this.hostEl.addEventListener('click', this.moveDetailHandler);
    };
    ProductCardList.prototype.moveDetailHandler = function (e) {
        e.preventDefault();
        console.log(e.target);
        var imgEl = e.target;
        if (imgEl && imgEl.nodeName === "IMG") {
            var cardProdEl = imgEl.closest('.card-product');
            var prodId = cardProdEl === null || cardProdEl === void 0 ? void 0 : cardProdEl.dataset.id;
            history.pushState(null, '', "/detail?id=" + prodId);
            new router_1["default"]();
        }
    };
    __decorate([
        autobind_1.autobind
    ], ProductCardList.prototype, "moveDetailHandler");
    return ProductCardList;
}(ProductList_1["default"]));
exports["default"] = ProductCardList;
