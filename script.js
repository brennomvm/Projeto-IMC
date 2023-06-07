const botao = document.querySelector('#botao')

const peso = document.querySelector('#input-peso')

const altura = document.querySelector('#input-altura')

const resultado = document.querySelector('#resultado')





function validaImc (peso , altura){

    let imc = peso / (altura * altura)
    
    console.log(imc);

    if(imc < 18.5){
        resultado.innerHTML ='Você está abaixo do peso ! .'
    } 
    
    else if(imc < 25){
        resultado.innerHTML ='Você está no do peso ideal . Parabéns ! '
    } 
    
    if(imc > 25){
        resultado.innerHTML ='Você está acima do peso. Cuidado'
    }
}



botao.onkeydown = function(evento){
    
    if( evento.code === "Enter"){

        validaImc(peso.value, altura.value);
    }
}


botao.addEventListener('click' , ()=>{

  
    validaImc(peso.value, altura.value)

})
