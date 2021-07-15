import { Router } from "express";
import { register } from "../../controllers/organization/createOrganization";
import { getOrganization } from "../../controllers/organization/getOrgainzation";
import { getOrganizations } from "../../controllers/organization/getOrganizations";
import { updateOrganization } from "../../controllers/organization/updateOrganization";

const router: Router = Router();

router.post("/register", register);
router.put("/:id", updateOrganization);
// router.delete("/:id", deleteOrganization);
router.get("/:id", getOrganization);
router.get("/", getOrganizations);

export default router;
