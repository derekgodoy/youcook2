export class InfoUser {
    UID: string;
    cartaovenc: string;
    cep: string;
    cpf: string;
    cvv: string;
    endereco: string;
    nasc: string;
    ncartao: string;
    nome: string;
    telefone: string;
    tipoPlano: string;

    constructor (obj:any) {
        this.UID = obj.UID;
        this.cartaovenc = obj.cartaovenc;
        this.cep = obj.cep;
        this.cpf = obj.cpf;
        this.cvv = obj.cvv;
        this.endereco = obj.endereco;
        this.nasc = obj.nasc;
        this.ncartao = obj.ncartao;
        this.nome = obj.nome;
        this.telefone = obj.telefone;
        this.tipoPlano = obj.tipoPlano;
    }
}