"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error_ = /** @class */ (function () {
    function Error_() {
        this.type = "";
        this.description = "";
        this.httpCode = 0;
        this.timeStamp = new Date();
    }
    Error_.prototype.getError = function () {
        return {
            type: this.type,
            description: this.description,
            httpCode: this.httpCode,
            timeStamp: this.timeStamp,
        };
    };
    Error_.prototype.setError = function (type, description, httpCode, timeStamp) {
        this.type = type;
        this.description = description;
        this.httpCode = httpCode;
        this.timeStamp = timeStamp;
    };
    return Error_;
}());
exports.default = Error_;
