export default function Modal(){


    const wrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //Funcionalidade de atribuir a classe active para modal
        wrapper.classList.add("active")
    }
    function close(){
        //funcionalidade de removar a classe active da modal
        wrapper.classList.remove("active")
    }


    return{
        open,
        close
    }
}