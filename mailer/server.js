const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/registration', (req, res) => {
    res.sendFile(__dirname + '/registration.html');
});

app.post('/registration', (req, res) => {
    console.log(req.body);
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`server listening at http://localhost:${PORT}/registration`);
});


















