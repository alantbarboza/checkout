import ProdutosRepository from "../repositories/ProdutosRepository";
import { IAdicionarProduto, IEditarProduto, IAdicionarVariante, IEditarVariante } from "../controllers/schemas/ProdutosSchema";
import VariantesService from "./VariantesService";
import { Variantes } from "../models/Variantes";
import { VariantesValores } from "../models/VariantesValores";

class ProdutosService {
    constructor(
        private readonly _produtosRepository: ProdutosRepository,
        private readonly _variantesService: VariantesService
    ) {}

    async buscarTodos() {
        return await this._produtosRepository.buscarTodos();
    }

    organizarPayloadAdicionarVariantes(id_produto: string, dados: IAdicionarVariante) {
        if(dados){
            const payload = dados.map((variante) => {
                const { 
                    sku,
                    preco,
                    comprimento,
                    estoque,
                    peso,
                    combo,
                    altura,
                    largura,
                    ativo,
                    json_caracteristicas,
                    principal
                } = variante;
                
                return {
                    id_produto,
                    sku,
                    preco,
                    comprimento,
                    estoque,
                    peso,
                    combo,
                    altura,
                    largura,
                    ativo,
                    json_caracteristicas: json_caracteristicas ? json_caracteristicas : [],
                    principal

                }
            });

            return payload;
        }
        return [];
    }

    organizarPayloadAdicionarValorVariantes(variantesProduto: Variantes[], dados: IAdicionarVariante): VariantesValores[] {
        const retorno = variantesProduto.map((variante, index) => {
            const varianteCorrespondenteFront = dados?.find(item => item.sku === variante.sku);
            if(varianteCorrespondenteFront && varianteCorrespondenteFront.valores_atributos){
                const payload = [];
                for(let varianteFront of varianteCorrespondenteFront.valores_atributos){
                    payload.push({
                        id_valor_atributo: varianteFront as string,
                        id_variante: variante.id as string,
                        ativo: true
                    })
                }

                return payload;
            }
            return [];
        });
        return retorno.flat() as VariantesValores[];
    }

    async adicionar(dados: IAdicionarProduto) {
        const payloadAdicionarProduto: IAdicionarProduto = {
            descricao: dados.descricao,
            nome: dados.nome,
            ativo: dados.ativo,
            id_categoria: dados.id_categoria
        }
        const produtoAdicionado = await this._produtosRepository.adicionar(payloadAdicionarProduto);
        
        if(dados.variantes){
            const payloadAdicionarVariantes = this.organizarPayloadAdicionarVariantes(
                produtoAdicionado.id as string, 
                dados.variantes
            );
            await this._variantesService.adicionar(payloadAdicionarVariantes);

            const variantesProduto = await this._variantesService.buscarTodas(produtoAdicionado.id as string);
            const payloadAdicionarVariantesValores = this.organizarPayloadAdicionarValorVariantes(variantesProduto, dados.variantes);
        
            const variantesValoresAdicionados = await this._variantesService.adicionarVariantesValores(payloadAdicionarVariantesValores);
        }

        return { status: "success" };
    }

    async editarProduto(dados: IEditarProduto, id: string) {
        return await this._produtosRepository.editar(dados, id);
    }

    async editarVariante(dados: IEditarVariante, id: string) {
        return await this._variantesService.editarVariante(dados, id);
    }

    async excluirProduto(id: string) {
        return await this._produtosRepository.excluir(id);
    }

    async excluirVariante(id: string) {
        return await this._variantesService.desativar(id);
    }
}

export default ProdutosService;