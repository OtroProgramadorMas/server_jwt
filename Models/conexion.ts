import { Client } from "../Dependencies/dependencias.ts";

export const Conexion = await new Client().connect({
    hostname: "localhost",
    username: "root",
    password: "",
    db: "vehiculosnormales",
});
