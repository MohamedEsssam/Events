import { Router } from "express";
import participant from "./participant";

const router = Router();

router.use("/participant", participant);

export default router;
