function mudar(){
    var mensagem = document.getElementById('msg');
    var imagem = document.getElementById('imagem');
   
    var data =  new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    mensagem.innerHTML = `Agora são ${hora} : ${minuto} . Os Lycans caçam a essa hora , cuidado!`; 

    
    if( hora >= 0 && hora < 12){
        imagem.src = 'imagens/1 - F80MvI8.png';
        mensagem.innerHTML = `Agora são ${hora} : ${minuto} . Os Lycans caçam a essa hora , cuidado!`;
        document.body.style.background = '#e2cd9f';

    }else if(hora>=12 && hora < 18){
        imagem.src = 'imagens/2 - X0NcrVS.png';
        mensagem.innerHTML = `Agora são ${hora} : ${minuto} . Os Predadores caçam a essa hora , cuidado!`;
        document.body.style.background = '#B8860B';
    }else{
        imagem.src = 'imagens/3 - KvtKmEd.png';
        mensagem.innerHTML = `Agora são ${hora} : ${minuto} . Os Tundras caçam a essa hora , cuidado!`;
        document.body.style.background = '#515154';
    }
}