import { Router } from "express";
import { createEvent } from "../../controllers/event/createEvent";
import { deleteEvent } from "../../controllers/event/deleteEvent";
import { getEvent } from "../../controllers/event/getEvent";
import { getEvents } from "../../controllers/event/getEvents";
import { updateEvent } from "../../controllers/event/updateEvent";
import { authJwt } from "../../middlewares/authJwt";

const router: Router = Router();

router.post("/", createEvent);
router.put("/:id", authJwt, updateEvent);
router.delete("/:id", authJwt, deleteEvent);
router.get("/:id", authJwt, getEvent);
router.get("/", authJwt, getEvents);

export default router;
