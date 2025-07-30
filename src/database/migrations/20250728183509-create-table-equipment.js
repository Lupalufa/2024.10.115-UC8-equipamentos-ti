'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('equipamento', {
      equipamento_nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo: {
        type: Sequelize.ENUM("notebook", "desktop", "impressora"),
        allowNull: false,
      },
      numero_patrimonio: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      usuario_responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'email'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      status: {
        type: Sequelize.ENUM('ativo', 'manutenção', 'desativado'),
        allowNull: false,
      },
      setorId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'setor',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('equipamento');

  }
};
