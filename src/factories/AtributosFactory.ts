import AtributosService from "../services/AtributosService";
import AtributosRepository from "../repositories/AtributosRepository";
import { ValoresAtributosRepositoryFactory } from "./ValoresAtributosFactory";

export const AtributosRepositoryFactory = new AtributosRepository();
export const AtributosServiceFactory = new AtributosService(
    AtributosRepositoryFactory,
    ValoresAtributosRepositoryFactory
);