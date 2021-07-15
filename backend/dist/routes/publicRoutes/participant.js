"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var createParticipant_1 = require("../../controllers/participant/createParticipant");
var router = express_1.Router();
router.post("/register", createParticipant_1.register);
exports.default = router;
