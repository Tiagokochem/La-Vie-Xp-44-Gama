
const sequelize = require ('sequelize');
const db = require ('../database/index');
const Pacientes = require('./Pacientes');
const Psicologos = require('./Psicologos');

const Atendimentos = db.define ("Atendimentos",{
        id_atendimento: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        data_atendimento: {
            type: sequelize.DataTypes.DATE,
        },
        observacao: {
            type: sequelize.DataTypes.TEXT,
        },
        id_psicologo: {
            type: sequelize.DataTypes.INTEGER,
            references: {
                model: Psicologos,
                key: 'id',
            }
        },
        id_paciente: {
            type: sequelize.DataTypes.INTEGER,
            references:{
                model: Pacientes,
                key: 'id',
            },
        },
        createdAt : {
            type: sequelize.DataTypes.DATE
        },
        updatedAt : {
            type: sequelize.DataTypes.DATE
        }
    },
    {
        tableName: "atendimentos",
    }
);

module.exports = Atendimentos;