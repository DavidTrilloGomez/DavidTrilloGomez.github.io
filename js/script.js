const form = document.querySelector('#contactoForm')

const serviceId = "service_oazyo6k"
const templateId = "template_fgbcfmb"
const apikey = "ao9J5WhZ0Hdafu2y9"

form.addEventListener('submit', handleSubmit)



function handleSubmit(event){
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId, templateId, form, apikey).then(result => FileSystemWritableFileStream.fire('Su mensaje se ha enviado con éxito.'))

    window.alert("Mensaje enviado con éxito")
}

