const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    console.log(`Name: ${name}, Email: ${email}`);
    res.send(`Thank you, ${name}! We have received your email: ${email}.`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
