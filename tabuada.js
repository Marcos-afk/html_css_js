function tab(){
    var numero = document.getElementById('numero');
    var resultado = document.getElementById('selTab');
    if(numero.value.length == 0 ){
        alert('Caixa de texto vazia!');
    }else{
        resultado.innerHTML = ' ';
        var numero2 = Number(numero.value);
        for(let x = 0 ; x <= 10 ; x++){
            let item = document.createElement('option');
            item.text = ` ${numero2} * ${x} = ${numero2*x}`;
            item.value = `tab ${x}`
            resultado.appendChild(item);
        }
       
    }
}