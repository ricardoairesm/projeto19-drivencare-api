import { Router } from "express";
import doctorRoutes from "./doctorRoutes";

const routes = Router();

routes.use("/doctors",doctorRoutes)

export default routes