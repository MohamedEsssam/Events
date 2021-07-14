"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var login_1 = require("../../controllers/user/login");
var router = express_1.Router();
router.post("/login", login_1.login);
exports.default = router;
