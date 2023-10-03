const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.listen(port, () => {
    console.log(`Server is running on port ${3000}`);
});
app.use('/images/', express.static('./images'));
