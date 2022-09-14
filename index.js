import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";


const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345")
const gerente = new Gerente("Ricardo", 5000, 23456789010);
gerente.cadastrarSenha("12345789")

const cliente = new Cliente("Lais", 22233344405, "456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "12345");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "12345789");


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
