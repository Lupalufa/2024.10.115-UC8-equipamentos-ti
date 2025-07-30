'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('setor', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(120),
        allowNull: false,
        unique: true
      },

      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });


    await queryInterface.addIndex("usuario", ["email"])
    await queryInterface.addIndex('usuario', ["papel"])
    await queryInterface.addIndex('usuario', ["id"])
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('setor');

  }
};
