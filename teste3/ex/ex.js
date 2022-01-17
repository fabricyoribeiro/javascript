function calcular() {
    var nome = document.getElementById('nome')
    var res = document.getElementById('res')
    var sex = document.getElementsByName('radsex')
    var nota1 = document.getElementById('nota1')
    var nota2 = document.getElementById('nota2')
    var media = (Number(nota1.value) + Number(nota2.value)) / 2
    var genero = ''
    res.innerHTML = ''
    if (sex[0].checked) {
        genero = 'Masculino'
    }else if (sex[1].checked) {
        genero = 'Feminino'
    }
    res.innerHTML += `Nome: ${nome.value} <br>`
    res.innerHTML += `Genero: ${genero} <br>`
    res.innerHTML += `Média: ${media} <br>`
    nome.value = ''
    nome.focus()
    nota1.value = ''
    nota1.focus()
    nota2.value = ''
    nota2.focus()
    
    


}
var sec = document.getElementById('sec')
function entrar() {
    sec.style.background = 'white'
}
function sair() {
    sec.style.background = 'rgba(123, 123, 124, 0.582)'
}