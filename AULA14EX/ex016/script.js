function contar() {
    var res = document.getElementById('res')
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO! Faltam dados')
    }else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if (passo<=0) {
            alert('Passo inválido! Considerando PASSO 1')
            var passo = 1
        }
        if (inicio < fim) {
            //crescente
            for (var inicio = inicio; inicio <= fim; inicio+=passo) {
                res.innerHTML += `${inicio} \u{1F449}`
            }
        }else {
            for (var inicio = inicio; inicio >= fim; inicio-=passo) {
                res.innerHTML += `${inicio} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}
