import { Router } from "express";
import { register } from "../../controllers/participant/createParticipant";

const router: Router = Router();

router.post("/register", register);

export default router;
