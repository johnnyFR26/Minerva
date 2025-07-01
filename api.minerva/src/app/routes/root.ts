import { FastifyInstance } from 'fastify';

export default async function main(fastify: FastifyInstance) {
  fastify.get('/', async function () {
    return { message: 'Hello API' };
  });
}
