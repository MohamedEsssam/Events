import { Router } from "express";
import { register } from "../../controllers/organization/createOrganization";

const router: Router = Router();

router.post("/register", register);

export default router;
