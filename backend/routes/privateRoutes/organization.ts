import { Router } from "express";
import { updateOrganization } from "../../controllers/organization/updateOrganization";
import { deleteOrganization } from "../../controllers/organization/deleteOrganization";
import { getOrganization } from "../../controllers/organization/getOrgainzation";
import { getOrganizations } from "../../controllers/organization/getOrganizations";
import { authJwt } from "../../middlewares/authJwt";

const router: Router = Router();

router.put("/:id", authJwt, updateOrganization);
router.delete("/:id", authJwt, deleteOrganization);
router.get("/:id", authJwt, getOrganization);
router.get("/", authJwt, getOrganizations);

export default router;
