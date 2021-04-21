function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let FormularioAno = document.getElementById(`ano`)
    let nacimento = FormularioAno.value
    let resultado = document.getElementById(`resultado`)
    let img = document.createElement(`img`)
    if(nacimento > ano || nacimento == 0){
        window.alert(`[ERRO] Verifique os dados e tente 
        novamente!`)
    } else{
        let sexM = document.getElementById(`masculino`)
        let idade = ano - nacimento
        let genero = ``
        if (sexM.checked){
            genero = `homen`
                //crianca
            if(idade >= 0 && idade < 18){
                img.setAttribute(`src`, `menino-editada.png`)
                //adulto
            } else if(idade >= 18 && idade < 60){
                img.setAttribute(`src`, `homen-editada.png`)
                //idoso
            } else if(idade < 100 ){
                img.setAttribute(`src`, `velho.png`)
                //morto
            } else{
                img.setAttribute(`src` , `morto.png`)
            }
            
        } else {
            genero = `feminino`
               //crianca
               if(idade >= 0 && idade < 18){
                img.setAttribute(`src`, `menina.png`)
                //adulto
            } else if(idade >= 18){
                img.setAttribute(`src`, `mulher.png`)
                //idoso
            } else if(idade < 100){
                img.setAttribute(`src`, `velha.png`)
                //morto
            } else{
                img.setAttribute(`src` , `morto.png`)
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com 
        ${idade} anos`
        resultado.appendChild(img)
    }
    
}