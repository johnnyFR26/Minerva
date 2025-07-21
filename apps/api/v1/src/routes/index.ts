import { FastifyInstance } from "fastify";
import UserRoutes from "./user.routes";
import AuthRoutes from "./auth.routes";

export const resgisterRoutes = async (server: FastifyInstance) => {
    await server.register(UserRoutes)
    await server.register(AuthRoutes)
}