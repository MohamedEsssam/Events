import { Router } from "express";
import participant from "./participant";
import organization from "./organization";
import event from "./event";

const router = Router();

router.use("/participant", participant);
router.use("/organization", organization);
router.use("/event", event);

export default router;
