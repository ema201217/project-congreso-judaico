async function sendEmail(form, alerts = {}) {
  try {
    const serviceID = "default_service";
    const templateID = "template_cj3bl4k";
    const changeMsgBtn = () => $("#form-button span").text("Consultando...");
    const changeMsgDefault = () => $("#form-button span").text("Consultanos");
    changeMsgBtn();
    /* emailjs ==> libraries emailjs ==> under script form */
    await emailjs.sendForm(serviceID, templateID, form);
    changeMsgDefault();
    alerts?.success();
    form.reset();
  } catch (err) {
    changeMsgDefault();
    console.log(err.message);
    alerts?.error();
    location.reload();
  }
}
