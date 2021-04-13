const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Sends welcome email to new user
const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "gabrielsmerlin@outlook.com",
    subject: "Thanks for joining us!",
    text: `Welcome to the app ${name}, let me know how you get along with the app!`,
  });
};

// Sends cancellation email when the person deletes their account
const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "gabrielsmerlin@outlook.com",
    subject: "We're sorry that you've left us!",
    text: `${name}, thank you for your time using our application. Could you please let us know what we could have done to have kept you as a costumer?`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
