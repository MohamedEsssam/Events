import { Router } from "express";
import { register } from "../../controllers/participant/createParticipant";
import { updateParticipant } from "../../controllers/participant/updateParticipant";
import { getParticipant } from "../../controllers/participant/getParticipant";
import { getParticipants } from "../../controllers/participant/getParticipants";

const router: Router = Router();

router.post("/register", register);
router.put("/:id", updateParticipant);
router.get("/:id", getParticipant);
router.get("/", getParticipants);

export default router;
