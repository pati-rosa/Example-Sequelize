const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static init(sequelize) {
       super.init(
           {
               name: Sequelize.STRING,
               email: Sequelize.STRING,
               password: Sequelize.STRING    //variaveis que não são gerenciadas pelo sequelize
           }, {
               sequelize  //conexão com o banco
           }
       );
       return this
    }
}

module.exports = User;