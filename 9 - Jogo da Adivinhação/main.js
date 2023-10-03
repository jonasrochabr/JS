// Variáveis

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let ramdomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)

//callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    const inputNumberValue = Number(inputNumber.value)
    
    if(isNaN(inputNumberValue) || inputNumberValue < 0 || inputNumberValue > 10) {
        toggleScreen()
        document.querySelector(".screen2 h2").innerText = `Por favor, insira um número válido entre 0 e 10.`
        inputNumber.value = ""
        return
    }
    
    if(inputNumberValue === ramdomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativa${xAttempts > 1 ? 's' : ''}`
        return
    }

    if(inputNumber != ramdomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h2").innerText = `Tente Novamente`
    }
    
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    inputNumber.value = ""
    if(inputNumberValue === ramdomNumber) {
        xAttempts = 1
    }
    ramdomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
        screen1.classList.toggle("hide")
        screen2.classList.toggle("hide")
}

function enterKey() {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}