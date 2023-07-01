    function combustivel(){
        var etanol = document.querySelector('#eta')
        var alcool = document.querySelector('#alc')

        if ((etanol.value/alcool.value)<=0.7){
            document.querySelector('#res').innerHTML='Etanol'
        }else{
            document.querySelector('#res').innerHTML='Alcool'
        }
    }