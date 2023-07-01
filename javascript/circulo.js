function circulo(){
    var raio = document.querySelector('#rai')

    var resposta = Math.PI * raio.value * raio.value
    document.querySelector('#res').innerHTML = resposta.toFixed(2)
}