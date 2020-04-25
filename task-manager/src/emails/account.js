const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = "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";


sgMail.setApiKey(sendgridAPIKey);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "kartikrobin@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know you get along with the app.`
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "kartikrobin@gmail.com",
        subject: "Sorry to see you go!",
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    });
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}