"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var uploadImage_1 = require("../../middlewares/uploadImage");
var authJwt_1 = require("../../middlewares/authJwt");
var uploadImage_2 = require("../../controllers/media/image/uploadImage");
var router = express_1.Router();
router.post("/", uploadImage_1.uploadImage, authJwt_1.authJwt, uploadImage_2.uploadEventImage);
exports.default = router;
