const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Country extends Model {}

Country.init(
  {
    countryName: DataTypes.STRING,
    
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Country };