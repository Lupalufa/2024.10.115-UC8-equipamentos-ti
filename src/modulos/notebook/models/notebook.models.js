const { DataTypes } = require('sequelize')
const { sequelize } = require('../../../config/configDB')

const Notebook = sequelize.define(
    'Notebook',
    {
        equipamento_nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        numero_patrimonio: {
            type: DataTypes.STRING,
            primaryKey: true,
            validate: {
                is: {
                    args: /^[A-Z0-9\-]{8,20}/,
                    msg: 'Insira um serial válido com letras, numeros com hifens ou underline com no minimo 8 caracteres e no maximo 20 caracteres'
                }
            }
        },
        usuario_responsavel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

module.exports = Notebook