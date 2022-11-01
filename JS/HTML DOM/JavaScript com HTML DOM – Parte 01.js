//Javascript e DOM
//objeto document
console.log(document);

//acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

//alterar título
document.title = 123;

//criar um elemento <h1>
let heading = document.createElement('H1');
heading.innerHTML = 'ola mundo!';
document.body.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';