import VariantesRepository from "../repositories/VariantesRepository";
import { Variantes } from "../models/Variantes";
import VariantesValoresRepository from "../repositories/VariantesValoresRepository";
import { VariantesValores } from "../models/VariantesValores";
import { IEditarAtributo } from "../controllers/schemas/AtributosSchema";
import { IEditarVariante } from "../controllers/schemas/ProdutosSchema";

class VariantesService {
    constructor(
        private readonly _variantesRepository: VariantesRepository,
        private readonly _variantesValoresRepository: VariantesValoresRepository
    ) {}

    async adicionar(dados: Variantes[]){
        return await this._variantesRepository.adicionar(dados);
    }

    async adicionarVariantesValores(dados: VariantesValores[]){
        return await this._variantesValoresRepository.adicionarVarios(dados);
    }

    async editarVariante(dados: IEditarVariante, id: string) {
        return await this._variantesRepository.editar(dados, id);
    }

    async buscarTodas(id_produto: string) {
        return await this._variantesRepository.buscarTodas(id_produto);
    }

    async desativar(id: string) {
        return await this._variantesRepository.desativar(id);
    }

    async desativarVarianteValor(id: string) {
        return await this._variantesValoresRepository.desativar(id);
    }
}

export default VariantesService;