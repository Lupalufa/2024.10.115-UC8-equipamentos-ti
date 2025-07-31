'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('equipamento', [
        {
          equipamento_nome: 'Notebook Dell',
          tipo: 'notebook',
          numero_patrimonio: 'NB-000001',
          usuario_responsavel: 'gabriela.dias@email.com',
          status: 'ativo',
          setorId: 'Logística',
          criado_em: new Date(),
          atualizado_em: new Date()
        },
        {
          equipamento_nome: 'Desktop HP',
          tipo: 'desktop',
          numero_patrimonio: 'DT-000002',
          usuario_responsavel: 'daniel.costa@email.com',
          status: 'manutenção',
          setorId: 'Logística',
          criado_em: new Date(),
          atualizado_em: new Date()
        },
        {
          equipamento_nome: 'Impressora Epson',
          tipo: 'impressora',
          numero_patrimonio: 'IM-000003',
          usuario_responsavel: 'alice.silva@email.com',
          status: 'ativo',
          setorId: 'Jurídico',
          criado_em: new Date(),
          atualizado_em: new Date()
        },
        {
          equipamento_nome: 'Notebook Lenovo',
          tipo: 'notebook',
          numero_patrimonio: 'NB-000004',
          usuario_responsavel: 'alice.silva@email.com',
          status: 'desativado',
          setorId: 'Compras',
          criado_em: new Date(),
          atualizado_em: new Date()
        },
        {
          equipamento_nome: 'Desktop Dell',
          tipo: 'desktop',
          numero_patrimonio: 'DT-000005',
          usuario_responsavel: 'henrique.melo@email.com',
          status: 'ativo',
          setorId: 'Atendimento ao Cliente',
          criado_em: new Date(),
          atualizado_em: new Date()
        },
        {
          equipamento_nome: 'Impressora HP',
          tipo: 'impressora',
          numero_patrimonio: 'IM-000006',
          usuario_responsavel: 'isabela.martins@email.com',
          status: 'manutenção',
          setorId: 'Recursos Humanos',
          criado_em: new Date(),
          atualizado_em: new Date()
        },
        {
          equipamento_nome: 'Notebook Acer',
          tipo: 'notebook',
          numero_patrimonio: 'NB-000007',
          usuario_responsavel: 'joao.pedro@email.com',
          status: 'ativo',
          setorId: 'Recursos Humanos',
          criado_em: new Date(),
          atualizado_em: new Date()
        },
        {
          equipamento_nome: 'Desktop Lenovo',
          tipo: 'desktop',
          numero_patrimonio: 'DT-000008',
          usuario_responsavel: 'bruno.souza@email.com',
          status: 'desativado',
          setorId: 'Recursos Humanos',
          criado_em: new Date(),
          atualizado_em: new Date()
        },
        {
          equipamento_nome: 'Impressora Canon',
          tipo: 'impressora',
          numero_patrimonio: 'IM-000009',
          usuario_responsavel: 'carla.lima@email.com',
          status: 'ativo',
          setorId: 'Recursos Humanos',
          criado_em: new Date(),
          atualizado_em: new Date()
        },
        {
          equipamento_nome: 'Notebook Samsung',
          tipo: 'notebook',
          numero_patrimonio: 'NB-000010',
          usuario_responsavel: 'daniel.costa@email.com',
          status: 'manutenção',
          setorId: 'Recursos Humanos',
          criado_em: new Date(),
          atualizado_em: new Date()
        }
      ], {});
    },

    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('equipamento', null, {});
    }
};
