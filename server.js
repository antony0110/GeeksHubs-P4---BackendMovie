const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

//importacion de modulos
const {Peliculas} = require('./moduls/peliculas');


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