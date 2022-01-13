"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (entries) {
    var obj = {};
    entries.forEach(function (KeyValue) {
        var _a = KeyValue, key = _a[0], value = _a[1];
        obj["" + key] = value;
    });
    return obj;
});
