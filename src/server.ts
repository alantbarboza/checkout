/*
npm -y init
npm install express dotenv cors
npm install typescript @prisma/client @types/node @types/express @types/dotenv @types/cors ts-node nodemon -D
npx prisma init
npx prisma generate
npx tsc --init
npm install yup
npm install -D @types/yup
npm run dev

-------------------------
npx prisma studio
npx prisma migrate dev
*/

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import rotasProdutos from './routes/produtos';
import rotasAtributos from './routes/atributos';
import rotasCategorias from './routes/categorias';


dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(rotasProdutos);
server.use(rotasAtributos);
server.use(rotasCategorias);

server.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});