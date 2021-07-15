import { Router } from "express";
import { register } from "../../controllers/organization/createOrganization";
import { updateOrganization } from "../../controllers/organization/updateOrganization";

const router: Router = Router();

router.post("/register", register);
router.put("/:id", updateOrganization);
// router.delete("/:id", deleteOrganization);
// router.get("/:id", getOrganization);
// router.get("/", getOrganizations);

export default router;
