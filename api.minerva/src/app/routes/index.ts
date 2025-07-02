import { FastifyInstance } from "fastify";
import UserRoutes from "./user.routes";
import main from "./root";

export const registerRoutes = async (server: FastifyInstance) => {
    server.register(main);
    server.register(UserRoutes);
}