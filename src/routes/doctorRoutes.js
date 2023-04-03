import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";

const doctorRoutes = Router();

doctorRoutes.post('/', doctorControllers.create)

export default doctorRoutes