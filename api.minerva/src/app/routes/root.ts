import { FastifyInstance } from 'fastify';

export default async function main(fastify: FastifyInstance) {
  fastify.get('/api', async function () {
    return { message: 'Hello API' };
  });
}
