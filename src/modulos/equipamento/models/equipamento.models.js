const { DataTypes } = require('sequelize')
const { sequelize } = require('../../../config/configDB')
const SetorModel = require("../../setor/models/setor.model")
 
const Equipamento = sequelize.define(
    'Equipameto',
    {
        equipamento_nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.ENUM("notebook", "desktop", "impressora"),
            allowNull: false,
            validate: {
                isIn: {
                    args: [["notebook", "desktop", "impressora"]],
                    msg: "Só é possível inserir notebook, desktop e impressora"
                }
            }
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
            references: {
                model: 'usuario',
                key: 'id'
            }
        },
        status: {
            type: DataTypes.ENUM('ativo', 'manutenção', 'desativado'),
            allowNull: false,
            validate: {
                isIn: {
                    args: [['ativo', 'manutenção', 'desativado']],
                    msg: "Só é possível inserir status de ativo, manutenção ou desativado"
                }
            }
        },
        setorId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'setor',
                key: 'nome'
            }
        }
    },
    {
        tableName: "equipamento",
        createdAt: "criado_em",
        updatedAt: "atualizado_em"
    }
)

module.exports = Equipamento