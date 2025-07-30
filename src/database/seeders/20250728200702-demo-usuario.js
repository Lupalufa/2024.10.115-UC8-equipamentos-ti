'use strict';
const bcrypt = require("bcryptjs")
const { v4: uuidv4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const senhaCriptografada = 
    await queryInterface.bulkInsert('usuario', [
      {
        id: uuidv4(),
        nome: 'Alice Silva',
        papel: 'admin',
        email: 'alice.silva@email.com',
        senha: await bcrypt.hash('senha123', 10),
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Bruno Souza',
        papel: 'ti',
        email: 'bruno.souza@email.com',
        senha: await bcrypt.hash('senha123', 10),
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Carla Lima',
        papel: 'colaborador',
        email: 'carla.lima@email.com',
        senha: await bcrypt.hash('senha123', 10),
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Daniel Costa',
        papel: 'admin',
        email: 'daniel.costa@email.com',
        senha: await bcrypt.hash('senha123', 10),
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Eduarda Rocha',
        papel: 'ti',
        email: 'eduarda.rocha@email.com',
        senha: await bcrypt.hash('senha123', 10),
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Felipe Alves',
        papel: 'colaborador',
        email: 'felipe.alves@email.com',
        senha: await bcrypt.hash('senha123', 10),
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Gabriela Dias',
        papel: 'admin',
        email: 'gabriela.dias@email.com',
        senha: await bcrypt.hash('senha123', 10),
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Henrique Melo',
        papel: 'ti',
        email: 'henrique.melo@email.com',
        senha: await bcrypt.hash('senha123', 10),
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'Isabela Martins',
        papel: 'colaborador',
        email: 'isabela.martins@email.com',
        senha: await bcrypt.hash('senha123', 10),
        criado_em: new Date(),
        atualizado_em: new Date()
      },
      {
        id: uuidv4(),
        nome: 'João Pedro',
        papel: 'admin',
        email: 'joao.pedro@email.com',
        senha: await bcrypt.hash('senha123', 10),
        criado_em: new Date(),
        atualizado_em: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
