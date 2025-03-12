import { Application, oakCors } from "./Dependencies/dependencias.ts";
import { RouterLogin } from "./Routes/loginUsers.ts";
import RouterUser from "./Routes/routerUsers.ts";

const app = new Application();

app.use(oakCors());

const Routes = [RouterLogin, RouterUser];

Routes.forEach((router) => {
    app.use(router.routes());
    app.use(router.allowedMethods());
});

const puerto = 8000;
console.log("servidor corriendo por el puerto " + puerto)
app.listen({port: puerto})