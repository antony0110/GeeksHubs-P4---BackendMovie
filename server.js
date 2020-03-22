const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`El Servidor está inicializado en ${PORT}`);
});

app.get('/Peliculas', (req, res) => {
    let _id = req.query.id
    Movie.findAll({ where: { id: _id }}).then( movies => {
        res.json(movies);
    });
});
app.get('/Cines', (req, res) => {
    let _id = req.query.id
    Movie.findAll({ where: { id: _id }}).then( movies => {
        res.json(movies);
    });
});
app.get('/Actores', (req, res) => {
    let _id = req.query.id
    Movie.findAll({ where: { id: _id }}).then( movies => {
        res.json(movies);
    });
});