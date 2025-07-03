import { UserController } from './../controllers/user.controller';
import { FastifyInstance } from 'fastify';

const controller = new UserController()

export default async function UserRoutes(server: FastifyInstance) {
    server.get("/users", controller.getAll)
}