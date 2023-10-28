const Sequelize = require('sequelize');

const sequelize = new Sequelize('sudeshnadb', 'root', '123Silicon', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
