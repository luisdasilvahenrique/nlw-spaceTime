import fastify from 'fastify';
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories';

const app = fastify();

app.register(cors , {
  origin: true, //Todas as URLS de front-end podem acessar a API
})
app.register(memoriesRoutes);

app.listen({
  port: 3333,
}).then(() => {
  console.log("🔥 Server is running on port 3333");
})
