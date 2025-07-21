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

const updateUserSchema = createUserSchema.partial()
export class UserController {
    /**
     * Retrieves all users.
     *
     * @returns The list of users.
     */
    async getAll(request: FastifyRequest, response: FastifyReply<{Body: User[]}>) {
        const users = await db.user.findMany()
        return response.status(200).send(users)
    }

    /**
     * Retrieves a user by their ID.
     *
     * @param request - The request object containing the user ID in the parameters.
     * @param response - The response object that will contain the user data.
     * @returns The user data with a status code of 200. If the user is not found, it will return null.
     */
    async get(request: FastifyRequest<{Params: { id: number} }>, response: FastifyReply<{Body: User}>) {
        const { id } = request.params

        const user = await db.user.findUnique({
            where: {
                id
            }
        })

        return response.status(200).send(user)
    }

    /**
     * Creates a new user in the database.
     *
     * @param request - The request object containing the user data in the body, 
     *     validated against the createUserSchema.
     * @param response - The response object that will contain the created user data.
     * @returns The created user data with a status code of 201. If validation fails,
     *     it returns the validation error with a status code of 400.
     */
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

    /**
     * Updates a user in the database.
     *
     * @param request - The request object containing the user ID in the params,
     *     and the user data in the body, validated against the updateUserSchema.
     * @param response - The response object that will contain the updated user data.
     * @returns The updated user data with a status code of 201. If validation fails,
     *     it returns the validation error with a status code of 400.
     */
    async patch(request: FastifyRequest<{Params: { id: number} }>, response: FastifyReply){
        const { id } = request.params

        const validate = updateUserSchema.safeParse(request.body)

        if (!validate.success) {
            return response.status(400).send(validate.error)
        }

        const data = validate.data

        const user = await db.user.update({
            where: {
                id
            },
            data: {
                name: data.name ?? undefined,
                email: data.email ?? undefined,
                password: data.password ?? undefined,
                role: data.role ?? undefined,
                controls: data.controls ?? undefined
            }
        })

        return response.status(201).send(user)
    }

    /**
     * Deletes a user from the database.
     *
     * @param request - The request object containing the user ID in the parameters.
     * @param response - The response object that will contain the deleted user data.
     * @returns The deleted user data with a status code of 201. If the user is not found, it will return null.
     */
    async delete(request: FastifyRequest<{Params: { id: number} }>, response: FastifyReply){
        const { id } = request.params

        const user = await db.user.delete({
            where: {
                id
            }
        })

        return response.status(201).send(user)
    }
}