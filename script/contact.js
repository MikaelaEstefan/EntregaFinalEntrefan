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
        setTimeout(showSuccessAlert, 500); // Retrasar la llamada a showSuccessAlert()
    })
      .catch((error) => {
        console.error('Error sending email:', error);
        showErrorAlert();
    });
}
  
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
  
