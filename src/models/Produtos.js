const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Produto = sequelize.define(
    'Produto',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'O nome do produto é obrigatório.'
                }
            }
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: {
                    msg: 'O preço deve ser um valor numérico válido.'
                },
                min: {
                    args: [0],
                    msg: 'O preço não pode ser negativo.'
                }
            }
        },
        estoque: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isInt: {
                    msg: 'O estoque deve ser um número inteiro.'
                },
                min: {
                    args: [0],
                    msg: 'O estoque não pode ser negativo.'
                }
            }
        }
    },
    {
        tableName: 'Produtos'
    }
);

module.exports = Produto;