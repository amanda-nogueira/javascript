/**
 * Simples carrossel de imagens
 * @author Amanda
 */
let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 3000 //ajuste do tempo da troca de imagens
let indice = 0 //apoio a lógica

show()

function show(){
    //a linha abaixo adiciona a classe fadeOut ao documento html na tag identificada como slide
    document.getElementById('slide').className += 'fadeOut'
    //setTimeout(gera um temporizador)
    setTimeout(()=>{
        document.getElementById('slide').src = (`img/${slides[indice]}`)
        document.getElementById('slide').className =''
        }, 1000)
    indice++
    if(indice === slides.length){ //.length (tamanho máximo)
        indice = 0
    }
    setTimeout(show, intervalo) //executar a função a cada 3 segundos
}