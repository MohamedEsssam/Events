"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var updateOrganization_1 = require("../../controllers/organization/updateOrganization");
var deleteOrganization_1 = require("../../controllers/organization/deleteOrganization");
var getOrgainzation_1 = require("../../controllers/organization/getOrgainzation");
var getOrganizations_1 = require("../../controllers/organization/getOrganizations");
var authJwt_1 = require("../../middlewares/authJwt");
var router = express_1.Router();
router.put("/:id", authJwt_1.authJwt, updateOrganization_1.updateOrganization);
router.delete("/:id", authJwt_1.authJwt, deleteOrganization_1.deleteOrganization);
router.get("/:id", authJwt_1.authJwt, getOrgainzation_1.getOrganization);
router.get("/", authJwt_1.authJwt, getOrganizations_1.getOrganizations);
exports.default = router;
