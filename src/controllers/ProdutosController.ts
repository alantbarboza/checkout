import { Request, Response } from 'express';
import { ProdutosServiceFactory } from '../factories/ProdutosFactory';
import { AdicionarProduto, EditarVariante } from './schemas/ProdutosSchema';
import { EditarProduto } from './schemas/ProdutosSchema';
import { ValidarUUIDSchema } from './schemas/GlobalSchema';
import VariantesService from '../services/VariantesService';
import { VariantesServiceFactory } from '../factories/VariantesFactory';

class ProdutosController {
  async buscarTodos(Req: Request, Res: Response) {
    try{
      const retorno = await ProdutosServiceFactory.buscarTodos();
      Res.json(retorno);
    } catch(err: any) {
      Res.status(400).json({ error: err.message });
    }
  }

  async adicionar(Req: Request, Res: Response) {
    try {
      await AdicionarProduto.validate(Req.body);

      const retorno = await ProdutosServiceFactory.adicionar(Req.body);

      Res.status(201).json(retorno);
    } catch (err: any) { 
      Res.status(400).json({ error: err.message });
    }
  }

  async editarProduto(Req: Request, Res: Response) {
      try {
        await ValidarUUIDSchema.validate(Req.params.id);
        await EditarProduto.validate(Req.body);
        
        const retorno = await ProdutosServiceFactory.editarProduto(Req.body, Array.isArray(Req.params.id) ? Req.params.id[0] : Req.params.id);
        
        Res.json(retorno);
      } catch (err: any) {
          Res.status(400).json({ error: err.message });
      }
  }

  async editarVariante(Req: Request, Res: Response) {
    try {
      await ValidarUUIDSchema.validate(Req.params.id);
      await EditarVariante.validate(Req.body);

      const retorno = await ProdutosServiceFactory.editarVariante(Req.body, Array.isArray(Req.params.id) ? Req.params.id[0] : Req.params.id);
      
      Res.json(retorno);
    } catch (err: any) {
      Res.status(400).json({ error: err.message });
    }
  }

  async excluirProduto(Req: Request, Res: Response) {
    try{
      await ValidarUUIDSchema.validate(Req.params.id);
      
      const retorno = await ProdutosServiceFactory.excluirProduto(Array.isArray(Req.params.id) ? Req.params.id[0] : Req.params.id);
      
      Res.json(retorno);
    }catch(err: any) {
      Res.status(400).json({ error: err.message });
    }
  }

  async desativarVariante(Req: Request, Res: Response) {
    try {
      await ValidarUUIDSchema.validate(Req.params.id);

      const retorno = await ProdutosServiceFactory.excluirVariante(Array.isArray(Req.params.id) ? Req.params.id[0] : Req.params.id);

      Res.json(retorno);
    } catch (err: any) {
      Res.status(400).json({ error: err.message });
    }
  }

  async desativarVarianteValor(Req: Request, Res: Response) {
    try {
      await ValidarUUIDSchema.validate(Req.params.id);

      const retorno = await VariantesServiceFactory.desativarVarianteValor(Array.isArray(Req.params.id) ? Req.params.id[0] : Req.params.id);
      
      Res.json(retorno);
    } catch (err: any) {
      Res.status(400).json({ error: err.message });
    }
  }
} 

export default ProdutosController;