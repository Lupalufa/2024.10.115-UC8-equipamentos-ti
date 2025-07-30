# Gestão Empresa

Sistema de gestão de notebooks e usuários, com autenticação JWT, desenvolvido em Node.js, Express e Sequelize, utilizando PostgreSQL como banco de dados.

## Sumário

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Rotas da API](#rotas-da-api)
- [Observações Importantes](#observações-importantes)
- [Testando a API](#testando-a-api)
- [Contato](#contato)

---

## Requisitos

- Node.js (v16+)
- PostgreSQL

---

## Instalação

1. Clone o repositório:
   ```sh
   git clone <url-do-repositorio>
   cd gestao_empresa

2. Instale as dependências
npm install

## Configuração da .env

DB_USER=postgres
DB_HOST=localhost
DB_DATABASE= Nome do database
DB_PASSWORD= Senha do banco de dados
DB_PORT= Porta do banco de dados
PORTA= Porta

TEMPO_ACESS_TOKEN="tempo do token de acesso"
TEMPO_REFRESH_TOKEN="tempo de refresh_token"
SECRET_KEY= "Senha secreta"
JWT_REFRESH_SECRET="Senha secreta do refresh-Token"
NODE_ENV=

## inicie o servidor
node index.js

## Funcionalidades 
Autenticação JWT (login, logout, refresh token)
Cadastro de Usuário (com senha criptografada)
Perfil do Usuário (protegido por token)
CRUD de Notebooks (protegido por token)



