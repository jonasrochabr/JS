/*

1- Capture 10 items para compor um lista de supermercado.

2- Após a caputa, imprima-os, separando por vírgula. 

*/

let items = []

for(let item = 0; item < 10; item++) {
    let itemName = prompt("Digite o item " + (item + 1))

    items[item] = itemName
}

alert(items)