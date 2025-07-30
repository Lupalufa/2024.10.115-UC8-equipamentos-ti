'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('setor', "criado_em", {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
      ,
    });
      await queryInterface.addColumn('setor', "atualizado_em", {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
        ,
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('setor', 'criado_em');
    await queryInterface.removeColumn('setor', 'atualizado_em');
  }
};
