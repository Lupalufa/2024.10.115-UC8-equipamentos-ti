const { DataTypes } = require("sequelize")
const { sequelize } = require("../../../config/configDB")

const SetorModel = sequelize.define(
    'Setor',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(120),
            allowNull: false,
            unique: true
        },

        descricao: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: 'setor',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    }
)

module.exports = SetorModel