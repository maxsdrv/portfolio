const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mailer = require('./nodemailer');

const PORT = 3000;

dotenv.config();
let app = express();

app.use(express.static(__dirname + '/Public'));
app.use(express.json());

const urlencodedParser = express.urlencoded({ extended: false });

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/Public/index.html');
})


app .post('/mail', (req, res) => {
    const {firstname, lastname, email, msg} = req.body;

    const mailOptions = {
        from: 'MyWebSite <maxim_sdrv@mail.ru',
        to: req.body.email,
        subject: 'Portfolio',
        text: `First name: ${firstname}, \nLast name: ${lastname}, \nEmail: ${email},
        \nMessage: ${msg}`
    }    
    mailer(mailOptions);
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`server listening at http://localhost:${PORT}/index`);
});










