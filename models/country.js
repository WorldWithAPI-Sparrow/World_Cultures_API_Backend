const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Country extends Model {}

Country.init(
  {
    countryName: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Country };
