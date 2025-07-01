import { FastifyInstance } from "fastify/types/instance";
import { UserController } from "../controllers/user.controller";

const controller = new UserController();
export default async function UserRoutes(server: FastifyInstance) {
    server.get('/api/users', controller.getUsers)
}