class Pessoa {

    nome: string;

    idade: number;


    constructor(nome: string, idade: number) {

        this.nome = nome;

        this.idade = idade;

    }


    public mostrarDados(): void {

        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);

    }

}