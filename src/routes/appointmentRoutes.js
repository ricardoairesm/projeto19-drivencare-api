import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { appointmentSchema } from "../schemas/Appointment.js";

const appointmentRoutes = Router();

appointmentRoutes.post("/",auth,validateSchema(appointmentSchema),)