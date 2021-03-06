"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var updateParticipant_1 = require("../../controllers/participant/updateParticipant");
var deleteParticipant_1 = require("../../controllers/participant/deleteParticipant");
var getParticipant_1 = require("../../controllers/participant/getParticipant");
var getParticipants_1 = require("../../controllers/participant/getParticipants");
var participate_1 = require("../../controllers/participant/participate");
var unParticipate_1 = require("../../controllers/participant/unParticipate");
var authJwt_1 = require("../../middlewares/authJwt");
var router = express_1.Router();
router.put("/participate", authJwt_1.authJwt, participate_1.participate);
router.put("/un_participate", authJwt_1.authJwt, unParticipate_1.unParticipate);
router.put("/:id", authJwt_1.authJwt, updateParticipant_1.updateParticipant);
router.delete("/:id", authJwt_1.authJwt, deleteParticipant_1.deleteParticipant);
router.get("/:id", authJwt_1.authJwt, getParticipant_1.getParticipant);
router.get("/", authJwt_1.authJwt, getParticipants_1.getParticipants);
exports.default = router;
