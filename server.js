const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

//importacion de modulos
const {Peliculas} = require('./moduls/peliculas');
const {Actores} = require('./moduls/actores')
const {Cines} = require('./moduls/cines')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Pelis
app.get('/Peliculas', (req, res) => {
    let title = req.query.title;
    if (!req.query.title){
        Peliculas.findAll().then( pelis => {
            res.json((pelis));
        });
        }else{
      Peliculas.findAll({ where: { title : title }}).then( movies => {
                res.json(movies);
    })
    }   
})
app.get('/Peliculas/:id', (req, res) => {
    let id = req.params.id
    Peliculas.findAll({ where: { id: id }}).then( Peliculas => {
        res.json(Peliculas);
    });
});


//Actores
app.get('/Actores', (req, res) => {
    let title = req.query.title;
    if (!req.query.title){
        Actores.findAll().then( Actores => {
            res.json((Actores));
        });
        }else{
      Actores.findAll({ where: { title : title }}).then( Actores => {
                res.json(Actores);
    })
    }   
})
app.get('/Actores/:id', (req, res) => {
    let id = req.params.id
    Actores.findAll({ where: { id: id }}).then( Actores => {
        res.json(Actores);
    });
});

//Cines
app.get('/Cines', (req, res) => {
    let provincia = req.query.provincia;
    if (!req.query.provincia){
        Cines.findAll().then(  Cines => {
            res.json((Cines));
        });
        }else{
            Cines.findAll({ where: { provincia : provincia }}).then( Cines => {
                res.json(Cines);
    })
    }   
})
app.get('/Cines/:name', (req, res) => {
    let name = req.params.name
    Cines.findAll({ where: { name: name }}).then( Cines => {
        res.json(Cines);
    });
});
app.listen(PORT, () => {
console.log(`El Servidor está inicializado en ${PORT}`);
});