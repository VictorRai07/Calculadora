function retangulo(){
    var base = document.querySelector('#bas')
    var altura = document.querySelector('#alt')

    var resposta = base.value*altura.value
    document.querySelector('#res').innerHTML = resposta
}