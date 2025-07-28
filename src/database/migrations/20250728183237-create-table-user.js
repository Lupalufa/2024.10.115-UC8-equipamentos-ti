'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      // Regex de 1 Letra maiuscula e 4 digitos númerico de 1° Letra maiuscula para depois números
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      papel: {
        type: Sequelize.ENUM("colaborador", "ti", "admin"),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      // Senha de minimo 8 caracter com letra maiuscula, minuscula e caracter especial
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('usuario');

  }
};
