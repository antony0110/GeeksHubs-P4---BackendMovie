const Sequelize = require('sequelize');
const sqlz = require('./sequelize');


class peliculas extends Sequelize.Model {}

peliculas.init(
    {
        title: { type: Sequelize.STRING }, 
        author: { type: Sequelize.STRING},
        cines: { type: Sequelize.STRING},
        estreno: {type: Sequelize.BOOLEAN}
    },
    {
        sequelize :sqlz,
        modelName: 'peliculas'
    }
);

peliculas.sync({ force: true }).then(() => {
      peliculas.create({
      title: 'Soy Leyenda',
      author: 'Will Smitch',
      cines:"valencia",
      estreno:"true" 
    });
});

module.exports = { peliculas }