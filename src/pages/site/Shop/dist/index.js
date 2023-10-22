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
// import ShopApi from "../../../api/shopApi";
var categoriesApi_1 = require("../../../api/categoriesApi");
var shopApi_1 = require("../../../api/shopApi");
var base_component_1 = require("../../../components/base-component");
var autobind_1 = require("../../../decorators/autobind");
var helper_1 = require("../../../util/helper");
// import { BACKEND_URL } from "../../../constant/backend-domain";
// import { Productable } from "../../../interface/Product";
var Filter_1 = require("./components/Filter");
var ProductList_1 = require("./components/ProductList");
var Search_1 = require("./components/Search");
var Sort_1 = require("./components/Sort");
var FilterInstance = new Filter_1["default"]();
var SearchInstance = new Search_1["default"]();
var SortInstace = new Sort_1["default"]();
var templateHTML = "\n    <div id=\"shop-content\" class=\"shop-content flex mt-8 w-full\">\n    " + FilterInstance.render() + "\n\n    <!-- Flex 70% content shop-->\n    <div class=\"shop-content__products-collection md:w-3/4 w-full\">\n        <!-- Search bar and sort-->\n\n        <div class=\"flex p-4 justify-between\">\n\n            <div class=\"w-2/3\">\n                " + SearchInstance.render() + "\n            </div>\n\n            <div class=\"relative w-1/3\" data-te-dropdown-ref>\n               " + SortInstace.render() + "\n            </div>\n        </div>\n\n        <div id=\"show-result-text\" class=\"px-4 mb-3 hidden\">\n            <p><i class=\"fa-regular fa-lightbulb\"></i> K\u1EBFt qu\u1EA3 t\u00ECm cho t\u1EEB kh\u00F3a: '<span id=\"keyword\"\n                    class=\"text-orange-500\">Oppo</span>'</p>\n        </div>\n\n        <div class=\"flex px-4\">\n            <p class=\"me-10 hidden show-result-text__by-cate\">Trong danh m\u1EE5c: <i class=\"fa-solid fa-check\"></i>\n                Oppo\n                <i class=\"fa-solid fa-check\"></i> Samsung\n            </p>\n\n            <p class=\"me-10 hidden show-result-text__by-sort\">L\u1ECDc s\u1EA3n ph\u1EA9m: <i\n                    class=\"fa-solid fa-filter-circle-xmark\"></i> Gi\u00E1 t\u0103ng d\u1EA7n</p>\n            <p class=\"me-10 hidden show-result-text__by-range\">Theo gi\u00E1 t\u1EEB: $200 -> $1000</p>\n        </div>\n\n        <!-- Full product collections -->\n        <div class=\"shop-content__products-display\">\n            <section class=\"text-gray-600 body-font\">\n                <div class=\"md:container px-5 pb-4 mt-4\">\n                    <div id=\"product-list\" class=\"flex flex-wrap -m-4\">\n                        <!-- Single products!!! -->\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full card-product\">\n                            <a href=\"detail-product.html\"\n                                class=\"group relative block overflow-hidden border pt-2 card-product__link\">\n                                <button\n                                    class=\"card-product__wishlist absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75\">\n                                    <span class=\"sr-only\">Wishlist</span>\n\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                        stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4\">\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                            d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\" />\n                                    </svg>\n                                </button>\n\n                                <div>\n                                    <img src=\"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-tab-a7-lite-gray-600x600.jpg\"\n                                        alt=\"\"\n                                        class=\"h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2\" />\n\n                                </div>\n                                <div class=\"relative border border-gray-100 bg-white p-6\">\n                                    <span\n                                        class=\"whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium\">\n                                        New\n                                    </span>\n\n                                    <h3 class=\"mt-4 card-product__title text-lg font-medium text-gray-900\">\n                                        Xiaomi\n                                        Redmi Note 12 Pro 5G Redmi\n                                    </h3>\n\n                                    <div class=\"flex items-center\">\n                                        <p class=\"mt-1.5 text-xl text-red-500 \">$14.99</p>\n                                        <p class=\"mt-1.5 text-sm text-gray-700 ms-2 line-through \">$14.99</p>\n                                    </div>\n\n                                    <!-- Rating here -->\n                                    <ul class=\"flex justify-center mt-2\">\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                    </ul>\n\n                                    <form class=\"mt-4\">\n                                        <button\n                                            class=\"block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105\">\n                                            Add to Cart\n                                        </button>\n                                    </form>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a href=\"detail-product.html\"\n                                class=\"h-full group relative block overflow-hidden border pt-2\">\n                                <button\n                                    class=\"absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75\">\n                                    <span class=\"sr-only\">Wishlist</span>\n\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                        stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4\">\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                            d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\" />\n                                    </svg>\n                                </button>\n\n                                <div>\n                                    <img src=\"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/d/fdeen_1_.jpg\"\n                                        alt=\"\"\n                                        class=\"h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2\" />\n\n                                </div>\n                                <div class=\"relative border border-gray-100 bg-white p-6\">\n                                    <span\n                                        class=\"whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium\">\n                                        New\n                                    </span>\n\n                                    <h3 class=\"mt-4 card-product__title text-lg font-medium text-gray-900\">\n                                        Samsung\n                                        Galaxy A73 128GB\n\n                                    </h3>\n\n                                    <div class=\"flex items-center\">\n                                        <p class=\"mt-1.5 text-xl text-red-500 \">$14.99</p>\n                                        <p class=\"mt-1.5 text-sm text-gray-700 ms-2 line-through \">$14.99</p>\n                                    </div>\n\n                                    <!-- Rating here -->\n                                    <ul class=\"flex justify-center mt-2\">\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                    </ul>\n\n                                    <form class=\"mt-4\">\n                                        <button\n                                            class=\"block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105\">\n                                            Add to Cart\n                                        </button>\n                                    </form>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a href=\"detail-product.html\"\n                                class=\"group relative block overflow-hidden border pt-2\">\n                                <button\n                                    class=\"absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75\">\n                                    <span class=\"sr-only\">Wishlist</span>\n\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                        stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4\">\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                            d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\" />\n                                    </svg>\n                                </button>\n\n                                <div>\n                                    <img src=\"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gtt7766.jpg\"\n                                        alt=\"\"\n                                        class=\"h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2\" />\n\n                                </div>\n                                <div class=\"relative border border-gray-100 bg-white p-6\">\n                                    <span\n                                        class=\"whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium\">\n                                        New\n                                    </span>\n\n                                    <h3 class=\"mt-4 card-product__title text-lg font-medium text-gray-900\">\n                                        iPhone 13\n                                        128GB | Ch\u00EDnh h\u00E3ng VN/A\n                                    </h3>\n\n                                    <div class=\"flex items-center\">\n                                        <p class=\"mt-1.5 text-xl text-red-500 \">$14.99</p>\n                                        <p class=\"mt-1.5 text-sm text-gray-700 ms-2 line-through \">$14.99</p>\n                                    </div>\n\n                                    <!-- Rating here -->\n                                    <ul class=\"flex justify-center mt-2\">\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                    </ul>\n\n                                    <form class=\"mt-4\">\n                                        <button\n                                            class=\"block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105\">\n                                            Add to Cart\n                                        </button>\n                                    </form>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a href=\"detail-product.html\"\n                                class=\"group relative block overflow-hidden border pt-2\">\n                                <button\n                                    class=\"absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75\">\n                                    <span class=\"sr-only\">Wishlist</span>\n\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                        stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4\">\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                            d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\" />\n                                    </svg>\n                                </button>\n\n                                <div>\n                                    <img src=\"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51_4.jpg\"\n                                        alt=\"\"\n                                        class=\"h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2\" />\n\n                                </div>\n                                <div class=\"relative border border-gray-100 bg-white p-6\">\n                                    <span\n                                        class=\"whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium\">\n                                        New\n                                    </span>\n\n                                    <h3 class=\"mt-4 card-product__title text-lg font-medium text-gray-900\">ASUS\n                                        ROG\n                                        Phone 6 12GB 256GB\n                                    </h3>\n\n                                    <div class=\"flex items-center\">\n                                        <p class=\"mt-1.5 text-xl text-red-500 \">$14.99</p>\n                                        <p class=\"mt-1.5 text-sm text-gray-700 ms-2 line-through \">$14.99</p>\n                                    </div>\n\n                                    <!-- Rating here -->\n                                    <ul class=\"flex justify-center mt-2\">\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                    </ul>\n\n                                    <form class=\"mt-4\">\n                                        <button\n                                            class=\"block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105\">\n                                            Add to Cart\n                                        </button>\n                                    </form>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a href=\"detail-product.html\"\n                                class=\"group relative block overflow-hidden border pt-2\">\n                                <button\n                                    class=\"absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75\">\n                                    <span class=\"sr-only\">Wishlist</span>\n\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                        stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4\">\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                            d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\" />\n                                    </svg>\n                                </button>\n\n                                <div>\n                                    <img src=\"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/d/fdeen_1_.jpg\"\n                                        alt=\"\"\n                                        class=\"h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2\" />\n\n                                </div>\n                                <div class=\"relative border border-gray-100 bg-white p-6\">\n                                    <span\n                                        class=\"whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium\">\n                                        New\n                                    </span>\n\n                                    <h3 class=\"mt-4 card-product__title text-lg font-medium text-gray-900\">\n                                        Samsung\n                                        Galaxy S22 Plus (8GB - 256GB)\n\n                                    </h3>\n\n                                    <div class=\"flex items-center\">\n                                        <p class=\"mt-1.5 text-xl text-red-500 \">$14.99</p>\n                                        <p class=\"mt-1.5 text-sm text-gray-700 ms-2 line-through \">$14.99</p>\n                                    </div>\n\n                                    <!-- Rating here -->\n                                    <ul class=\"flex justify-center mt-2\">\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                    </ul>\n\n                                    <form class=\"mt-4\">\n                                        <button\n                                            class=\"block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105\">\n                                            Add to Cart\n                                        </button>\n                                    </form>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a href=\"detail-product.html\"\n                                class=\"group relative block overflow-hidden border pt-2\">\n                                <button\n                                    class=\"absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75\">\n                                    <span class=\"sr-only\">Wishlist</span>\n\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"\n                                        stroke-width=\"1.5\" stroke=\"currentColor\" class=\"h-4 w-4\">\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                            d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\" />\n                                    </svg>\n                                </button>\n\n                                <div>\n                                    <img src=\"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gtt7766.jpg\"\n                                        alt=\"\"\n                                        class=\"h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2\" />\n\n                                </div>\n                                <div class=\"relative border border-gray-100 bg-white p-6\">\n                                    <span\n                                        class=\"whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium\">\n                                        New\n                                    </span>\n\n                                    <h3 class=\"mt-4 card-product__title text-lg font-medium text-gray-900\">\n                                        OnePlus\n                                        11 16GB 256GB\n                                    </h3>\n\n                                    <div class=\"flex items-center\">\n                                        <p class=\"mt-1.5 text-xl text-red-500 \">$14.99</p>\n                                        <p class=\"mt-1.5 text-sm text-gray-700 ms-2 line-through \">$14.99</p>\n                                    </div>\n\n                                    <!-- Rating here -->\n                                    <ul class=\"flex justify-center mt-2\">\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\n                                                fill=\"currentColor\" class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path fill-rule=\"evenodd\"\n                                                    d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\"\n                                                    clip-rule=\"evenodd\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                        <li>\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"\n                                                viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"\n                                                class=\"mr-1 h-5 w-5 text-warning\">\n                                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                                                    d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z\" />\n                                            </svg>\n                                        </li>\n                                    </ul>\n\n                                    <form class=\"mt-4\">\n                                        <button\n                                            class=\"block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105\">\n                                            Add to Cart\n                                        </button>\n                                    </form>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a class=\"block relative h-48 rounded overflow-hidden\">\n                                <img alt=\"ecommerce\" class=\"object-cover object-center w-full h-full block\"\n                                    src=\"https://dummyimage.com/421x261\">\n                            </a>\n                            <div class=\"mt-4\">\n                                <h3 class=\"text-gray-500 text-xs tracking-widest title-font mb-1\">CATEGORY</h3>\n                                <h2 class=\"text-gray-900 title-font text-lg font-medium\">Shooting Stars</h2>\n                                <p class=\"mt-1\">$21.15</p>\n                            </div>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a class=\"block relative h-48 rounded overflow-hidden\">\n                                <img alt=\"ecommerce\" class=\"object-cover object-center w-full h-full block\"\n                                    src=\"https://dummyimage.com/422x262\">\n                            </a>\n                            <div class=\"mt-4\">\n                                <h3 class=\"text-gray-500 text-xs tracking-widest title-font mb-1\">CATEGORY</h3>\n                                <h2 class=\"text-gray-900 title-font text-lg font-medium\">Neptune</h2>\n                                <p class=\"mt-1\">$12.00</p>\n                            </div>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a class=\"block relative h-48 rounded overflow-hidden\">\n                                <img alt=\"ecommerce\" class=\"object-cover object-center w-full h-full block\"\n                                    src=\"https://dummyimage.com/423x263\">\n                            </a>\n                            <div class=\"mt-4\">\n                                <h3 class=\"text-gray-500 text-xs tracking-widest title-font mb-1\">CATEGORY</h3>\n                                <h2 class=\"text-gray-900 title-font text-lg font-medium\">The 400 Blows</h2>\n                                <p class=\"mt-1\">$18.40</p>\n                            </div>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a class=\"block relative h-48 rounded overflow-hidden\">\n                                <img alt=\"ecommerce\" class=\"object-cover object-center w-full h-full block\"\n                                    src=\"https://dummyimage.com/424x264\">\n                            </a>\n                            <div class=\"mt-4\">\n                                <h3 class=\"text-gray-500 text-xs tracking-widest title-font mb-1\">CATEGORY</h3>\n                                <h2 class=\"text-gray-900 title-font text-lg font-medium\">The Catalyzer</h2>\n                                <p class=\"mt-1\">$16.00</p>\n                            </div>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a class=\"block relative h-48 rounded overflow-hidden\">\n                                <img alt=\"ecommerce\" class=\"object-cover object-center w-full h-full block\"\n                                    src=\"https://dummyimage.com/425x265\">\n                            </a>\n                            <div class=\"mt-4\">\n                                <h3 class=\"text-gray-500 text-xs tracking-widest title-font mb-1\">CATEGORY</h3>\n                                <h2 class=\"text-gray-900 title-font text-lg font-medium\">Shooting Stars</h2>\n                                <p class=\"mt-1\">$21.15</p>\n                            </div>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a class=\"block relative h-48 rounded overflow-hidden\">\n                                <img alt=\"ecommerce\" class=\"object-cover object-center w-full h-full block\"\n                                    src=\"https://dummyimage.com/427x267\">\n                            </a>\n                            <div class=\"mt-4\">\n                                <h3 class=\"text-gray-500 text-xs tracking-widest title-font mb-1\">CATEGORY</h3>\n                                <h2 class=\"text-gray-900 title-font text-lg font-medium\">Neptune</h2>\n                                <p class=\"mt-1\">$12.00</p>\n                            </div>\n                        </div>\n                        <div class=\"lg:w-1/3 md:w-1/2 p-4 w-full\">\n                            <a class=\"block relative h-48 rounded overflow-hidden\">\n                                <img alt=\"ecommerce\" class=\"object-cover object-center w-full h-full block\"\n                                    src=\"https://dummyimage.com/428x268\">\n                            </a>\n                            <div class=\"mt-4\">\n                                <h3 class=\"text-gray-500 text-xs tracking-widest title-font mb-1\">CATEGORY</h3>\n                                <h2 class=\"text-gray-900 title-font text-lg font-medium\">The 400 Blows</h2>\n                                <p class=\"mt-1\">$18.40</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <div id=\"pagination\">\n\n            </div>\n        </div>\n\n    </div>\n    </div>\n";
var Shop = /** @class */ (function (_super) {
    __extends(Shop, _super);
    function Shop() {
        var _this = _super.call(this, 'main') || this;
        _this.sortGlobalValue = '';
        _this.products = [];
        _this.showByCate = function (resultEl, _cateIds) { return __awaiter(_this, void 0, void 0, function () {
            var cateIdList, showResult, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cateIdList = _cateIds.split(',');
                        showResult = cateIdList.map(function (cateId) { return __awaiter(_this, void 0, void 0, function () {
                            var shopResponse, category, cateName;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, shopApi_1["default"].getCategoryById(cateId)];
                                    case 1:
                                        shopResponse = _a.sent();
                                        category = shopResponse.data.category;
                                        cateName = '';
                                        if (category) {
                                            cateName = category.name;
                                        }
                                        return [2 /*return*/, "\n          <i class=\"fa-solid fa-check\"></i> " + cateName + "\n          "];
                                }
                            });
                        }); });
                        _a = resultEl;
                        _b = "\n        Trong danh m\u1EE5c: ";
                        return [4 /*yield*/, Promise.all(showResult)];
                    case 1:
                        _a.innerHTML = _b + (_c.sent()).join(', ') + "\n        ";
                        resultEl.classList.remove('hidden');
                        return [2 /*return*/];
                }
            });
        }); };
        _this.hostEl.innerHTML = templateHTML;
        _this.sortBarEl = document.getElementById('sortBarEl');
        _this.prodListEl = document.getElementById('product-list'); // aldready been declare (remember to customize later!)
        _this.pagination = document.getElementById('pagination');
        _this.searchInputEl = document.getElementById('searchInput');
        _this.searchBtn = document.getElementById('search-btn');
        _this.cateListEl = document.getElementById('cate-list');
        _this.filterEl = document.getElementById('shop-content__filter-bar');
        _this.applyFilterBtn = document.getElementById('apply-filter-btn');
        _this.showResultByCateEl = document.querySelector('.show-result-text__by-cate');
        _this.showResultByRangeEl = document.querySelector('.show-result-text__by-range');
        _this.showResultBySortEl = document.querySelector('.show-result-text__by-sort');
        _this.keywordQueryEl = document.getElementById('keyword');
        _this.showResultBySearchEl = document.getElementById('show-result-text');
        _this.renderProdList();
        _this.renderCateList();
        _this.attach();
        return _this;
    }
    Shop.prototype.attach = function () {
        this.pagination.addEventListener('click', this.paginationHandler);
        this.sortBarEl.addEventListener('click', this.sortHandler);
        this.searchBtn.addEventListener('click', this.searchHandler);
        this.cateListEl.addEventListener('click', this.cateFilterHandler);
        this.applyFilterBtn.addEventListener('click', this.priceFilterHanlder);
    };
    Shop.prototype.sortHandler = function (e) {
        var sortBtn = e.target;
        console.log('sortBtn', sortBtn);
        if (sortBtn && sortBtn.nodeName === 'A') {
            var sortVal = sortBtn.dataset.sort;
            switch (sortVal) {
                case 'pricedesc':
                    helper_1["default"].setParams('_sort', 'oldPrice');
                    helper_1["default"].setParams('_order', 'desc');
                    this.sortGlobalValue = 'Price descrease';
                    break;
                case 'priceasc':
                    helper_1["default"].setParams('_sort', 'oldPrice');
                    helper_1["default"].setParams('_order', 'asc');
                    this.sortGlobalValue = 'Price ascending';
                    break;
                case 'oldest':
                    helper_1["default"].setParams('_sort', 'createdAt');
                    helper_1["default"].setParams('_order', 'asc');
                    this.sortGlobalValue = 'Oldest products';
                    break;
                case 'latest':
                    helper_1["default"].setParams('_sort', 'createdAt');
                    helper_1["default"].setParams('_order', 'desc');
                    this.sortGlobalValue = 'Latest products';
                    break;
                default:
                    break;
            }
            console.log(this.sortGlobalValue);
            // Generate Product list here!!!
            this.renderProdList();
        }
    };
    Shop.prototype.searchHandler = function () {
        this.searchInputEl = document.getElementById('searchInput');
        console.log('click search', this.searchInputEl.value);
        var searchVal = this.searchInputEl.value;
        helper_1["default"].setParams('_q', searchVal);
        // Update UI and pagination
        // await renderProdList();
        // Reset Input:
        this.searchInputEl.value = '';
        this.renderProdList();
    };
    Shop.prototype.priceFilterHanlder = function () {
        var priceFromEl = document.getElementById('price-from');
        var priceToEl = document.getElementById('price-to');
        var _min = priceFromEl.value;
        var _max = priceToEl.value;
        helper_1["default"].setParams('_min', _min);
        helper_1["default"].setParams('_max', _max);
        this.renderProdList();
    };
    Shop.prototype.paginationHandler = function (e) {
        console.log(e.target);
        e.preventDefault();
        console.log('paginationHandler');
        var paginationBtn = e.target;
        var page = paginationBtn.getAttribute('href');
        if (page) {
            var pageNum = page.slice(-1);
            helper_1["default"].setParams('_page', pageNum);
            this.renderProdList();
        }
    };
    Shop.prototype.renderProdList = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var _q, _limit, _page, _sort, _order, _min, _max, _cateIds, query, sort, order, sortValueText;
            return __generator(this, function (_a) {
                _q = helper_1["default"].getParams('_q');
                _limit = +(helper_1["default"].getParams('_limit') || 12);
                _page = +(helper_1["default"].getParams('_page') || 1);
                _sort = helper_1["default"].getParams('_sort');
                _order = helper_1["default"].getParams('_order');
                _min = helper_1["default"].getParams('_min');
                _max = helper_1["default"].getParams('_max');
                _cateIds = helper_1["default"].getParams('_cateIds');
                // const showResultTextEl = document.getElementById("show-result-text");
                // const keyword = document.getElementById("keyword");
                try {
                    query = {
                        _limit: _limit,
                        _page: _page
                    };
                    if (_sort && _order) {
                        query._sort = _sort;
                        query._order = _order;
                        sort = helper_1["default"].getParams('_sort');
                        order = helper_1["default"].getParams('_order');
                        sortValueText = '';
                        if (sort === 'createdAt') {
                            if (order === 'asc') {
                                sortValueText = 'Oldest products';
                            }
                            else if (order === 'desc') {
                                sortValueText = 'Latest products';
                            }
                        }
                        else if (sort === 'oldPrice') {
                            if (order === 'asc') {
                                sortValueText = 'Price ascending';
                            }
                            else if (order === 'desc') {
                                sortValueText = 'Price descending';
                            }
                        }
                        this.showBySort(this.showResultBySortEl, sortValueText);
                    }
                    if (_q) {
                        query._q = _q;
                        this.showResultBySearchEl.classList.remove('hidden');
                        this.keywordQueryEl.innerText = _q;
                    }
                    else {
                        this.keywordQueryEl.innerText = '';
                    }
                    if (_min) {
                        query._min = +_min;
                        // this.showByRange(this.showResultByRangeEl, +_min, +_max || 0);
                    }
                    if (_max) {
                        query._max = +_max;
                        // this.showByRange(this.showResultByRangeEl, _min || 0, +_max);
                    }
                    if (_cateIds) {
                        query._cateIds = _cateIds;
                        this.showByCate(this.showResultByCateEl, _cateIds);
                    }
                    else {
                        // Reset show cate
                        this.showResultByCateEl.innerHTML = '';
                    }
                    console.log('query: ', query);
                    this.prodListInstance = new ProductList_1["default"](query);
                    this.prodListInstance.load();
                    console.log(this.sortGlobalValue);
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        }); })();
    };
    Shop.prototype.renderCateList = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var response, categories, viewAllEl, resMinPrice, resMaxPrice, minFieldValue, maxFieldValue, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, categoriesApi_1["default"].getAll()];
                    case 1:
                        response = _a.sent();
                        categories = response.data.categories;
                        viewAllEl = " \n            <a href=\"#\"\n                class=\"flex items-center text-sm font-medium text-primary-color dark:text-secondary-color hover:underline\">\n                View all\n             </a>";
                        categories.forEach(function (cate) {
                            var _id = cate._id, name = cate.name;
                            var cateItem = "\n              <div data-id=" + _id + " class=\"flex items-center cate-item\">\n                <input id=\"" + _id + "\" type=\"checkbox\" value=\"\"\n                    class=\"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:bg-slate-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\" />\n          \n                <label for=\"" + _id + "\" class=\"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300\">\n                   " + name + "\n                </label>\n              </div>\n            ";
                            _this.cateListEl.insertAdjacentHTML('beforeend', cateItem);
                        });
                        this.cateListEl.insertAdjacentHTML('beforeend', viewAllEl);
                        return [4 /*yield*/, shopApi_1["default"].getMinPrice()];
                    case 2:
                        resMinPrice = _a.sent();
                        return [4 /*yield*/, shopApi_1["default"].getMaxPrice()];
                    case 3:
                        resMaxPrice = _a.sent();
                        minFieldValue = resMinPrice.data.result[0].minFieldValue;
                        maxFieldValue = resMaxPrice.data.result[0].maxFieldValue;
                        helper_1["default"].inputValue('price-from', minFieldValue);
                        helper_1["default"].inputValue('price-to', maxFieldValue);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); })();
    };
    Shop.prototype.cateFilterHandler = function (e) {
        var _a;
        var checkBoxInput = e.target;
        if (checkBoxInput && checkBoxInput.nodeName === 'INPUT') {
            var isChecked = checkBoxInput.checked;
            var cateId_1 = checkBoxInput.id;
            var cateIds = (_a = helper_1["default"].getParams('_cateIds')) === null || _a === void 0 ? void 0 : _a.split(',');
            console.log(cateIds);
            var cateIdsQuery = void 0;
            if (cateIds && cateIds.length > 0) {
                if (!isChecked) {
                    cateIdsQuery = helper_1["default"].getParams('_cateIds')
                        .split(',')
                        .filter(function (ci) { return ci !== cateId_1; });
                }
                else {
                    cateIdsQuery = __spreadArrays(helper_1["default"].getParams('_cateIds').split(','), [cateId_1]).join(',');
                }
                helper_1["default"].setParams('_cateIds', cateIdsQuery);
            }
            else {
                helper_1["default"].setParams('_cateIds', cateId_1);
                cateIdsQuery = cateId_1;
            }
            // Render products here
            this.renderProdList();
        }
    };
    Shop.prototype.showByRange = function (resultEl, _min, _max) {
        if (_min === void 0) { _min = 0; }
        if (_max === void 0) { _max = 1140; }
        resultEl.innerHTML = "Theo gi\u00E1 t\u1EEB: $" + _min + " -> $" + _max;
        resultEl.classList.remove('hidden');
    };
    Shop.prototype.showBySort = function (resultEl, sortValue) {
        resultEl.innerHTML = "\n        L\u1ECDc s\u1EA3n ph\u1EA9m: <i class=\"fa-solid fa-filter-circle-xmark\"></i> " + sortValue + "\n        ";
        resultEl.classList.remove('hidden');
    };
    __decorate([
        autobind_1.autobind
    ], Shop.prototype, "sortHandler");
    __decorate([
        autobind_1.autobind
    ], Shop.prototype, "searchHandler");
    __decorate([
        autobind_1.autobind
    ], Shop.prototype, "priceFilterHanlder");
    __decorate([
        autobind_1.autobind
    ], Shop.prototype, "paginationHandler");
    __decorate([
        autobind_1.autobind
    ], Shop.prototype, "cateFilterHandler");
    return Shop;
}(base_component_1["default"]));
exports["default"] = Shop;
