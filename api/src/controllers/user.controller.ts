import { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../lib/db";

export class UserController {
    async getAll(request: FastifyRequest, response: FastifyReply) {
        const users = await db.user.findMany()
        return response.status(200).send(users)
    }
}