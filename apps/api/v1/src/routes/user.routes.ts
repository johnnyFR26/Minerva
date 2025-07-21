import { UserController } from './../controllers/user.controller';
import { FastifyInstance } from 'fastify';

const controller = new UserController()

export default async function UserRoutes(server: FastifyInstance) {
    server.get("/users", controller.getAll)
    server.get("/users/:id", controller.get)
    server.post("/users", controller.create)
    server.patch("/users/:id", controller.patch)
    server.delete("/users/:id", controller.delete)
}