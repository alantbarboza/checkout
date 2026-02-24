import { string, object, array, InferType, boolean } from 'yup';

export const Adicionar = object().shape({
    nome: string().required("O nome é obrigatório!"),
    ativo: boolean().nullable(),
    valores: array(
        object().shape({
            valor: string().required("Defina um nome para o atributo.")
        }),
    ).nullable()
});

export const AdicionarValor = object().shape({
    valor: string().required("O nome do valor do atributo é obrigatório!")
});

export const EditarAtributo = object().shape({
    nome: string().required("O nome é obrigatório!"),
});

export const EditarValor = object().shape({
    valor: string().required("O nome é obrigatório!")
});

export type IAdicionarValor = InferType<typeof AdicionarValor>;
export type IAdicionarAtributo = InferType<typeof Adicionar>;
export type IEditarAtributo = InferType<typeof EditarAtributo>;
export type IEditarValor = InferType<typeof EditarValor>;