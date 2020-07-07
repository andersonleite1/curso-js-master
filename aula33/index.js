const pessoa = {
  nome: 'Anderson',
  sobrenome: 'Leite',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 720
  }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
