"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var participate_1 = require("../../controllers/participant/participate");
var unParticipate_1 = require("../../controllers/participant/unParticipate");
var router = express_1.Router();
router.put("/participate", participate_1.participate);
router.put("/un_participate", unParticipate_1.unParticipate);
exports.default = router;
