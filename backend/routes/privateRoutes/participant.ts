import { Router } from "express";
import { updateParticipant } from "../../controllers/participant/updateParticipant";
import { deleteParticipant } from "../../controllers/participant/deleteParticipant";
import { getParticipant } from "../../controllers/participant/getParticipant";
import { getParticipants } from "../../controllers/participant/getParticipants";
import { participate } from "../../controllers/participant/participate";
import { unParticipate } from "../../controllers/participant/unParticipate";
import { authJwt } from "../../middlewares/authJwt";

const router: Router = Router();

router.put("/:id", authJwt, updateParticipant);
router.delete("/:id", authJwt, deleteParticipant);
router.get("/:id", authJwt, getParticipant);
router.get("/", authJwt, getParticipants);
router.put("/participate", authJwt, participate);
router.put("/un_participate", authJwt, unParticipate);

export default router;
