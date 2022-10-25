const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
let initialPath = path.join(__dirname, "Public");
let app = express();

app.use(express.static(initialPath));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"));
})


app.post('/mail', (req, res) => {
    const { firstname, lastname, email, msg } = req.body;

    /*const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })*/
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'kacey.durgan@ethereal.email',
            pass: 'ThYbfweNWWEjes3RwR'
        }
    });

    const mailOptions = {
        from: '<kacey.durgan@ethereal.email>',
        to: req.body.email,
        subject: 'Postfolio',
        text: `First name: ${firstname}, \nLast name: ${lastname}, \nEmail: ${email}, \nMessage: ${msg}`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.json('oops! it seems like some error occurred please try again.');
        }
        else {
            console.log('Email sent' + info.response);
            res.json('thanks for e-mailing me. I will reply to you within 2 working days.');
        }
    })
    res.status(200).send('Send email successfully');
});


app.listen(3000, () => {
    console.log('listening......');
})










