const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class TraditionalFood extends Model {}

TraditionalFood.init({
  traditionalDish: DataTypes.STRING,
  myCountry: DataTypes.STRING,
  title: { type: DataTypes.STRING, unique: true },
}),
  {
    sequelize,
    timestamps: false,
  };

module.exports = { TraditionalFood };
