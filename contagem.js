

function contagem(){
    let incio = document.getElementById('incio');
    let final = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let mensagemF = document.getElementById('resultado');
   
    if(incio.value.length == 0 || final.value.length == 0 || passo.value.length == 0  ){
        alert('Não é possivel fazer a contagem , verifique os valores digitados');
    }else{ 
        let incio2 = Number(incio.value);
        let final2 = Number(final.value);
        let passo2 = Number(passo.value);
        if(passo2 == 0 || passo2 < 0){
            alert('passo inválido');
        }else{
        if(incio2 < final2){
        mensagemF.innerHTML = 'Contando:  ';
        for(let x = incio2 ; x <= final2 ; x = x + passo2){
            mensagemF.innerHTML += `${x}  `;    
        }

    }else if(final2 < incio2){
        mensagemF.innerHTML = 'Contando:  ';
           for(let x = incio2 ; x >=final2 ; x = x -passo2){
                mensagemF.innerHTML += `${x} `;
            }
    }else{
        alert('Valores iguais');
    }
    }
}
}