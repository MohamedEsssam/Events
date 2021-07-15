import { Router } from "express";
import { createEvent } from "../../controllers/event/createEvent";
import { deleteEvent } from "../../controllers/event/deleteEvent";
import { getEvent } from "../../controllers/event/getEvent";
import { getEvents } from "../../controllers/event/getEvents";
import { updateEvent } from "../../controllers/event/updateEvent";

const router: Router = Router();

router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.get("/:id", getEvent);
router.get("/", getEvents);

export default router;
