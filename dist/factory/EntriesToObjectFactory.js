"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (entries) {
    var obj = {};
    entries.forEach(function (KeyValue) {
        var key = KeyValue[0], value = KeyValue[1];
        obj["" + key] = value;
    });
    return obj;
});
