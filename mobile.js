"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.cameraNumber = cameraNumber;
        this.is5G = is5G;
        this.price = price;
    }
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setIs5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.charactsMobiles = function () {
        console.log("\nThe characteristics of mobile " + this.name + " are: \n  \u25D8 Name: " + this.name + " \n  \u25D8 Model: " + this.model + " \n  \u25D8 Trademark: " + this.trademark + " \n  \u25D8 SD Size(GB): " + this.sdSize + " \n  \u25D8 Color: " + this.color + " \n  \u25D8 Is5G: " + this.is5G + " \n  \u25D8 Number of cameras: " + this.cameraNumber + "\n");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
