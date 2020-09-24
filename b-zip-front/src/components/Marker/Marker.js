"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./style.css");
var Marker = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null, "this is marker!"),
        react_1.default.createElement("div", { className: "container" }, "css style test"),
        react_1.default.createElement("div", { className: "img-container" }, "css image import test"),
        react_1.default.createElement("div", { className: "svg-container" }, "svg img import test")));
};
exports.default = Marker;
