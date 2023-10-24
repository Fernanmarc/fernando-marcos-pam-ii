let num1 = 2
const num2 = 3
var msg = "Olá amigos! Esse é o número:"

function soma() {
    let resultado = num1 + num2
    console.log(msg, resultado)
}

soma()

function somaComParametros(valor1, valor2) {
    console.log("O resultado é:", valor1 + valor2)
}

somaComParametros(6, 11)
somaComParametros(7, 160)

const multiplicacao = (n1, n2) => {
    return n1 * n2
}

console.log(multiplicacao(2, 3))
// JSON - JavaScript Object Notation

let usuario = {
    nome: "João",
    idade: 35,
    signo: "Escorpião",
    calvo: true
}
console.log (typeof usuario)
console.log (
    "nome:", usuario.nome, 
    "\n idade:", usuario.idade
    )
console.log(typeof usuario.calvo)

const nomes = ["João", "Oãoj"]

console.log(nomes)
console.log(typeof nomes)
console.log(nomes[0])

const somaMelhorada = (n1, n2) => {
    let resultNovaFunc = ''    
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        resultNovaFunc = n1 + n2
        return "Resultado:", resultNovaFunc
    }
    return "Valores de entrada inválidos"
}

console.log(somaMelhorada(6, 9))
console.log(somaMelhorada(6, "98"))