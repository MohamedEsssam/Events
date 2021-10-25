import { Router } from "express";
import { uploadImage } from "../../middlewares/uploadImage";
import { authJwt } from "../../middlewares/authJwt";
import { uploadEventImage } from "../../controllers/media/image/uploadImage";

const router: Router = Router();

router.post("/", uploadImage, authJwt, uploadEventImage);

export default router;
