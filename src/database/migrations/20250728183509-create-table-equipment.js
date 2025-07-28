'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('equipamento', {
      equipamento_nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipo: {
        type: DataTypes.ENUM("notebook", "desktop", "impressora"),
        allowNull: false,
      },
      numero_patrimonio: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      usuario_responsavel: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      status: {
        type: DataTypes.ENUM('ativo', 'manutenção', 'desativado'),
        allowNull: false,
      },
      setorId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'setor',
          key: 'nome'
        },
        onUpdate: 'CASCADE'
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('equipamento');

  }
};
