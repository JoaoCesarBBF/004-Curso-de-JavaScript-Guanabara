let num = document.getElementById('txtnum')
let res = document.getElementById('res')
let vet = []



function adicionar(){
    //let num = document.getElementById('txtnum')
    //let res = document.getElementById('res')
    let lista = document.getElementById('selnum')
    let n = Number(num.value)
    //let vet = []
    
    if (num.value == '' || num.value < 1 || num.value > 100){
        window.alert('[ERRO] Verifique o Número')
    } else if (vet.indexOf(n) != -1){
        window.alert('[ERRO] Numero já presente')
    } else{
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        lista.appendChild(item)
        vet.push(n)
    }
    res.innerHTML = ''
}

function finalizar(){
    //let res = document.getElementById('res')
    let soma = 0
    for (i = 0;i<vet.length;i++){
        soma += vet[i]
    }
    let maior = vet[0]
    let menor = vet[0]
    for (let pos in vet){
        if (vet[pos] > maior){
            maior = vet[pos]
        }
        if (vet[pos] < menor){
            menor = vet[pos]
        }
    }
    num.value = ''
    num.focus()
    //vet.sort((a,b) => a- b)
    vet.sort(function (a,b) {
        return a - b
    })
    res.innerHTML = `Nosso vetor é ${vet} <br>`
    res.innerHTML += `Ao todo, temos ${vet.length} números cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${vet[(vet.length-1)]}.<br>`
    res.innerHTML += `O menor valor informado foi ${vet[0]}.<br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML += `A média dos valores digitados é ${soma/vet.length}.<br>` 
    
}