"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var createOrganization_1 = require("../../controllers/organization/createOrganization");
var router = express_1.Router();
router.post("/register", createOrganization_1.register);
exports.default = router;
