import Fastify from "fastify";
import mercurius from "mercurius";
import "reflect-metadata";
import { buildSchema } from "type-graphql";

import { resgisterRoutes } from "./src/routes";
import corsMiddleware from "./src/middlewares/cors";

const server = Fastify();

corsMiddleware(server, {});

resgisterRoutes(server);

// async function setupGraphQL() {
//   const schema = await buildSchema({
//     resolvers: [UsersResolver],
//     validate: true,
//     emitSchemaFile: false,
//   });

//   server.register(mercurius, {
//     schema,
//     graphiql: true,
//   });
// }

server.get("/", async (request, reply) => {
  reply.send("Server running");
});

async function bootstrap() {
  //await setupGraphQL();

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
