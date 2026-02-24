import { ValoresAtributos } from "../models/ValoresAtributos";
import { PrismaFactory } from "../factories/PrismaFactory";
import { IEditarAtributo } from "../controllers/schemas/AtributosSchema";

class ValoresAtributosRepository {
    async adicionar(dados: ValoresAtributos[]){
        return await PrismaFactory.valoresAtributos.createMany({
            data: dados
        })
    }

    async buscarValoresPorIdAtributo(id_atributo: string){
        return await PrismaFactory.valoresAtributos.findMany({
            where: {
                id_atributo
            }
        })
    }

    async editar(dados: any, id: string){
        return await PrismaFactory.valoresAtributos.update({
            where: {
                id
            },
            data: dados
        })
    }

    async excluir(id: string){
        return await PrismaFactory.valoresAtributos.update({
            where: {
                id
            },
            data: {
                ativo: false
            }
        })
    }
}

export default ValoresAtributosRepository;