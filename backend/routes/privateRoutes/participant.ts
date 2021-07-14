import { Router } from "express";
import { participate } from "../../controllers/participant/participate";
import { unParticipate } from "../../controllers/participant/unParticipate";

const router: Router = Router();

router.put("/participate", participate);
router.put("/un_participate", unParticipate);

export default router;
