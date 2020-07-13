// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre JS') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: altura,
    peso: peso,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Carla', 'Lima', 1.63, 60);
const p2 = criaPessoa('João', 'Silvs', 1.90, 83);
const p3 = criaPessoa('Junior', 'Coelho', 1.6, 90);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

