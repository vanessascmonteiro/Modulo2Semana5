//exercicio 1 - Spread

const num = [2, 5, 7, 15, 450, 100]
console.log(Math.max(num))

// exercicio 2 - Rest 

function soma(...nums){
    return nums.reduce ((total, el) => total + el)
}
console.log(soma(2, 5, 10, 12, 24))

//exercicio 3 

const frutas = ['uva', 'maca', 'limao', 'jaca', 'banana'];

frutas.forEach (element => console.log (element));

//exercicio 4 

const numeros = [1, 4, 9, 16]

const map1 = numeros.map(element => element * 2);
console.log(map1);

//exercicio 5

const palavras = ['spray', 'limit', 'elite','exuberant', 'destruicao', 'present'];

const resultado = palavras.filter(words => words.length > 6);
console.log("resultado:", resultado);

//exercicio 6 

const pessoas = [
    { name: 'Marcelo', idade: 30},
    { name: 'Marcelo', idade: 30},
    { name: 'Samara', idade: 25},
    { name: 'Luciano', idade: 30},
    { name: 'Aline', idade: 30},
    { name: 'Alessandra', idade: 30},
    ]
    
    const encontrarPessoa = pessoas.find(p => p.name === "Aline");
    console.log("pessoa encontrada: ", encontrarPessoa);

//exercicio 7

const foguetes = [
    { pais: 'Russia', lanc: 30},
    { pais: 'Brasil', lanc: 29},
    { pais: 'Japão', lanc: 300},
    { pais: 'Alemanha', lanc: 20},
    { pais: 'Estados Unidos', lanc: 10 },
] 

const totalLancamento = foguetes.reduce((prevValor, elem) => prevValor + elem.lanc, 0);
console.log("resultado do lançamento", totalLancamento);

//exercicio 8

async function getPeople(){
    try{
        const people = await fetch('https://randomuser.me/api/?results=10');
        return people.json();
    } catch (error){
        console.log(`error:${error}`);

    }
}

//exercicio 9

async function saudacao(){
    return "olá";
}
console.log(saudacao());
saudacao().then(console.log);

//exercicio 10 

async function saudacaoAsync(){
    return saudacao = await Promise.resolve("oi!");
}
saudacaoAsync().then(console.log);


