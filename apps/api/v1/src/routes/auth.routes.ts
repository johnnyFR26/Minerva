import { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/auth.controller";

const controller = new AuthController()
export default async function AuthRoutes(server: FastifyInstance) {
    server.post("/login", controller.login)
}