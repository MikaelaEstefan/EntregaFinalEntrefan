//-----------sendEmail------------//
//-------------------------------//
// Se ejecuta cuando se envía el formulario de contacto. Obtiene los valores de los campos del formulario, como el nombre del destinatario y el contenido del mensaje. //
// Se define un objeto emailjsConfig que contiene la configuración necesaria para enviar el correo. //
// Se usa el método send de EmailJS para enviar el correo electrónico. Se pasan los parámetros necesarios, como el ID del servicio, el ID de la plantilla y el ID de usuario. //
// Si el envío del correo electrónico es exitoso, se muestra un mensaje de éxito en la consola, restablece el formulario de contacto y muestra una alerta de éxito al usuario. 
// Si hay algún error durante el envío se muestra un mensaje de error en la consola y muestra una alerta de error al usuario.

function sendEmail() {
    const emailjsConfig = {
      serviceID: 'service_tch8qpj',
      templateID: 'template_l9z9f4g',
      userID: 'LeYUgSy7zxMQyvR46'
    };
  
    const toName = document.getElementById('recipientName').value;
    const fromName = document.getElementById('yourName').value;
    const messageContent = document.getElementById('messageContent').value;
  
    emailjs.send(emailjsConfig.serviceID, emailjsConfig.templateID, {
      to_name: toName,
      from_name: fromName,
      message: messageContent
    }, emailjsConfig.userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        document.getElementById('contactForm').reset();
        setTimeout(showSuccessAlert, 500); 
    })
      .catch((error) => {
        console.error('Error sending email:', error);
        showErrorAlert();
    });
}

//--------showSuccessAlert----------//
//---------------------------------//
// Alerta de éxito de SweetAlert. //

function showSuccessAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Email Sent!',
      text: 'Your message has been sent successfully.',
      confirmButtonText: 'OK',
      iconColor: '#414833',
      background: '#c2c5aa',
      color: '#3b3923'
    });
}

//----------showErrorAlert-----------//
//----------------------------------//
// Alerta de error de SweetAlert.  //
function showErrorAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Error Sending Email',
      text: 'An error occurred while sending the email. Please try again.',
      confirmButtonText: 'OK',
      iconColor: '#414833',
      background: '#c2c5aa',
      color: '#3b3923'
    });
}
  
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    sendEmail();
});
  
