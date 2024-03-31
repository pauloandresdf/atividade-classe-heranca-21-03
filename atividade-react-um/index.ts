import { Empregado } from './Empregado/empregado';


const pessoa = new Pessoa('Paulo', 19);

pessoa.mostrarDados();


const empregado = new Empregado('Andre', 07, 1500);

empregado.mostrarDados();

empregado.mostrarSalario();