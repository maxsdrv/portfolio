const express = require('express');
const path = require('path');
// const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const mailer = require('./nodemailer');

const PORT = 3000;

dotenv.config();
// let initialPath = path.join(__dirname, "Public");
let app = express();

// app.use(express.static(initialPath));
// app.use(express.json());

app.use(express.static(__dirname + '/Public'));

const urlencodedParser = express.urlencoded({ extended: false });

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/Public/index.html');
})


app.post('/mail', urlencodedParser, (req, res) => {
    if (!req.body)
        return res.sendStatus(400);
    console.log(req.body);
    const { firstname, lastname, email, msg } = req.body;

    const message = {
        to: req.body.email,
        subject: 'Postfolio',
        text: `First name: ${firstname}, \nLast name: ${lastname}, \nEmail: ${email}, \nMessage: ${msg}`
    }
    mailer(message);

    /*transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.json('oops! it seems like some error occurred please try again.');
        }
        else {
            console.log('Email sent' + info.response);
            res.json('thanks for e-mailing me. I will reply to you within 2 working days.');
        }
    })*/
});


app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`server listening at http://localhost:${PORT}/index`);
})










