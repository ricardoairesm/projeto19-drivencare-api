import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { doctorSchema } from "../schemas/Doctor.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const doctorRoutes = Router();

doctorRoutes.post('/signup', validateSchema(doctorSchema), doctorControllers.create);
doctorRoutes.post('/signin', doctorControllers.signin);
doctorRoutes.get("/:specialty",authMiddleware.pacientAuthValidation,)

export default doctorRoutes