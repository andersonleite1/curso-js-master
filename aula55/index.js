// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {

  const sobrenome = 'Leite';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Anderson'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(23, 70, 1.73);
