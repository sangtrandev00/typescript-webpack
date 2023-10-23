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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var base_component_1 = require("../../../components/base-component");
var backend_domain_1 = require("../../../constant/backend-domain");
var autobind_1 = require("../../../decorators/autobind");
var router_1 = require("../../../router/router");
var helper_1 = require("../../../util/helper");
var templateHTML = "\n    <div class=\"shopping-cart bg-gray-100\">\n\n    <div class=\"md:container mx-auto mt-10\">\n        <div class=\"flex shadow-md my-10 border overflow-hidden flex-wrap\">\n            <div id=\"view-cart\"\n                class=\"max-[667px]:w-full md:w-3/4 sm:w-full bg-white px-10 py-10 h-auto md:h-[46rem] overflow-y-auto\">\n                <div class=\"flex justify-between border-b pb-8\">\n                    <h1 class=\"font-semibold text-2xl\">Shopping Cart</h1>\n                    <h2 class=\"font-semibold text-2xl\"><span id=\"cartQty\">3</span> Items</h2>\n                </div>\n\n                <!-- Cart heading title -->\n                <div class=\"flex my-5 bg-tertiary-color py-2 px-4\">\n                    <h3 class=\"font-semibold text-color-2 text-xs uppercase w-2/5\">Product Details</h3>\n                    <h3 class=\"font-semibold text-center text-color-2 text-xs uppercase w-1/5\">\n                        Quantity</h3>\n                    <h3 class=\"font-semibold text-center text-color-2 text-xs uppercase w-1/5\">\n                        Price</h3>\n                    <h3 class=\"font-semibold text-center text-color-2 text-xs uppercase w-1/5\">\n                        Total</h3>\n                </div>\n\n            </div>\n\n            <div id=\"summary\" class=\"max-[667px]:w-full md:w-1/4 sm:w-full px-8 py-10\">\n                <h1 class=\"font-semibold text-2xl border-b pb-8\">Order Summary</h1>\n                <div class=\"flex justify-between mt-10 mb-5\">\n                    <span class=\"font-semibold text-sm uppercase\">Subtotal:</span>\n                    <span id=\"summaryTotal\" class=\"font-semibold text-sm\">590$</span>\n                </div>\n                <div>\n                    <label class=\"font-medium inline-block mb-3 text-sm uppercase\">Shipping</label>\n                    <select class=\"block p-2 text-gray-600 w-full text-sm\">\n                        <option>Standard shipping - $8.00</option>\n                    </select>\n                </div>\n                <div class=\"py-10\">\n                    <label for=\"promo\" class=\"font-semibold inline-block mb-3 text-sm uppercase\">Promo\n                        Code</label>\n                    <input type=\"text\" id=\"promo\" placeholder=\"Enter your code\" class=\"p-2 text-sm w-full\">\n                </div>\n                <button\n                    class=\"bg-impress-color hover:bg-impress-bold-color px-5 py-2 text-sm text-white uppercase\">Apply</button>\n                <div class=\"border-t mt-8\">\n                    <div class=\"flex font-semibold justify-between py-6 text-sm uppercase\">\n                        <span>Total cost</span>\n                        <span id=\"totalCost\">$600</span>\n                    </div>\n                    <a href=\"./checkout.html\" id=\"checkoutBtn\"\n                        class=\"text-center bg-secondary-color font-semibold hover:bg-tertiary-color py-3 text-sm text-white uppercase w-full block\">Checkout</a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    </div>\n";
var ShopCart = /** @class */ (function (_super) {
    __extends(ShopCart, _super);
    function ShopCart() {
        var _this = _super.call(this, 'main') || this;
        _this.hostEl.innerHTML = templateHTML;
        _this.viewCartEl = document.getElementById('view-cart');
        _this.checkoutBtn = document.getElementById('checkoutBtn');
        _this.renderCart();
        _this.attach();
        return _this;
    }
    ShopCart.prototype.attach = function () {
        this.viewCartEl.addEventListener('click', this.clickHandler);
        this.checkoutBtn.addEventListener('click', this.moveToCheckout);
    };
    ShopCart.prototype.renderCart = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var localCart, cart, cartList, _a, totalPrice, cartLength, continueShopEl;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        localCart = localStorage.getItem('cart');
                        if (!localCart)
                            return [2 /*return*/];
                        cart = JSON.parse(localCart);
                        cartList = cart.cartList;
                        return [4 /*yield*/, helper_1["default"].listCartHandler(cartList, this.viewCartEl, this.insertCart)];
                    case 1:
                        _b.sent();
                        _a = helper_1["default"].calcTotalAndLengthOfCart(cartList), totalPrice = _a.totalPrice, cartLength = _a.cartLength;
                        helper_1["default"].textContent('cartQty', cartLength.toString());
                        helper_1["default"].textContent('summaryTotal', "$" + totalPrice.toFixed(2));
                        helper_1["default"].textContent('totalCost', "$" + totalPrice.toFixed(2));
                        continueShopEl = "\n          <a  href=\"./shop.html\" class=\"flex font-semibold text-impress-color text-sm my-5\">\n      \n          <svg class=\"fill-current mr-2 text-impress-color w-4\" viewBox=\"0 0 448 512\">\n              <path\n                  d=\"M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z\" />\n          </svg>\n            Continue Shopping\n          </a>\n        ";
                        this.viewCartEl.insertAdjacentHTML('beforeend', continueShopEl);
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    ShopCart.prototype.insertCart = function (prodId, name, thumbnail, cateName, qty, price, totalItem) {
        var cartItemHtml = "\n            <div prod-id=" + prodId + " class=\"cart-row flex items-center hover:bg-gray-100 -mx-8 px-6 py-3\">\n                <div class=\"flex w-2/5\">\n                    <div class=\"w-20\">\n                        <img class=\"h-24\"\n                            src=\"" + backend_domain_1.BACKEND_URL + "/" + thumbnail + "\" alt=\"" + name + "\">\n                    </div>\n                    <div class=\"flex flex-col justify-between ml-4 flex-grow\">\n                        <a href=\"./detail-product.html?id=" + prodId + "\" class=\"font-bold text-sm\">" + name + "</a>\n                        <span class=\"text-red-500 text-xs\">" + cateName + "</span>\n                        <a href=\"#\"\n                            class=\"remove-link font-semibold hover:text-red-500 text-gray-500 text-xs\">Remove</a>\n                    </div>\n                </div>\n                <div class=\"flex justify-center w-1/5\">\n                    <svg class=\"descrease-btn change-qty-btn fill-current text-gray-600 w-3 cursor-pointer\" viewBox=\"0 0 448 512\">\n                        <path class=\"descrease-btn change-qty-btn\"\n                            d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\" />\n                    </svg>\n\n                    <input class=\"cart-qty mx-2 border text-center w-12\" type=\"text\" value=\"" + qty + "\">\n\n                    <svg class=\"increase-btn change-qty-btn fill-current text-gray-600 w-3 cursor-pointer\" viewBox=\"0 0 448 512\">\n                        <path class=\"increase-btn change-qty-btn\"\n                            d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\" />\n                    </svg>\n                </div>\n                <span class=\"text-center w-1/5 font-semibold text-sm\">$<span class=\"price-item\">" + price.toFixed(2) + "</span> </span>\n                <span class=\"text-center w-1/5 font-semibold text-sm\">$<span class=\"total-item\">" + totalItem.toFixed(2) + "</span></span>\n            </div>\n            ";
        return cartItemHtml;
    };
    ShopCart.prototype.clickHandler = function (e) {
        e.preventDefault();
        var actionBtn = e.target;
        if (actionBtn && actionBtn.classList.contains('remove-link')) {
            this.removeCart(actionBtn);
        }
        if (actionBtn && actionBtn.classList.contains('change-qty-btn')) {
            this.updateCart(actionBtn);
        }
    };
    ShopCart.prototype.removeCart = function (actionBtn) {
        var cartRow = actionBtn.closest('.cart-row');
        var prodId = cartRow === null || cartRow === void 0 ? void 0 : cartRow.getAttribute('prod-id');
        // Remove out of DOM
        cartRow === null || cartRow === void 0 ? void 0 : cartRow.remove();
        // Remove out of localstorage
        var localCart = localStorage.getItem('cart');
        if (!localCart)
            return;
        var currentCartList = JSON.parse(localCart).cartList;
        var updatedCartList = currentCartList.filter(function (cartItem) { return cartItem.prodId !== prodId; });
        var updatedCart = {
            cartList: updatedCartList
        };
        // Update Top UI number of cart items
        var cartLength = helper_1["default"].calcTotalAndLengthOfCart(updatedCartList).cartLength;
        helper_1["default"].textContent('numberCartItems', cartLength.toString());
        // Update Cart view ui
        this.updateUiViewCart(updatedCartList);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    ShopCart.prototype.updateLocalStorageCart = function (currProdId, newQty) {
        var localCart = localStorage.getItem('cart');
        if (!localCart)
            return;
        var cartList = JSON.parse(localCart).cartList;
        var updatedCartList = __spreadArrays(cartList);
        var cartItemIndex = updatedCartList.findIndex(function (cartItem) { return cartItem.prodId === currProdId; });
        updatedCartList[cartItemIndex].qty = newQty;
        var updatedCart = {
            cartList: updatedCartList
        };
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
    };
    ShopCart.prototype.updateCart = function (actionBtn) {
        var cartRow = actionBtn.closest('.cart-row');
        var currQtyEl = cartRow === null || cartRow === void 0 ? void 0 : cartRow.querySelector('.cart-qty');
        var currQty = +currQtyEl.value;
        var priceItem = cartRow === null || cartRow === void 0 ? void 0 : cartRow.querySelector('.price-item');
        var priceItemVal = +(priceItem.textContent || 0);
        var totalItem = cartRow === null || cartRow === void 0 ? void 0 : cartRow.querySelector('.total-item');
        // const totalItemVal = +(totalItem.textContent || 0 );
        var currProdId = cartRow === null || cartRow === void 0 ? void 0 : cartRow.getAttribute('prod-id');
        // Increase quanity number of cart
        if (actionBtn && actionBtn.classList.contains('increase-btn')) {
            // const increaseBtn = e.target.closest(".increase-btn");
            // const descreaseBtn = e.target.closest(".descrease-btn");
            var newQty = currQty + 1;
            // Update qty at DOM
            currQtyEl.value = newQty.toString();
            // update qty at local storage
            var updatedCart = this.updateLocalStorageCart(currProdId, newQty);
            // Update total item price at DOM
            var currTotalItemVal = priceItemVal * newQty;
            totalItem.textContent = currTotalItemVal.toFixed(2);
            this.updateUiViewCart(updatedCart.cartList);
        }
        // Descrease quantity number of cart
        if (actionBtn && actionBtn.classList.contains('descrease-btn')) {
            // Handle error
            if (currQty <= 1)
                return;
            var newQty = currQty - 1;
            // Update qty at DOM
            currQtyEl.value = newQty.toString();
            // Update at local storage
            var updatedCart = this.updateLocalStorageCart(currProdId, newQty);
            // Update total item price at DOM
            var currTotalItemVal = priceItemVal * newQty;
            totalItem.textContent = currTotalItemVal.toFixed(2);
            this.updateUiViewCart(updatedCart.cartList);
        }
    };
    ShopCart.prototype.updateUiViewCart = function (cartList) {
        var _a = helper_1["default"].calcTotalAndLengthOfCart(cartList), totalPrice = _a.totalPrice, cartLength = _a.cartLength;
        helper_1["default"].textContent('cartQty', cartLength.toString());
        helper_1["default"].textContent('summaryTotal', "$" + totalPrice.toFixed(2));
        helper_1["default"].textContent('totalCost', "$" + totalPrice.toFixed(2));
    };
    ShopCart.prototype.moveToCheckout = function (e) {
        e.preventDefault();
        history.pushState({}, '', '/checkout');
        new router_1["default"]();
    };
    __decorate([
        autobind_1.autobind
    ], ShopCart.prototype, "clickHandler");
    __decorate([
        autobind_1.autobind
    ], ShopCart.prototype, "updateCart");
    __decorate([
        autobind_1.autobind
    ], ShopCart.prototype, "moveToCheckout");
    return ShopCart;
}(base_component_1["default"]));
exports["default"] = ShopCart;
