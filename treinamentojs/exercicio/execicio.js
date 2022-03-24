const printf = arg => console.log(arg)

printf("Hello World")

//1
const cumprimentar = text => "Olá, " + text + "!";

//2
const converterIdadeEmAnosParaDias = anos => {
    let dias = 0;
    for(let i = 1, ano = 2022; i <= anos; i++){
        ano = 2022 - i;
        if (ano % 4 == 0) {
            dias += 366;
        }
        else {
            dias += 365;
        }
    }
    console.log(dias);
}

//3
const calcularSalario = (horasMes, reaisHora) =>
`Salário igual a R$${horasMes*reaisHora}`;

//4
const nomeDoMes = numero => {
    const meses = ['janeiro', 'fevereiro', 'março',
    'abril', 'maio', 'junho', 'julho', 'agosto',
    'setembro', 'outubro', 'novembro', 'dezembro'
];
return meses[numero - 1];
}

//5
const maiorOuIgual = (a, b) => a >= b;

//6
const inverso = valor => {
    if (typeof valor == "boolean"){
        return !valor;
    }
    
    else if (typeof valor == "number"){
        return -valor;
    }
}

//7

//8
const multiplicar = (a, b) => {
    const a0 = a;
    for (let i = 1; i < b; i++){
        a += a0;
    }
    return a;
}

//9
const repetir = (elemento, vezes) => Array(vezes).fill(elemento)

//10
const simboloMais = vezes => "+".repeat(vezes);

//11
const receberPrimeiroEUltimoElemento = vetor =>
    [vetor[0], vetor[vetor.length - 1]];

//12
const removerPropriedade = (objeto, propriedade) => {
    delete objeto[propriedade];
    return objeto;
}

//13
const filtrarNumeros = vetor => {
    const vetorNumeros = [];
    for (x of vetor)
        if (typeof x == "number")
            vetorNumeros.push(x); 
    return vetorNumeros;
}

//14
const objetoParaArray = objeto => Object.entries(objeto)

//15
const receberSomenteOsParesDeIndicesPares = vetor => vetor.reduce(
    (resposta, elem, num) => resposta = (elem % 2 == 0 && num % 2 == 0) ?
        [...resposta, elem] : resposta, [])

//16
const checarAnoBissexto = ano =>
    (ano % 4 == 0) ? 
        (ano % 100 == 0) ? 
            (ano % 400 == 0) ? 
                true 
                : false 
            : true 
        : false;

//17
const somarNumeros = vetor => vetor.reduce(
    (total, elemento) => total + elemento, 0)

//18
const despesasTotais = vetor => vetor.reduce(
    (total, elemento) => total + elemento.preco, 0)

//19
const calcularMedia = vetor => somarNumeros(vetor)/vetor.length

//20
const areaDoTriangulo = (base, altura) => (base*altura/2).toFixed(2)

//21
const menorNumero = vetor => vetor.reduce(
    (menor, elemento) => menor = (elemento < menor) ? elemento : menor,
    vetor[0])

//22
const funcaoDaSorte = n => {
    const r = Math.trunc(Math.random() * 9 + 1);
    return (n == r) ? `Parabéns! O número sorteado foi o ${r}`
        :`Que Pena! O número sorteado foi o ${r}`
}

//23
const contarPalavras = vetor => vetor.split(" ").length

//24
const contarCaractere = (letra, frase) => frase.split("").reduce(
    (contador, elemento) => (elemento == letra) ? 
        contador += 1: contador += 0, 0)

//25
const buscarPalavrasSemelhantes = (palavra, vetor) => vetor.reduce(
    (resposta, elemento) => resposta = (elemento.includes(palavra)) ?
        [...resposta, elemento] : resposta, [])

//26
const removerVogais = palavra => {
    const vetor = palavra.split("");
    let resposta = palavra;
    for(letra of vetor)
        if(letra == "a" || letra == "e" ||
        letra == "i" || letra == "o" || letra == "u")
            resposta = resposta.replace(letra, "")
    return resposta;
}

//27
const inverter = objeto => {
    const resposta = {};
    const chave = Object.keys(objeto)
    const valor = Object.values(objeto)
    for (let i = 0; i < chave.length; i++)
        resposta[valor[i]] = chave[i];
    return resposta;
}

//28
filtrarPorQuantidadeDeDigitos = (vetor, digitos) => {
    const resposta = [];
    for (elem of vetor)
        if ( 1 <= elem/10**(digitos-1) && elem/10**(digitos-1) < 10)
            resposta.push(elem);
    return resposta;
}

//29
const segundoMaior = vetor => {
    let maior = vetor[0];
    let segMaior = vetor[0];
    for(elem of vetor)
        if(elem > maior)
            maior = elem;
    for(elem of vetor)
        if(elem > segMaior && elem < maior)
            segMaior = elem;
    return segMaior;
}

//30
const recerberMelhorEstudante = objeto => {
    let maiorMedia = 0;
    const vetorAlunos = Object.keys(objeto);
    const notas = Object.values(objeto);
    const medias = [];
    
    for(nota of notas)
        medias.push(calcularMedia(nota));
    for(media of medias)
        if(maiorMedia < media)
            maiorMedia = media;

    return {
        nome: vetorAlunos[medias.indexOf(maiorMedia)],
        media: maiorMedia
    }
}