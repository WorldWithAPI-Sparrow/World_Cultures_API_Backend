const { sequelize, DataTypes, Model } = require("../db");

//import models
const { Continent } = require("../models/continent");
const { Country } = require("../models/country");
const { Currency } = require("../models/currency");
const { Language } = require("../models/language");
const { Music } = require("../models/music");
const { TouristAttraction } = require("../models/touristAttraction");
const { TraditionalFood } = require("../models/traditionalFood");
const { User } = require("../models/user");

Country.belongsTo(Continent);
Continent.hasMany(Country);

Currency.belongsTo(Country);
Country.hasMany(Currency);

Language.belongsTo(Country);
Country.hasMany(Language);

Music.belongsTo(Country);
Country.hasMany(Music);

TraditionalFood.belongsTo(Country);
Country.hasMany(TraditionalFood, {
  foreignKey: "myCountry",
});

TouristAttraction.belongsTo(Country);
Country.hasMany(TouristAttraction);

module.exports = {
  sequelize,
  Continent,
  Country,
  Currency,
  Language,
  Music,
  TouristAttraction,
  TraditionalFood,
  User,
};
