import { Request, Response } from 'express';
import { Adicionar, AdicionarValor, EditarAtributo, EditarValor } from './schemas/AtributosSchema';
import { AtributosServiceFactory } from '../factories/AtributosFactory';
import atributos from '../routes/atributos';

class AtributosController {
    async adicionar(Req: Request, Res: Response) {
        try {
            await Adicionar.validate(Req.body);
            const retorno = await AtributosServiceFactory.adicionar(Req.body);

            Res.status(201).json(retorno);
        }catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async adicionarValorAtributo(Req: Request, Res: Response) {
        try{
            await AdicionarValor.validate(Req.body);

            if(!Req.params.id){
                throw new Error("Por favor, selecione um atributo para adicionar o valor!");
            }

            const atributos = await AtributosServiceFactory.adicionarValorAtributo(Req.body, Array.isArray(Req.params.id) ? Req.params.id[0] : Req.params.id);
            Res.status(201).json(atributos);
        }catch(err: any){
            Res.status(400).json({ error: err.message });
        }
    } 

    async editarAtributo(Req: Request, Res: Response) {
        try{
            await EditarAtributo.validate(Req.body);

            const atributoEditado = await AtributosServiceFactory.editarAtributo(Req.body, Array.isArray(Req.params.id) ? Req.params.id[0] : Req.params.id);
            Res.json({ atributoEditado });
        } catch (err: any){
            Res.status(400).json({ error: err.message });
        }
    }

    async editarValorAtributo(Req: Request, Res: Response) {
        try{
            await EditarValor.validate(Req.body);
            const valorAtributoEditado = await AtributosServiceFactory.editarValorAtributo(Req.body, Array.isArray(Req.params.id) ? Req.params.id[0] : Req.params.id);
            Res.json(valorAtributoEditado);
        } catch (err: any){
            Res.status(400).json({ error: err.message });
        }
    }

    async buscarTodosAtributos(Req: Request, Res: Response) {
        try {
            const retorno = await AtributosServiceFactory.buscarTodos();
            Res.json(retorno);
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async excluirAtributo(Req: Request, Res: Response) {
        try{
            const retorno = await AtributosServiceFactory.excluir(Array.isArray(Req.params.id) ? Req.params.id[0] : Req.params.id);
            Res.status(200).json(retorno);
        }catch(err: any){
            Res.status(400).json({ error: err.message });
        }
    }

    async excluirValorAtributo(Req: Request, Res: Response) {
        try{
            const retorno = await AtributosServiceFactory.excluirValor(Array.isArray(Req.params.id) ? Req.params.id[0] : Req.params.id);
            Res.status(200).json(retorno);
        }catch(err: any){
            Res.status(400).json({ error: err.message });
        }
    }
}

export default AtributosController;