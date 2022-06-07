const btn = document.getElementById('form-button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.firstElementChild.textContent = 'Consultando...';

   const serviceID = 'default_service';
   const templateID = 'template_cj3bl4k';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.firstElementChild.textContent = 'Consultanos';
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje enviado',
        showConfirmButton: false,
        timer: 2000
      })
    }, (err) => {
      btn.firstElementChild.textContent = 'Consultanos';
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error al enviar el mensaje',
        showConfirmButton: false,
        timer: 2000
      })
    });
});