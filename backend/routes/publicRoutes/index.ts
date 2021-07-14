import { Router } from "express";
import user from "./user";
import participant from "./participant";

const router = Router();

router.use("/user", user);
router.use("/participant", participant);

export default router;
