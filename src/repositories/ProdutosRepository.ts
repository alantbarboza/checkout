import { PrismaFactory } from "../factories/PrismaFactory";
import { Produtos } from "../models/Produtos";
import { IEditarProduto } from "../controllers/schemas/ProdutosSchema";

class ProdutosRepository {
    async buscarTodos() {
        return await PrismaFactory.produtos.findMany({
            where: {
                ativo: true
            },
            include: {
                variantes: {
                    where: {
                        ativo: true
                    },
                    include: {
                        variantes_valores: {
                            where: {
                                ativo: true
                            }
                        }
                    }
                }
            }
        });
    }

    async adicionar(dados: Produtos): Promise<Produtos> {
        return await PrismaFactory.produtos.create({
            data: dados
        });
    }

    async editar(dados: IEditarProduto, id: string) {
        return await PrismaFactory.produtos.update({
            where: { 
                id 
            },
            data: dados
        });
    }

    async excluir(id: string) {
        return await PrismaFactory.produtos.update({
            where: { 
                id 
            },
            data: {
                ativo: false
            }
        });
    }
}

export default ProdutosRepository;