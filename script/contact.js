function sendEmail() {
    const emailjsConfig = {
        serviceID: 'service_tch8qpj',
        templateID: 'template_l9z9f4g',
        userID: 'LeYUgSy7zxMQyvR46'
    };

    emailjs.send(emailjsConfig.serviceID, emailjsConfig.templateID, {
        to_name: 'Recipient Name',
        from_name: 'Your Name',
        message: 'This is the message content'
    }, emailjsConfig.userID)
        .then((response) => {
            console.log('Email sent successfully!', response);
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    sendEmail();
});