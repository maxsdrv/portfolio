const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'aida35@ethereal.email',
        pass: 'WpCDmXr8Ua546QwaU1'
    }
});

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err);
        console.log('Email sent: ', info);
    });
}

module.exports = mailer;