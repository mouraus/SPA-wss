export class ProdutoAttModel {
constructor(
    public id:number,
    public nome_produto: string,
    public nome_categoria: number,
    public nome_subcategoria: number,
    public disponibilidade: boolean,
    public codigo_produto: string,
    public id_marca: string,
    public descricao: string,
    public destaque: number
){}
}