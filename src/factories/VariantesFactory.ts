import VariantesRepository from "../repositories/VariantesRepository";
import VariantesService from "../services/VariantesService";
import VariantesValoresRepository from "../repositories/VariantesValoresRepository";

export const VariantesRepositoryFactory = new VariantesRepository();
export const VariantesValoresRepositoryFactory = new VariantesValoresRepository();
export const VariantesServiceFactory = new VariantesService(VariantesRepositoryFactory, VariantesValoresRepositoryFactory);

