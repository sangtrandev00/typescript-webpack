"use strict";
exports.__esModule = true;
var axiosClient_1 = require("./axiosClient");
var token = localStorage.adminToken;
console.log(token);
var UsersApi = /** @class */ (function () {
    function UsersApi() {
    }
    UsersApi.getAll = function () {
        var url = "/admin/users";
        return axiosClient_1["default"].get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    UsersApi.getById = function (id) {
        var url = "/admin/users/" + id;
        return axiosClient_1["default"].get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    UsersApi.add = function (data) {
        var url = "/admin/user";
        return axiosClient_1["default"].post(url, data, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "multipart/form-data"
            }
        });
    };
    UsersApi.update = function (data, userId) {
        var url = "/admin/user/" + userId;
        return axiosClient_1["default"].put(url, data, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "multipart/form-data"
            }
        });
    };
    UsersApi["delete"] = function (id) {
        var url = "/admin/users/" + id;
        return axiosClient_1["default"]["delete"](url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
    };
    return UsersApi;
}());
exports["default"] = UsersApi;
