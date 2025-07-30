'use strict';

const { v4: uuidv4 } = require('uuid')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('setor', [
      {
      id: uuidv4(),
      nome: 'Financeiro',
      descricao: 'Responsável pelo controle financeiro da empresa',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      id: uuidv4(),
      nome: 'Recursos Humanos',
      descricao: 'Gestão de pessoas e processos trabalhistas',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      id: uuidv4(),
      nome: 'Tecnologia da Informação',
      descricao: 'Gerenciamento de sistemas e infraestrutura de TI',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      id: uuidv4(),
      nome: 'Marketing',
      descricao: 'Promoção e divulgação da empresa',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      id: uuidv4(),
      nome: 'Vendas',
      descricao: 'Responsável pelas vendas de produtos e serviços',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      id: uuidv4(),
      nome: 'Operações',
      descricao: 'Gerenciamento das operações diárias',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      id: uuidv4(),
      nome: 'Logística',
      descricao: 'Controle de estoque e distribuição',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      id: uuidv4(),
      nome: 'Jurídico',
      descricao: 'Assuntos legais e jurídicos da empresa',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      id: uuidv4(),
      nome: 'Compras',
      descricao: 'Aquisição de materiais e serviços',
      criado_em: new Date(),
      atualizado_em: new Date()
      },
      {
      id: uuidv4(),
      nome: 'Atendimento ao Cliente',
      descricao: 'Suporte e atendimento aos clientes',
      criado_em: new Date(),
      atualizado_em: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('setor', null, {});
  }
};
