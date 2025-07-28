'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuario', [
      {
        id: 'A1234',
        nome: 'Alice Silva',
        papel: 'admin',
        email: 'alice.silva@email.com',
        senha: 'Senha@123',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 'B2345',
        nome: 'Bruno Souza',
        papel: 'ti',
        email: 'bruno.souza@email.com',
        senha: 'Bruno@2024',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 'C3456',
        nome: 'Carla Lima',
        papel: 'colaborador',
        email: 'carla.lima@email.com',
        senha: 'Carla#2024',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 'D4567',
        nome: 'Daniel Costa',
        papel: 'admin',
        email: 'daniel.costa@email.com',
        senha: 'Daniel@2024',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 'E5678',
        nome: 'Eduarda Rocha',
        papel: 'ti',
        email: 'eduarda.rocha@email.com',
        senha: 'Eduarda#2024',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 'F6789',
        nome: 'Felipe Alves',
        papel: 'colaborador',
        email: 'felipe.alves@email.com',
        senha: 'Felipe@2024',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 'G7890',
        nome: 'Gabriela Dias',
        papel: 'admin',
        email: 'gabriela.dias@email.com',
        senha: 'Gabriela#2024',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 'H8901',
        nome: 'Henrique Melo',
        papel: 'ti',
        email: 'henrique.melo@email.com',
        senha: 'Henrique@2024',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 'I9012',
        nome: 'Isabela Martins',
        papel: 'colaborador',
        email: 'isabela.martins@email.com',
        senha: 'Isabela#2024',
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: 'J0123',
        nome: 'João Pedro',
        papel: 'admin',
        email: 'joao.pedro@email.com',
        senha: 'Joao@2024',
        criado_em: new Date(),
        atualizado_em: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
