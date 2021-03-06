"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var createEvent_1 = require("../../controllers/event/createEvent");
var deleteEvent_1 = require("../../controllers/event/deleteEvent");
var getEvent_1 = require("../../controllers/event/getEvent");
var getEvents_1 = require("../../controllers/event/getEvents");
var updateEvent_1 = require("../../controllers/event/updateEvent");
var authJwt_1 = require("../../middlewares/authJwt");
var router = express_1.Router();
router.post("/", createEvent_1.createEvent);
router.put("/:id", authJwt_1.authJwt, updateEvent_1.updateEvent);
router.delete("/:id", authJwt_1.authJwt, deleteEvent_1.deleteEvent);
router.get("/:id", authJwt_1.authJwt, getEvent_1.getEvent);
router.get("/", authJwt_1.authJwt, getEvents_1.getEvents);
exports.default = router;
