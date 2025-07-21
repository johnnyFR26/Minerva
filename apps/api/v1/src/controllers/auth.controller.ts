import  bcrypt from 'bcrypt';
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { db } from "../lib/db";
import jwt from "jsonwebtoken"

export class AuthController {
    async login(request: FastifyRequest<{Body: {email: string, password: string}}>, response: FastifyReply) {

        const validate = z.object({
            email: z.string().email(),
            password: z.string()
        }).safeParse(request.body)

        if (!validate.success) {
            return response.status(400).send(validate.error)
        }

        const { email, password } = validate.data

        const user = await db.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            return response.status(400).send({
                message: "User not found"
            })
        }

        const isValidPassword =  await bcrypt.compare(password, user.password)

        if (!isValidPassword) {
            return response.status(400).send({
                message: "Invalid password"
            })
        }

        const token = await jwt.sign({email: user.email}, process.env.JWT_SECRET, {expiresIn: '1d'})

        return response.status(200).send({
            token,
            user
        })
    }
}