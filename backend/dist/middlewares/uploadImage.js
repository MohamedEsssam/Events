"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
var path = require("path").resolve(__dirname, "../public");
var fs = require("fs");
var uploadImage = function (req, res, next) {
    var image = req.body.image;
    var uuid = req.body.uuid;
    fs.writeFileSync(path + ("/eventImage-" + uuid), image, "base64", function (err) {
        if (err)
            throw err;
    });
    next();
};
exports.uploadImage = uploadImage;
