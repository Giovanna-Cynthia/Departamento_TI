const sequelize = require("../config/config");
const { DataTypes } = require('sequelize');

const Admin = sequelize.define('Admin', {
    nome: {
        type: dataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    idade: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Admin;