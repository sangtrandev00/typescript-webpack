"use strict";
exports.__esModule = true;
var axiosClient_1 = require("./axiosClient");
var token = localStorage.adminToken;
var OrdersApi = /** @class */ (function () {
    function OrdersApi() {
    }
    OrdersApi.getAll = function (params) {
        var url = "/admin/orders";
        return axiosClient_1["default"].get(url, {
            params: params,
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    OrdersApi.getById = function (orderId) {
        var url = "/admin/orders/" + orderId;
        return axiosClient_1["default"].get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    OrdersApi.add = function (data) {
        var url = "/admin/orders";
        return axiosClient_1["default"].post(url, data, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    OrdersApi.update = function (data, orderId) {
        var url = "/admin/orders/" + orderId;
        return axiosClient_1["default"].put(url, data, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    OrdersApi.updateOrderStatus = function (data, orderId) {
        var url = "/admin/orders/" + orderId;
        return axiosClient_1["default"].patch(url, data, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    OrdersApi["delete"] = function (orderId) {
        var url = "/admin/orders/" + orderId;
        return axiosClient_1["default"]["delete"](url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    return OrdersApi;
}());
exports["default"] = OrdersApi;
