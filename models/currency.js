const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Currency extends Model {}

Currency.init(
  {
    myCountry: DataTypes.STRING,
    currency: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Currency };
