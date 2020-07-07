const frutas = ['Maçã', 'Pêra', 'Uva', 'Manga', 'Goiaba'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

const novasFrutas = frutas.map(el => el.toLowerCase());
console.log(novasFrutas); // [ 'maçã', 'pêra', 'uva' ]
