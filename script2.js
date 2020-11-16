function interagir(){
    var data = new Date();
    var ano = data.getUTCFullYear();
    var Fano = document.getElementById('ano');
    var res = document.getElementById('res');

    if(Fano.value.length == 0 || Fano.value > ano  ){
        alert('Verifique os dados e tente novamente');
    }else{
        var fsexo = document.getElementsByName('sexo');
        var idade = ano - Number.parseFloat(Fano.value);
        var genero = '';
        var imagem = document.createElement('img');
        imagem.setAttribute('id' , 'foto');
        if(fsexo[0].checked){
            genero = 'Homem';
            if( idade >=0 && idade < 11 ){
            imagem.setAttribute('src' , 'Fotos Ex15 Curso JS/foto-bebe-m.png');
            }else if(idade >=11 && idade < 18){
            imagem.setAttribute('src' , 'Fotos Ex15 Curso JS/foto-jovem-m.png');
            }else if(idade >=18 && idade < 50){
                imagem.setAttribute('src' , 'Fotos Ex15 Curso JS/foto-adulto-m.png');
            }else{
                imagem.setAttribute('src' , 'Fotos Ex15 Curso JS/foto-idoso-m.png');
            }
        }else{
            genero = 'Mulher';
            if( idade >=0 && idade < 11 ){
                imagem.setAttribute('src' , 'Fotos Ex15 Curso JS/foto-bebe-f.png');
            }else if(idade >=11 && idade < 18){
                imagem.setAttribute('src' , 'Fotos Ex15 Curso JS/foto-jovem-f.png');
            }else if(idade >=18 && idade < 50){
                imagem.setAttribute('src' , 'Fotos Ex15 Curso JS/foto-adulto-f.png');
            }else{
                imagem.setAttribute('src' , 'Fotos Ex15 Curso JS/foto-idoso-f.png');
            }
        }
        res.style.textAlign = 'Center';
        res.innerHTML = ` Você é um(a) ${genero} com ${idade} anos`;
        res.appendChild(imagem);
    }
}