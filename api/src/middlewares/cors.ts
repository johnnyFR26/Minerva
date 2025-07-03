import { FastifyPluginAsync } from 'fastify';
import fastifyCors from '@fastify/cors';

/**
 * Registers the CORS middleware with the Fastify server, allowing cross-origin
 * requests from any origin.
 *
 * @function
 * @param {FastifyServer} server - The Fastify server instance to register the
 *     middleware with.
 */
const corsMiddleware: FastifyPluginAsync = async (server) => {
  server.register(fastifyCors, {
    origin: '*',
  });
};

export default corsMiddleware;
