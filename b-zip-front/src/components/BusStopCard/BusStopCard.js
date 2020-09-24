"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./style.css");
var BusStopCardProps = function (_a) {
    var id = _a.id, busStopName = _a.busStopName, busStopNumber = _a.busStopNumber, direction = _a.direction, walkingTime = _a.walkingTime;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", null, id),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", null, busStopName),
            react_1.default.createElement("span", null,
                busStopNumber,
                " | ",
                direction)),
        react_1.default.createElement("span", null,
            walkingTime,
            "\uBD84")));
};
var BusStopCard = function () {
    return (react_1.default.createElement(BusStopCardProps, { id: 1, busStopName: "\uC11C\uC6B8\uC2A4\uD018\uC5B4\uC55E", busStopNumber: "02282", direction: "\uB0A8\uB300\uBB38\uC2DC\uC7A5.\uD68C\uD604\uC5ED \uBC29\uD5A5", walkingTime: 1 }));
};
exports.default = BusStopCard;
