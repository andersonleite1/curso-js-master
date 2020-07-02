function saudacao(nome){
    return `Bom dia ${nome}!`;
}

// const variavel1 = saudacao('João');
// const variavel2 = saudacao('Maria');

// console.log(variavel1);
// console.log(variavel2);

// function soma(x, y){
//     return x + y;
// } // nesse caso não precisa de ponto e virgula no final

// console.log(soma(5, 8));
// console.log(soma(2, 3));
// console.log(soma(12, 14));

const raiz1 = function(n){
    return n ** 0.5;
}; // nesse caso precisa de ponto e virgula no final


// heron functions
const raiz2 = (n) => {
    return n ** 0.5;
};

const raiz3 = n =>  n ** 0.5;

console.log(raiz1(9));
console.log(raiz2(16));
console.log(raiz3(25));