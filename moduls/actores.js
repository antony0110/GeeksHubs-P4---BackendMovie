const Sequelize = require('sequelize');
const sqlz = require('./sequelize');

const faker = require('faker');
const times = require("lodash.times");
const random = require("lodash.random");
let r = Math.random < 0.5;
class Actores extends Sequelize.Model {}

Actores.init(
    {
        title: { type: Sequelize.STRING }, 
        author: { type: Sequelize.STRING},
        cines: { type: Sequelize.STRING},
        estreno: {type: Sequelize.BOOLEAN}
    },
    {
        sequelize :sqlz,
        modelName: 'Peliculas'
    }
);

Peliculas.sync({ force: false }).then(() => {
    //   Peliculas.bulkCreate(times(10, ()=>({
    //   title:    `${faker.name.findName()}`,
    //   author:   `${faker.name.firstName()}`,
    //   cines:    `${faker.name.jobTitle()}`,
    //   estreno:  "true" 
    // })));
});

module.exports = { Peliculas }