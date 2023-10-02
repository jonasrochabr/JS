

let result = prompt("Adivinhe o número que estou pensando entre 0 e 10")
const ramdomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != ramdomNumber) {
    result = prompt("Erro! Try Again")
    xAttempts++
}

if (xAttempts === 1) {
    alert(`Parabéns! O número que pensei foi ${ramdomNumber} e você adivinhou em 1 tentativa.`)
} else {
    alert(`Parabéns! O número que pensei foi ${ramdomNumber} e você adivinhou em ${xAttempts} tentativas.`)
} 