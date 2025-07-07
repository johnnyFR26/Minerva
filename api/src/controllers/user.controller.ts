import { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../lib/db";
import { z } from "zod";
import { Role } from "@prisma/client";
import { User } from "../types/user";
import bcrypt from "bcrypt"

const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: z.nativeEnum(Role),
    controls: z.string().nullable()
})
export class UserController {
    async getAll(request: FastifyRequest, response: FastifyReply<{Body: User[]}>) {
        const users = await db.user.findMany()
        return response.status(200).send(users)
    }

    async create(request: FastifyRequest<{Body: z.infer<typeof createUserSchema>}>, response: FastifyReply<{Body: User}>) {
        const validate = createUserSchema.safeParse(request.body)

        if (!validate.success) {
            return response.status(400).send(validate.error)
        }

        const data = validate.data

        data.password = await bcrypt.hash(data.password, 10)

        const user = await db.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                role: data.role,
                controls: data.controls ?? undefined
            }
        })

        return response.status(201).send(user)
    }

    async patch(request: FastifyRequest<{Params: { id: number} }>, response: FastifyReply){
        const { id } = request.params

        response.status(204).send({
            id
        })
    }
}