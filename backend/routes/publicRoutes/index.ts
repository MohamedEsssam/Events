import { Router } from "express";
import user from "./user";
import participant from "./participant";
import organization from "./organization";

const router = Router();

router.use("/user", user);
router.use("/participant", participant);
router.use("/organization", organization);

export default router;
