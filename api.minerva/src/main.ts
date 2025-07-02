import 'dotenv/config';
import Fastify from 'fastify';
import { registerRoutes } from './app/routes';

const server = Fastify({
  logger: true,
});

registerRoutes(server);


server.get("/", async (request, reply) => {
  reply.send("Server running");
});

async function bootstrap() {

  server.listen({ port: 3000 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}

bootstrap();

export default async (req: any, res: any) => {
  await server.ready();
  server.server.emit("request", req, res);
};

export { server };
