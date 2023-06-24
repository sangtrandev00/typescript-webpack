"use strict";
exports.__esModule = true;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingCart.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    ShoppingCart.prototype.getItemCount = function () {
        return this.items.length;
    };
    ShoppingCart.prototype.render = function () {
        var itemCount = this.getItemCount();
        console.log("You have " + itemCount + " items in your cart:");
        for (var i = 0; i < itemCount; i++) {
            console.log(i + 1 + ". " + this.items[i]);
        }
    };
    return ShoppingCart;
}());
exports["default"] = ShoppingCart;
var myCart = new ShoppingCart();
myCart.addItem("Shirt");
myCart.addItem("Pants");
myCart.render();
