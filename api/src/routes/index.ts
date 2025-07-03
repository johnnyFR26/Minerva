import { FastifyInstance } from "fastify";
import UserRoutes from "./user.routes";

export const resgisterRoutes = async (server: FastifyInstance) => {
    await server.register(UserRoutes)
}