import { Router } from "express";
import { updateParticipant } from "../../controllers/participant/updateParticipant";
import { deleteParticipant } from "../../controllers/participant/deleteParticipant";
import { getParticipant } from "../../controllers/participant/getParticipant";
import { getParticipants } from "../../controllers/participant/getParticipants";
import { participate } from "../../controllers/participant/participate";
import { unParticipate } from "../../controllers/participant/unParticipate";

const router: Router = Router();

router.put("/:id", updateParticipant);
router.delete("/:id", deleteParticipant);
router.get("/:id", getParticipant);
router.get("/", getParticipants);
router.put("/participate", participate);
router.put("/un_participate", unParticipate);

export default router;
