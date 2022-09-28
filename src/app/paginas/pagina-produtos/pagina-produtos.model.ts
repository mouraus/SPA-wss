export class ProdutosModel {
    constructor(
        public codigo_produto: string,
        public descricao: string,
        public destaque: number,
        public disponibilidade: boolean,
        public id_categoria: number,
        public id_subcategoria: number,
        public id: number,
        public marca: string,
        public nome_categoria: string,
        public nome_produto: string,
        public nome_subcategoria: string,
        public urlimagem: string,
    ){}
}