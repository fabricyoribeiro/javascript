function finalizar() {
    let lista = []
    let dict = {}
    let pessoa = {}
    let dict3 = {pessoa: {nome: 'joao', cpf: '123'}}
    let nome = document.getElementById('nome')
    let ano = document.getElementById('ano')
    let cpf = document.getElementById('cpf')
    if (nome.value.length == 0 || ano.value.length == 0 || cpf.value.length == 0) {
        alert('ERRO! Preencha todos os campos para poder finalizar')
    }else {
            let res = document.getElementById('res')
    let fsex = document.getElementsByName('radsex')
    let atual = new Date()
    let dataAtual = atual.getFullYear()
    let idade = Number(dataAtual) - Number(ano.value)
    var genero = ''
    if (fsex[0].checked) {
        genero = 'Masculino'
    }else if (fsex[1].checked) {
        genero = 'Feminino'
    }

    lista.push(nome.value)
    lista.push(cpf.value)
    lista.push(idade)
    lista.push(genero)

    dict.nome = lista
    


    console.log(pessoa)
    console.log(lista)
    console.log(dict)















    /*res.innerHTML += '<p>Cadastro concluido com sucesso!<br></p>'
    res.innerHTML +=  `<p>Nome do funcionário: ${nome.value}<br></p>`
    res.innerHTML += `<p>Idade: ${Number(idade)} anos<br></p>`
    res.innerHTML += `<p>CPF: ${Number(cpf.value)}<br></p>`
    res.innerHTML += `<p>Gênero: ${genero}<br></p>`*/
    nome.value = ''
    nome.focus()
    ano.value = ''
    ano.focus()
    cpf.value = ''
    cpf.focus()
    }

    
}
