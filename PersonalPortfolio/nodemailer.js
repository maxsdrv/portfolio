const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'maxim_sdrv@mail.ru',
            pass: 'ryjsCqn1be4vcyarnr89'
        }
    },
    {
        from: 'Mailer test <maxim_sdrv@mail.ru>',
    });

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err);
        console.log('Email sent: ', info);
    });
}

module.exports = mailer;