const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Music extends Model {}

Music.init(
  {
    musicVideo: DataTypes.STRING,
    songName: DataTypes.STRING,
    artistName: DataTypes.STRING,
    
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Music };