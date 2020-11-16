let valores = []
function adicionar(){
    let num = document.getElementById('numero')
    let lista = document.getElementById('sellista')
    let num2 = Number.parseInt(num.value)

    if(num.value.length == 0){
        alert('Caixa de texto vazia!')
    }else{
        if(num2 >= 1 && num2 <= 100){
            if(valores.indexOf(num2) != -1){
                alert('Valor existente')
            }else{
                let item = document.createElement('option')
                item.text = `Valor ${num2} adicionado`
                lista.appendChild(item)
                valores.push(num2)
            }
        }else{
            alert('Número inválido!')
        }
        num.value = ' '
        num.focus()
    }

}

function finalizar(){
    let resultado = document.getElementById('resultado')
    if(valores.length == 0){
        alert('Tabela vazia!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let x in valores){
            soma = soma + valores[x]

            if(valores[x] > maior){
                maior = valores[x]
            }

            if(valores[x] < menor){
                menor = valores[x]
            }
        }
        resultado.innerHTML = ' '
        resultado.innerHTML += `<p> O número de elementos é ${total}</p>`
        resultado.innerHTML += `<p> O maior número é ${maior}</p>`
        resultado.innerHTML += `<p> O menor número é ${menor}</p>`
        resultado.innerHTML += `<p> a média é ${soma/valores.length}</p>`
        resultado.innerHTML += `<p> a soma dos valores é ${soma}</p>`

    }
}