const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Language extends Model {}

Language.init(
  {
    language: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Language };
