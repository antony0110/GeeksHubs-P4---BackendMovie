const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

//importacion de modulos
const Peliculas = require('./moduls/peliculas');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Pelis
app.get('/Peliculas', (req, res) => {
    let id = req.query.id
    Peliculas.findAll({ where: { id: id }}).then( peliculas => {
        res.json(peliculas);
    });
});

//Cine
// app.get('/Cines', (req, res) => {
//     let id = req.query.id
//     Movie.findAll({ where: { id: id }}).then( movies => {
//         res.json(movies);
//     });
// });


//Actores
// app.get('/Actores', (req, res) => {
    // let _id = req.query.id
    // Movie.findAll({ where: { id: _id }}).then( movies => {
        // res.json(movies);
    // });
                                    //   
// });

app.listen(PORT, () => {
console.log(`El Servidor está inicializado en ${PORT}`);
});