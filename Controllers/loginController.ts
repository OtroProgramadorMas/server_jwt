// deno-lint-ignore-file
import { generarToken } from "../Helpers/jwt.ts";

export const iniciarSesion = async (ctx: any) => {
  const { response, request } = ctx;
  const { username, password } = await request.body.json();

  if ( username == "julian@gonzalez.com" && password == "123456") {
    const token = await generarToken("julian@gonzalez.com");

    console.log(token)

    response.status = 200;
    response.body = {
        token: token
    }
  } else {
    response.status = 401;
    response.body = {
        message: "Credenciales incorrectas"
    }
  }

//   console.log(username, password);
//   response.status = 200;
//   response.body = {
//     message: "hola desde inicar sesion",
//   };
};
