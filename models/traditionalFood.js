const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class TraditionalFood extends Model {}

TraditionalFood.init(
  {
    traditionalDish: DataTypes.STRING,
    
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { TraditionalFood };