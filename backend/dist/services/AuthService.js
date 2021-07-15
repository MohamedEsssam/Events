"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var pick = require("lodash/pick");
var config = require("config");
var AuthServices = /** @class */ (function () {
    function AuthServices() {
    }
    AuthServices.prototype.generateToken = function (user) {
        var payload = __assign({}, pick(user, ["_id", "email"]));
        var token = jwt.sign(payload, config.get("authSecret"));
        return token;
    };
    return AuthServices;
}());
module.exports = AuthServices;
