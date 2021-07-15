import { Router } from "express";
import { updateOrganization } from "../../controllers/organization/updateOrganization";
import { deleteOrganization } from "../../controllers/organization/deleteOrganization";
import { getOrganization } from "../../controllers/organization/getOrgainzation";
import { getOrganizations } from "../../controllers/organization/getOrganizations";

const router: Router = Router();

router.put("/:id", updateOrganization);
router.delete("/:id", deleteOrganization);
router.get("/:id", getOrganization);
router.get("/", getOrganizations);

export default router;
