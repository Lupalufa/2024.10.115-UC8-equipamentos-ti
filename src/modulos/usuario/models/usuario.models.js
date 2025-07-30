const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB')

const Usuario = sequelize.define(
    'Usuario',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Regex de 1 Letra maiuscula e 4 digitos númerico de 1° Letra maiuscula para depois números
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        papel: {
            type: DataTypes.ENUM("colaborador", "ti", "admin"),
            allowNull: false,
            validate: {
                isIn: {
                    args: [["colaborador", "ti", "admin"]],
                    msg: "O papel deve ser usuario."
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: { msg: "Email Inválido"}
            }
        },
        // Senha de minimo 8 caracter com letra maiuscula, minuscula e caracter especial
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/,
                    msg: 'A senha deve ter no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.'
                }
            }
        }
    },
    {
        tableName: 'usuario',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    }
);

module.exports = Usuario