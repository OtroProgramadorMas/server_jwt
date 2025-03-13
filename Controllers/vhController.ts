import { insertarVehiculo, listarVehiculos, actualizarVehiculo, eliminarVehiculo } from "../Models/vhModels.ts";

// Obtener todos los vehículos
export const getVehiculos = async (ctx: any) => {
    const result = await listarVehiculos();
    ctx.response.status = 200;
    ctx.response.body = {
        success: true,
        data: result,
    };
};