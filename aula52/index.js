const nome = 'Anderson';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Joao';
  falaNome();
}
usaFalaNome(); // Anderson
