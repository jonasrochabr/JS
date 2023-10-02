

let student = prompt("Qual o nome do(a) aluno(a)?")

let note1 = prompt("Qual a nota do 1 bimestre?")
let note2 = prompt("Qual a nota do 2 bimestre?")
let note3 = prompt("Qual a nota do 3 bimestre?")
let note4 = prompt("Qual a nota do 4 bimestre?")

let average = (Number(note1) + Number(note2) + Number(note3) + Number(note4)) / 4

let result = average > 6

average = average.toFixed(2)

if (result) {
    alert(`Muito bem ${student}! Sua média foi ${average} Você foi aprovado.`)
} else {
    alert(` ${student} Estude para prova de recuperação! Sua média foi ${average}`)
}