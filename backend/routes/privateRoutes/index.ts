import { Router } from "express";
import participant from "./participant";
import organization from "./organization";
import event from "./event";
import media from "./media";

const router = Router();

router.use("/participant", participant);
router.use("/organization", organization);
router.use("/event", event);
router.use("/media", media);

export default router;
