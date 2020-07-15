// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  // const ID = 123456;
  // const metodoInterno = function() {};

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Anderson', 'Leite');
const p2 = new Pessoa('Joao', 'Silva');
p1.metodo();
p2.metodo();

