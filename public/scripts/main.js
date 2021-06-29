import  Modal  from './modal.js'

const modal = Modal()

//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")


checkButtons.forEach( button =>{
    //adcionar a escuta
    button.addEventListener("click", event => {
        //abrir moda
        modal.open()
    })

})
//pegar quando o marcar comolido for clicado

