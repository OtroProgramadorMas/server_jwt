import { Router } from "../Dependencies/dependencias.ts";
import { getVehiculos } from "../Controllers/vhController.ts";
import { authMiddleware } from "../Middlewares/authMiddleware.ts";

const RouterVh = new Router();

RouterVh.get("/vehiculos", authMiddleware, getVehiculos);

export default RouterVh;