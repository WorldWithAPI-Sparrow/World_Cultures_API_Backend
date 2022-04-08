const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Currency extends Model {}

Currency.init(
  {
    currency: DataTypes.STRING,
    
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Currency };