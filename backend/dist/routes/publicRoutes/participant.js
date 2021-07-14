"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var createParticipant_1 = require("../../controllers/participant/createParticipant");
var getParticipant_1 = require("../../controllers/participant/getParticipant");
var getParticipants_1 = require("../../controllers/participant/getParticipants");
var router = express_1.Router();
router.post("/register", createParticipant_1.register);
router.get("/:id", getParticipant_1.getParticipant);
router.get("/", getParticipants_1.getParticipants);
exports.default = router;
