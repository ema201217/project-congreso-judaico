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
      alert('Sent!');
    }, (err) => {
      btn.firstElementChild.textContent = 'Consultanos';
      alert(JSON.stringify(err));
    });
});