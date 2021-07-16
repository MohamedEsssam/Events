import { Router } from "express";
import { login } from "../../controllers/user/login";
import { verify } from "../../controllers/user/verify";

const router: Router = Router();

router.post("/login", login);
router.get("/verify", verify);

export default router;
