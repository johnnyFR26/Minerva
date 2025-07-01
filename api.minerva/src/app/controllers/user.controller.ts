import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
import { db } from "../plugins/db";

export class UserController {
    async getUsers(request: FastifyRequest, response: FastifyReply) {
        const users = await db.user.findMany()
        return response.status(200).send(users)
    }
}