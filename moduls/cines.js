const Sequelize = require('sequelize');
const sqlz = require('./sequelize');

const faker = require('faker');
const times = require("lodash.times");
const random = require("lodash.random");
let r = Math.random < 0.5;
class Cines extends Sequelize.Model {}

Cines.init(
    {
        Name: { type: Sequelize.STRING }, 
        Provincia: { type: Sequelize.STRING},
        estreno: {type: Sequelize.BOOLEAN}
    },
    {
        sequelize :sqlz,
        modelName: 'Cines'
    }
);

Cines.sync({ force: true }).then(() => {
       Cines.bulkCreate(times(10, ()=>({
      Name:    `${faker.name.findName()}`,
      Provincia:   `${faker.name.title()}`,
       estreno:  "true" 
     })));
});

module.exports = { Cines }