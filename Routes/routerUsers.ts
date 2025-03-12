import { Router } from "../Dependencies/dependencias.ts";
import {
  deleteUser,
  getUser,
  postUser,
  putUser,
} from "../Controllers/userController.ts";
import { authMiddleware } from "../Middlewares/authMiddleware.ts";

const RouterUser = new Router();

RouterUser.get("/usuarios", authMiddleware, getUser);
RouterUser.post("/usuarios", authMiddleware, postUser);
RouterUser.put("/usuarios:id", authMiddleware, putUser);
RouterUser.delete("/usuarios/id", authMiddleware, deleteUser);

export default RouterUser;
