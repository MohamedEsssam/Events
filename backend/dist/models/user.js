"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var lodash_1 = require("lodash");
var options = {
    discriminatorKey: "kind",
    toObject: { virtuals: true },
};
var userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: function (v) {
            return (v &&
                /^[\s]*[a-zA-z]+[0-9]*[@]{1}[a-zA-z]+[.]{1}[a-zA-Z]+[\s]*$/.test(v));
        },
        message: "Enter a valid email",
    },
    password: {
        type: String,
        minlength: 3,
        required: true,
    },
    verified: {
        type: Boolean,
        required: true,
        default: false,
    },
}, options);
userSchema.methods.toJSON = function () {
    var obj = this.toObject();
    return lodash_1.pick(obj, ["_id", "email", "verified"]);
};
var User = mongoose_1.default.model("User", userSchema);
exports.default = User;
