import { Application, oakCors } from "./Dependencies/dependencias.ts";
import { RouterLogin } from "./Routes/loginUsers.ts";
import RouterUser from "./Routes/routerUsers.ts";
import RouterVh from "./Routes/vhRoutes.ts";

import { logData } from "./Middlewares/logData.ts";

const app = new Application();

app.use(oakCors());
app.use(logData);

const Routes = [RouterLogin, RouterUser, RouterVh];

Routes.forEach((router) => {
    app.use(router.routes());
    app.use(router.allowedMethods());
});

const puerto = 8001;
console.log("servidor corriendo por el puerto " + puerto)
app.listen({port: puerto})