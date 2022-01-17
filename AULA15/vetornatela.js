let valores = [3, 5, 1, 3, 7]
/*for (let i = 0; i <= valores.length; i++) {
    console.log(valores[i])
}*/

for (let pos in valores) {
    console.log(valores[pos])
    pos++
}