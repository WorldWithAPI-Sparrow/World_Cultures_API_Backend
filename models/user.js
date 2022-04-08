const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class User extends Model {}

User.init(
  {
    userName: DataTypes.STRING,
    userPassword: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { User };