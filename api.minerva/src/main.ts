import 'dotenv/config';
import Fastify from 'fastify';
import { registerRoutes } from './app/routes';

const server = Fastify({
  logger: true,
});

registerRoutes(server);

if (require.main === module) {
  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  server.listen({ port, host }, (err) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    } else {
      console.log(`[ ready ] http://${host}:${port}`);
    }
  });
}

export default async (req: any, res: any) => {
  await server.ready();
  server.server.emit('request', req, res);
};

export { server };
