"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var participant_1 = __importDefault(require("./participant"));
var organization_1 = __importDefault(require("./organization"));
var event_1 = __importDefault(require("./event"));
var media_1 = __importDefault(require("./media"));
var router = express_1.Router();
router.use("/participant", participant_1.default);
router.use("/organization", organization_1.default);
router.use("/event", event_1.default);
router.use("/media", media_1.default);
exports.default = router;
