const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Country extends Model {}

Country.init(
  {
    countryName: DataTypes.STRING,
    continent: DataTypes.STRING,
    // will try to make id string 
    // ContinentId: DataTypes.STRING
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Country };