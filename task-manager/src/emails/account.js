const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = "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";


sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: "kartikrobin@gmail.com",
    from: "kartikrobin@gmail.com",
    subject: "This is my first creation!",
    text: "I hope this one actually get to you."
}).then(() => {
    console.log('Message sent')
}).catch((error) => {
    console.log(error.response.body);
});