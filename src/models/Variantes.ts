export interface Variantes {
    id?: string;
    id_produto: string;
    sku: string;
    preco: number;
    comprimento: number;
    estoque: number;
    peso: number;
    combo: boolean;
    altura: number;
    largura: number;
    ativo: boolean;
    json_caracteristicas: any;
    principal: boolean;
    created_at?: any;
    updated_at?: any;
}

interface IComponentes {
    id_variante: string;
    quantidade: number;
}