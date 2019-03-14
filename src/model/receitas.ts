import { Ingredientes } from "./ingredientes";
import { Passos } from "./passos";

export class Receita {
    nome: string;
    descricao: string;
    img: string;
    ingredientes: Ingredientes[];
    passos: Passos[];
    dificuldade: string;
    plano: string;
    preparo: string;
    uid : string;

    constructor (obj:any) {
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.img = obj.img;

        this.ingredientes = obj.ingredientes;
        
        this.passos = obj.passos;
        

        if(obj.dificuldade===1)
            this.dificuldade = 'Fácil';
        else if(obj.dificuldade===2)
            this.dificuldade = 'Intermediário';
        else if(obj.dificuldade===3)
            this.dificuldade = 'Difícil';

        this.plano = obj.plano;
        this.preparo = obj.preparo;
    }
}