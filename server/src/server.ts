import 'dotenv/config'
import fastify from "fastify";
import cors from '@fastify/cors'
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from './routes/auth';
import jwt from "@fastify/jwt"
import multpart from "@fastify/multipart"
import { uploadRoutes } from './routes/upload';
import { resolve } from 'node:path';


const app = fastify()
// HTTP Method: GET, POST, PUT, PATCH, DELETE

app.register(multpart)

app.register(require('@fastify/static'), {
   root: resolve(__dirname, '../uploads'),
   prefix: '/uploads',
})

app.register(cors, {
    origin: true, // Todas url de front-end poderão acessar nosso back-end
})

app.register(jwt, {
    secret: 'spacetime',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)


app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then(() => {
    console.log("🚀 HTTP server running on http://localhost:3333");
})


/*
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR3VpbGhlcm1lIiwiYXZhdGFyVXJsIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzEwMDI0MjYxNj92PTQiLCJzdWIiOiI1OGUzNTM1NC02YzI2LTRmOTItYmU3OS0yOTliZmMyZWVhMWMiLCJpYXQiOjE2ODQ1NTkxNTksImV4cCI6MTY4NzE1MTE1OX0.d2_Fgs6i3rFOOBsoZuooGbKSL6gOnYGpvrCOUQRZiK8"
*/