import { PrismaFactory } from "../factories/PrismaFactory";
import { VariantesValores } from "../models/VariantesValores";

class VariantesValoresRepository {
    async adicionarVarios(dados: VariantesValores[]){
        const payload = dados.map(dado => ({
            ...dado,
            id_valor_atributo: dado.id_valor_atributo !== undefined 
            && dado.id_valor_atributo !== null ? String(dado.id_valor_atributo) : dado.id_valor_atributo,
            id_variante: dado.id_variante !== undefined 
            && dado.id_variante !== null ? String(dado.id_variante) : dado.id_variante,
        }));

        return await PrismaFactory.variantesValores.createMany({
            data: payload
        });
    }

    async desativar(id: string) {
        return await PrismaFactory.variantesValores.update({
            where: {
                id
            },
            data: {
                ativo: false
            }
        });
    }
}

export default VariantesValoresRepository;