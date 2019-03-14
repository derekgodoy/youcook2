export class Ingredientes {
    nome: string;
    qtd: string;

    constructor (obj:any) {
        this.nome = obj.nome;
        this.qtd = obj.qtd;
    }
}