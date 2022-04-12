//Declaracao padra de funcao
function invert(word) {
    let inv = word;
    for (let i = 0; i < Math.trunc(word.length/2); i++){
        let aux = inv[i];
        inv[i] = inv[word.length-i-1];
        inv[word.length-i-1] = aux;
    }
    console.log(inv);
}

//Armazenando uma funcao numa variavel
const f = function (a, b) {
    console.log(a + b);
}

f('mar', 'celo');

//Arrow function
const fun = (a, b) => {
    return a + b;
}
console.log(fun('marce', 'lo'));

const funcao = (a, b) => a - b; // Precisa ter uma linha de codigo
