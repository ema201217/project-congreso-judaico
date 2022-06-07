const errorContainer = "#username-error, #email-error, #message-error";
const errorClass = "text-danger";
const rules = {
  username: {
    required: true,
  },
  email: {
    required: true,
    email: true,
  },
  message: {
    required: true,
  },
};
const messages = {
  username: "El nombre completo es requerido",
  email: {
    required: "El email es requerido",
    email: "Ingrese un email valido",
  },
  message: "Ingrese un mensaje",
};

const alerts = {
  success: () =>
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Mensaje enviado",
      showConfirmButton: false,
      timer: 2000,
    }),
  error: () =>
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Error al enviar el mensaje",
      showConfirmButton: false,
      timer: 2000,
    }),
};

const options = {
    errorContainer,
    errorClass,
    rules,
    messages,
    debug: true,
    submitHandler: (form) => sendEmail(form, alerts), /* sendEmail ==> sendemail.js */
};
  
$("#form").validate(options);