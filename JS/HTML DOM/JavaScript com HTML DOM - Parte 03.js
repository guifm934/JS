// Método querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';

// Busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML = 'Mudei o texto aqui');

// Busca somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

// Função chamada pelo evento onclick
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA';
};

// Método querySelectorAll
let ListaLi = document.querySelectorAll('li');
for (i = 0; i < ListaLi.length; i++) {
    ListaLi[i].style.border = '1px solid #0000FF';
    ListaLi[i].style.padding = '3px';
}
console.log(ListaLi);

//Busca por id
let myli = document.querySelectorAll('#my-li');
myli.forEach((li) => (li.innerHTML = 'Mudou aqui!'));

//Busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'));

//Busca por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));
