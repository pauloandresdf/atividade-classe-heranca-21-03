class Empregado extends Pessoa {

    salario: number;


    constructor(nome: string, idade: number, salario: number) {

        super(nome, idade);

        this.salario = salario;

    }


    public mostrarSalario(): void {

        console.log(`Salário: ${this.salario}`);

    }

}