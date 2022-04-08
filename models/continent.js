const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Continent extends Model {}

Continent.init(
  {
    continentName: DataTypes.STRING,
    continentMap: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Continent };