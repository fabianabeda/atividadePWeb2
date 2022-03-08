const c1 = new Conta('1', 100);
const c2 = new Conta('2', 200);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

let contas = new Contas()
contas.inserir(c1)
contas.inserir(p1)
contas.inserir(cb1)

let clientes = new Clientes()
const Cliente1 = new Cliente('fabiana', '58735', c1);
const Cliente2 = new Cliente('lucia', '45763', c2)
const Cliente3 = new Cliente('Vinicius', '56783', p1)
clientes.inserir(Cliente1)
clientes.inserir(Cliente2)

let listarCliente = clientes.listar()
listarCliente.forEach(cliente => console.log("CLiente na lista:",cliente.toString()))



console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

console.log('contas', contas.listar())

let contaController = new ContaController(contas);
let clienteController = new ClienteController(clientes, contas);
clienteController.listar()
contaController.listar();
