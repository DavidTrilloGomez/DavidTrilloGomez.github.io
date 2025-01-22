const form = document.querySelector('#contactoForm')

form.addEventListener('submit', handleSubmit)


function handleSubmit(event){
    event.preventDefault()
    new FormData(this)
    console.log(form)
}