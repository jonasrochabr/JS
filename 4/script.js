

let firstNumber = prompt("Digite o primeiro número")

let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const plus = firstNumber + secondNumber
const down = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert(`A Soma é: ${plus}`)
alert(`A Subtração é: ${down}`)
alert(`A Multiplicação é: ${multi}`)
alert(`A Divisão é: ${div}`)
alert(`O Resto é: ${rest}`)