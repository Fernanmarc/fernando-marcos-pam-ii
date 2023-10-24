// let num1 = 2
// const num2 = 10
// var msg = "Confie no Oda:"
// let result = num1 + num2

// console.log(msg+result)



// function soma() {
//     let resultado = num1 + num2
//     console.log(msg, resultado)
// }

// soma()

// function somaComParametros(valor1, valor2) {
//     console.log("O resultado é:", valor1 + valor2)
// }

// somaComParametros(8, 12)
// somaComParametros(8, 120)

// const multiplicacao = (n1, n2) => {
//     return n1 * n2
// }

// console.log(multiplicacao(2, 3))

let usuario = {
    nome: "Dio",
    idade: 139,
    signo: "Vampiro",
    calvo: false
}
console.log (typeof (usuario))
console.log (
    "nome:", usuario.nome,
    "\n idade:", usuario.idade
)
console.log(typeof (usuario.calvo))

// console.log(nomes)
// console.log(typeof nomes)
// console.log(nomes[0])

const somaMelhorada = (n1, n2) => {
    let resultNovaFunc = ''
    if(typeof n1 == 'number' && typeof n2 == 'number'){
        resultNovaFunc = n1 + n2
        return "Resultado de acordo com Oda:" + resultNovaFunc
    }
    return "Valores de entrada inválidos"
}

console.log(somaMelhorada(6,9))


