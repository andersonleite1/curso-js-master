const textos = document.querySelector('.textos');
const paragrafos = textos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafos) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF';
}