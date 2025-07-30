'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('equipamento', "criado_em", {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
      ,
    });
      await queryInterface.addColumn('equipamento', "atualizado_em", {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
        ,
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('equipamento', 'criado_em');
    await queryInterface.removeColumn('equipamento', 'atualizado_em');
  }
};
