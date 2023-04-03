import { Router } from "express";
import pacientControllers from "../controllers/pacientControllers.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { pacientSchema } from "../schemas/Pacient.js";

const pacientRoutes = Router();

pacientRoutes.post('/signup', validateSchema(pacientSchema), pacientControllers.create);
pacientRoutes.post('/signin', pacientControllers.signin);

export default pacientRoutes