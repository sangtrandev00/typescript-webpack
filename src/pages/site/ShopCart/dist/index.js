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
var base_component_1 = require("../../../components/base-component");
var templateHTML = "\n    <div class=\"shopping-cart bg-gray-100\">\n\n    <div class=\"md:container mx-auto mt-10\">\n        <div class=\"flex shadow-md my-10 border overflow-hidden flex-wrap\">\n            <div id=\"view-cart\"\n                class=\"max-[667px]:w-full md:w-3/4 sm:w-full bg-white px-10 py-10 h-auto md:h-[46rem] overflow-y-auto\">\n                <div class=\"flex justify-between border-b pb-8\">\n                    <h1 class=\"font-semibold text-2xl\">Shopping Cart</h1>\n                    <h2 class=\"font-semibold text-2xl\"><span id=\"cartQty\">3</span> Items</h2>\n                </div>\n\n                <!-- Cart heading title -->\n                <div class=\"flex my-5 bg-slate-300 py-2 px-4\">\n                    <h3 class=\"font-semibold text-gray-600 text-xs uppercase w-2/5\">Product Details</h3>\n                    <h3 class=\"font-semibold text-center text-gray-600 text-xs uppercase w-1/5\">\n                        Quantity</h3>\n                    <h3 class=\"font-semibold text-center text-gray-600 text-xs uppercase w-1/5\">\n                        Price</h3>\n                    <h3 class=\"font-semibold text-center text-gray-600 text-xs uppercase w-1/5\">\n                        Total</h3>\n                </div>\n\n            </div>\n\n            <div id=\"summary\" class=\"max-[667px]:w-full md:w-1/4 sm:w-full px-8 py-10\">\n                <h1 class=\"font-semibold text-2xl border-b pb-8\">Order Summary</h1>\n                <div class=\"flex justify-between mt-10 mb-5\">\n                    <span class=\"font-semibold text-sm uppercase\">Subtotal:</span>\n                    <span id=\"summaryTotal\" class=\"font-semibold text-sm\">590$</span>\n                </div>\n                <div>\n                    <label class=\"font-medium inline-block mb-3 text-sm uppercase\">Shipping</label>\n                    <select class=\"block p-2 text-gray-600 w-full text-sm\">\n                        <option>Standard shipping - $8.00</option>\n                    </select>\n                </div>\n                <div class=\"py-10\">\n                    <label for=\"promo\" class=\"font-semibold inline-block mb-3 text-sm uppercase\">Promo\n                        Code</label>\n                    <input type=\"text\" id=\"promo\" placeholder=\"Enter your code\" class=\"p-2 text-sm w-full\">\n                </div>\n                <button\n                    class=\"bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase\">Apply</button>\n                <div class=\"border-t mt-8\">\n                    <div class=\"flex font-semibold justify-between py-6 text-sm uppercase\">\n                        <span>Total cost</span>\n                        <span id=\"totalCost\">$600</span>\n                    </div>\n                    <a href=\"./checkout.html\" id=\"checkoutBtn\"\n                        class=\"text-center bg-slate-500 font-semibold hover:bg-slate-600 py-3 text-sm text-white uppercase w-full block\">Checkout</a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    </div>\n";
var ShopCart = /** @class */ (function (_super) {
    __extends(ShopCart, _super);
    function ShopCart() {
        var _this = _super.call(this, 'main') || this;
        _this.hostEl.innerHTML = templateHTML;
        return _this;
    }
    return ShopCart;
}(base_component_1["default"]));
exports["default"] = ShopCart;
