const Sequelize = require('sequelize');
const sqlz = require('./sequelize');

const faker = require('faker');
const times = require("lodash.times");
const random = require("lodash.random");
let r = Math.random < 0.5;
class Actores extends Sequelize.Model {}

Actores.init(
    {
        nombre: { type: Sequelize.STRING }, 
        title: { type: Sequelize.STRING},
        
    },
    {
        sequelize :sqlz,
        modelName: 'Actores'
    }
);

Actores.sync({ force: false }).then(() => {
     // Actores.bulkCreate(times(10, ()=>({
     //  nombre:    `${faker.name.findName()}`,
      // title:   `${faker.name.jobTitle()}`,
    //})));
});

module.exports = { Actores }