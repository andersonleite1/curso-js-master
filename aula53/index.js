// Global
function retornaFuncao(nome) {
  return function(sobrenome) {
    return nome + ' ' + sobrenome;
  };
}

function falaNome(nome) {
  const sobrenome = 'Silva';
  console.log(nome, sobrenome);
}

const funcao = retornaFuncao('Anderson');
const funcao2 = retornaFuncao('Joao');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao('Leite'),
  funcao2('Rodrigues'));
