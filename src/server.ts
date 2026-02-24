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