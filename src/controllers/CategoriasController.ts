import { Request, Response } from "express";
import { CategoriasServiceFactory } from "../factories/CategoriasFactory";

class CategoriasController {
    async buscarTodas(Req: Request, Res: Response) {
        try {
            const retorno = await CategoriasServiceFactory.buscarTodas();
            Res.json(retorno);
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }
}

export default CategoriasController;