const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class TouristAttraction extends Model {}

TouristAttraction.init(
  {
    placesToVisit: DataTypes.STRING,
    
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { TouristAttraction };