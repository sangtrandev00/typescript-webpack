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
exports.__esModule = true;
var ProductItem_1 = require("../../../../components/ProductItem");
var backend_domain_1 = require("../../../../constant/backend-domain");
var ProductCard = /** @class */ (function (_super) {
    __extends(ProductCard, _super);
    function ProductCard(_id, _name, _oldPrice, _discount, _thumbnail) {
        var _this = 
        // call super to extends from ProductItem class with arguments
        _super.call(this, _id, _name, _oldPrice, _discount, _thumbnail) || this;
        _this._newPrice = 0;
        if (_this._oldPrice) {
            _this._newPrice = _this._oldPrice * (1 - 1 / (_this._discount || 0));
        }
        return _this;
    }
    Object.defineProperty(ProductCard.prototype, "component", {
        // Override
        get: function () {
            return "\n            <div data-id=\"" + this._id + "\" class=\"lg:w-1/3 md:w-1/2 p-4 w-full card-product\">\n            <a href=\"./detail?id=" + this._id + "\" class=\"group relative block overflow-hidden border pt-2 card-product__link shadow-lg\">\n            <button class=\"card-product__wishlist absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75\">\n                <span class=\"sr-only\">Wishlist</span>\n\n                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\"></path>\n                </svg>\n            </button>\n\n            <div class=\"pt-4\">\n                <img src=\"" + backend_domain_1.BACKEND_URL + "/" + this._thumbnail + "\" alt=\"" + this._name + "\" class=\"transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2 object-cover sm:object-cover\">\n\n            </div>\n            <div class=\"relative border border-gray-100 bg-white p-6\">\n                <span class=\"whitespace-nowrap bg-impress-color px-3 py-1.5 text-xs font-medium text-white\">\n                    New\n                </span>\n\n                <h3 class=\"mt-4 card-product__title text-lg font-medium text-gray-900\">\n                    " + this._name + "\n                </h3>\n\n                <div class=\"flex items-center\">\n                    <p class=\"mt-1.5 text-xl text-red-500 \">$" + this._newPrice.toFixed(2) + "</p>\n                    <p class=\"mt-1.5 text-sm text-gray-700 ms-2 line-through \">$" + this._oldPrice + "</p>\n                </div>\n\n                <!-- Rating here -->\n                <ul class=\"flex justify-center mt-2\">\n                    <li>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                            <path fill-rule=\"evenodd\" d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\" clip-rule=\"evenodd\"></path>\n                        </svg>\n                    </li>\n                    <li>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                            <path fill-rule=\"evenodd\" d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\" clip-rule=\"evenodd\"></path>\n                        </svg>\n                    </li>\n                    <li>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                            <path fill-rule=\"evenodd\" d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\" clip-rule=\"evenodd\"></path>\n                        </svg>\n                    </li>\n                    <li>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\"></path>\n                        </svg>\n                    </li>\n                    <li>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\"></path>\n                        </svg>\n                    </li>\n                </ul>\n\n                <form class=\"mt-4\">\n                    <button class=\"add-to-cart block w-full rounded bg-quaternary-color text- p-4 text-text-color-1 font-medium transition hover:scale-105\">\n                        Add to Cart\n                    </button>\n                </form>\n            </div>\n        </a>\n        </div>\n        ";
        },
        enumerable: false,
        configurable: true
    });
    return ProductCard;
}(ProductItem_1["default"]));
exports["default"] = ProductCard;
