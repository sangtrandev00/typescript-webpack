"use strict";
exports.__esModule = true;
var axiosClient_1 = require("./axiosClient");
var token = localStorage.adminToken;
// type pagination = {
//   _limit: number;
//   _page: number;
//   _totalRows: number;
// }
// type GetProductsResponse  = {
//   message: string;
//   pagination: pagination;
//   products: Productable[];
// }
var ProductsApi = /** @class */ (function () {
    function ProductsApi() {
    }
    // {_limit: 12}
    ProductsApi.getAll = function (params) {
        var url = "/admin/products";
        return axiosClient_1["default"].get(url, {
            params: params,
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    ProductsApi.getById = function (id) {
        var url = "/admin/products/" + id;
        return axiosClient_1["default"].get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    ProductsApi.add = function (data) {
        var url = "/admin/product";
        return axiosClient_1["default"].post(url, data, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "multipart/form-data"
            }
        });
    };
    ProductsApi.update = function (data, productId) {
        var url = "/admin/product/" + productId;
        return axiosClient_1["default"].put(url, data, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "multipart/form-data"
            }
        });
    };
    ProductsApi["delete"] = function (id) {
        var url = "/admin/products/" + id;
        return axiosClient_1["default"]["delete"](url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    return ProductsApi;
}());
exports["default"] = ProductsApi;
