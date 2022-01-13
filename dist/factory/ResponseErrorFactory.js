"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseErrorFactory = /** @class */ (function () {
    function ResponseErrorFactory(message, status) {
        this.message = message;
        this.status = status;
    }
    return ResponseErrorFactory;
}());
exports.default = ResponseErrorFactory;
